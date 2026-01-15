// ===== CONFIG =====
const TOTAL_QUESTIONS_PER_TEST = 50; // how many questions per quiz run
const QUESTIONS_PER_PAGE = 2;        // show 2 per page (Option A)
const INITIAL_TIME_SECONDS = 30 * 60; // 30 minutes timer (change as needed)
// ==================

// ---- state ----
let quizQuestions = [];   // selected 50 questions
let currentPage = 0;      // 0-based page index
let answers = [];         // store user's answers, index by question index in quizQuestions
let timerInterval = null;
let timeLeft = INITIAL_TIME_SECONDS;

// --- helpers ---
function shuffle(array) {
  // Fisher-Yates shuffle for unbiased randomization
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickQuestions() {
  // shuffle full bank and slice first N
  const shuffled = shuffle(allQuestions);
  // if bank < required, use whole bank
  const take = Math.min(TOTAL_QUESTIONS_PER_TEST, shuffled.length);
  return shuffled.slice(0, take);
}

// --- UI helpers ---
const qs = sel => document.querySelector(sel);
const qsa = sel => Array.from(document.querySelectorAll(sel));

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

// --- sound (Web Audio API simple tones) ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playTone(freq=440, duration=0.12, type='sine') {
  try {
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = type;
    o.frequency.value = freq;
    o.connect(g);
    g.connect(audioCtx.destination);
    g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + 0.01);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    setTimeout(()=> o.stop(), duration * 1000 + 20);
  } catch(e){
    // ignore on browsers where AudioContext is blocked
    console.warn('Audio play failed:', e);
  }
}

// --- rendering ---
function renderProgress() {
  const total = quizQuestions.length;
  const answeredCount = answers.filter(a => a !== undefined && a !== null).length;
  const progressFill = qs('#progress-fill');
  const progressText = qs('#progress-text');
  const percent = Math.round((answeredCount / total) * 100);
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${answeredCount} / ${total}`;
}

function renderPage() {
  const container = qs('#questions-container');
  container.innerHTML = '';

  const start = currentPage * QUESTIONS_PER_PAGE;
  const end = Math.min(start + QUESTIONS_PER_PAGE, quizQuestions.length);

  for (let i = start; i < end; i++) {
    const qObj = quizQuestions[i];
    const userAnswer = answers[i];

    const card = document.createElement('div');
    card.className = 'question-card';
    const title = document.createElement('p');
    title.className = 'question-title';
    title.innerHTML = `<b>${i + 1}.</b> ${qObj.question}`;
    card.appendChild(title);

    const options = document.createElement('div');
    options.className = 'options';

    Object.entries(qObj.options).forEach(([key, opt]) => {
      const optId = `q${i}_opt_${sanitizeId(opt)}`;
      const wrapper = document.createElement('label');
      wrapper.className = 'option';
      wrapper.htmlFor = optId;

      const input = document.createElement('input');
      input.type = qObj.multiSelect ? 'checkbox' : 'radio';
      input.name = `q${i}`;
      input.id = optId;
      input.value = key;
      if (userAnswer === opt) input.checked = true;
      input.addEventListener('change', () => {
        answers[i] = key;
        renderProgress();
      });

      const span = document.createElement('span');
      span.className = 'label-text';
      span.textContent = `${key}. ${opt}`;


      wrapper.appendChild(input);
      wrapper.appendChild(span);
      options.appendChild(wrapper);
    });

    card.appendChild(options);
    container.appendChild(card);
  }

  // update nav buttons
  qs('#prev-btn').disabled = currentPage === 0;
  qs('#next-btn').disabled = (currentPage + 1) * QUESTIONS_PER_PAGE >= quizQuestions.length;

  renderProgress();
  // update preview score (optional rough preview — shows how many answered)
  qs('#score-preview').textContent = `Answered: ${answers.filter(a => a).length}/${quizQuestions.length}`;
}

function sanitizeId(str) {
  return String(str).replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_\-]/g, '');
}

// --- timer ---
function startTimer() {
  qs('#time').textContent = formatTime(timeLeft);
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      submitQuiz();
      return;
    }
    qs('#time').textContent = formatTime(timeLeft);
    // play small alert at last 10 seconds
    if (timeLeft <= 10 && timeLeft > 0) playTone(880, 0.08, 'sine');
  }, 1000);
}

// --- submit and scoring ---
function submitQuiz() {
  clearInterval(timerInterval);
  // compute score
  let score = 0;
  for (let i = 0; i < quizQuestions.length; i++) {
    const given = answers[i];
    if (given && quizQuestions[i].answer.includes(given)) score++;
  }

  // save to localStorage history
  const record = {
    timestamp: new Date().toISOString(),
    score: score,
    total: quizQuestions.length
  };
  saveResult(record);

  // show result
  const resultEl = qs('#result');
  resultEl.style.display = 'block';
  resultEl.innerHTML = `Your Score: <span style="color:var(--accent)">${score}</span> / ${quizQuestions.length}`;

  qs('#submit-btn').style.display = 'none';
  qs('#try-again-btn').style.display = 'inline-block';

  playTone(660, 0.18, 'triangle'); // success chime
  renderHistory();
}

// --- storage ---
function saveResult(record) {
  try {
    const raw = localStorage.getItem('quiz_history_v1');
    const arr = raw ? JSON.parse(raw) : [];
    arr.unshift(record);
    // keep only last 20 records to avoid bloating
    localStorage.setItem('quiz_history_v1', JSON.stringify(arr.slice(0,20)));
  } catch(e) {
    console.warn('Failed to save result', e);
  }
}

function renderHistory() {
  const raw = localStorage.getItem('quiz_history_v1');
  const arr = raw ? JSON.parse(raw) : [];
  const list = qs('#history-list');
  list.innerHTML = '';
  if (arr.length === 0) {
    list.innerHTML = '<li class="history-item">No past results yet.</li>';
    return;
  }
  arr.forEach(item => {
    const li = document.createElement('li');
    li.className = 'history-item';
    const date = new Date(item.timestamp);
    li.innerHTML = `<div><strong>${item.score}/${item.total}</strong><div style="font-size:0.85rem;color:var(--muted)">${date.toLocaleString()}</div></div>`;
    list.appendChild(li);
  });
}

// --- init and events ---
function initQuiz() {
  quizQuestions = pickQuestions();
  // init answers to undefined
  answers = new Array(quizQuestions.length);
  currentPage = 0;
  timeLeft = INITIAL_TIME_SECONDS;

  // render first page and start timer
  renderPage();
  startTimer();
  renderHistory();
}

document.addEventListener('DOMContentLoaded', () => {
  // wire buttons
  qs('#next-btn').addEventListener('click', () => {
    if ((currentPage + 1) * QUESTIONS_PER_PAGE < quizQuestions.length) {
      currentPage++;
      renderPage();
      playTone(800, 0.06, 'sine');
    }
  });
  qs('#prev-btn').addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      renderPage();
      playTone(440, 0.06, 'sine');
    }
  });

  qs('#submit-btn').addEventListener('click', () => {
    // confirm before submit
    if (!confirm('Submit quiz now?')) return;
    submitQuiz();
  });

  qs('#try-again-btn').addEventListener('click', () => {
    // reload page to reshuffle and start fresh
    window.location.reload();
  });

  // initialize quiz
  initQuiz();
});