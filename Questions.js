const allQuestions = [
  { 
    id: 1,
    question: "What does HTML stand for?",
    options: {
      a: "Hyperlinks and Text Markup Language",
      b: "Home Tool Markup Language",
      c: "Hyper Text Markup Language",
      d: "Hyper Transfer Markup Language"
    },
    answer: ["c"],
    multiSelect: false
  },
  {
    id: 2,
    question: "Which of the following is a strong password practice? (Choose TWO answers)",
    options: {
      a: "Using your name",
      b: "Using a mix of letters, numbers, and symbols",
      c: "Using '123456'",
      d: "Using long passwords"
    },
    answer: ["b", "d"],
    multiSelect: true
  },
  {
    id: 3,
    question: "What is phishing?",
    options: {
      a: "A programming language",
      b: "A type of cyber attack using fake messages",
      c: "A firewall technique",
      d: "An antivirus software"
    },
    answer: ["b"],
    multiSelect: false
  },
  {
    id: 4,
    question: "Which language is mainly used for web page interactivity?",
    options: {
      a: "Python",
      b: "C++",
      c: "JavaScript",
      d: "Java"
    },
    answer: ["c"],
    multiSelect: false
  },
  {
    id: 5,
    question: "Which of the following are examples of malware? (Choose TWO answers)",
    options: {
      a: "Virus",
      b: "Firewall",
      c: "Trojan",
      d: "Router"
    },
    answer: ["a", "c"],
    multiSelect: true
  },
  {
    id: 6,
    question: "What does CSS stand for?",
    options: {
      a: "Computer Style Sheets",
      b: "Creative Style System",
      c: "Cascading Style Sheets",
      d: "Colorful Style Sheets"
    },
    answer: ["c"],
    multiSelect: false
  },
  {
    id: 7,
    question: "Which one is a type of cyber attack?",
    options: {
      a: "Debugging",
      b: "SQL Injection",
      c: "Compilation",
      d: "Refactoring"
    },
    answer: ["b"],
    multiSelect: false
  },
  {
    id: 8,
    question: "What is two-factor authentication (2FA)?",
    options: {
      a: "Using two passwords",
      b: "Logging in twice",
      c: "Using two methods to verify identity",
      d: "Using two usernames"
    },
    answer: ["c"],
    multiSelect: false
  },
  {
    id: 9,
    question: "Which of the following are secure coding practices? (Choose TWO answers)",
    options: {
      a: "Input validation",
      b: "Hardcoding passwords",
      c: "Using encryption",
      d: "Ignoring errors"
    },
    answer: ["a", "c"],
    multiSelect: true
  },
  {
    id: 10,
    question: "What does HTTPS indicate?",
    options: {
      a: "Website is fast",
      b: "Website is encrypted",
      c: "Website is free",
      d: "Website is offline"
    },
    answer: ["b"],
    multiSelect: false
  },

  {
    id: 11,
    question: "Which symbol is used for comments in JavaScript?",
    options: {
      a: "//",
      b: "<!-- -->",
      c: "#",
      d: "**"
    },
    answer: ["a"],
    multiSelect: false
  },
  {
    id: 12,
    question: "What is a firewall used for?",
    options: {
      a: "Writing code",
      b: "Blocking unauthorized network access",
      c: "Storing passwords",
      d: "Designing websites"
    },
    answer: ["b"],
    multiSelect: false
  },
  {
    id: 13,
    question: "Which of the following are programming languages? (Choose TWO answers)",
    options: {
      a: "JavaScript",
      b: "HTML",
      c: "Python",
      d: "HTTP"
    },
    answer: ["a", "c"],
    multiSelect: true
  },
  {
    id: 14,
    question: "What does SQL stand for?",
    options: {
      a: "Structured Query Language",
      b: "Secure Question Language",
      c: "System Query Logic",
      d: "Simple Query Language"
    },
    answer: ["a"],
    multiSelect: false
  },
  {
    id: 15,
    question: "Which attack targets databases?",
    options: {
      a: "Phishing",
      b: "SQL Injection",
      c: "Brute Force",
      d: "Spoofing"
    },
    answer: ["b"],
    multiSelect: false
  },

  {
    id: 16,
    question: "What does VPN stand for?",
    options: {
      a: "Virtual Private Network",
      b: "Visual Program Network",
      c: "Verified Personal Network",
      d: "Virtual Public Network"
    },
    answer: ["a"],
    multiSelect: false
  },
  {
    id: 17,
    question: "Which of these help protect user data? (Choose TWO answers)",
    options: {
      a: "Encryption",
      b: "Plain text storage",
      c: "Access control",
      d: "Public Wi-Fi"
    },
    answer: ["a", "c"],
    multiSelect: true
  },
  {
    id: 18,
    question: "What is brute force attack?",
    options: {
      a: "Guessing passwords repeatedly",
      b: "Stealing hardware",
      c: "Deleting files",
      d: "Writing malware"
    },
    answer: ["a"],
    multiSelect: false
  },
  {
    id: 19,
    question: "Which keyword declares a variable in JavaScript?",
    options: {
      a: "var",
      b: "int",
      c: "define",
      d: "letvar"
    },
    answer: ["a"],
    multiSelect: false
  },
  {
    id: 20,
    question: "What is XSS?",
    options: {
      a: "Cross-Site Scripting",
      b: "Extra Secure System",
      c: "Cross Server Security",
      d: "External Style Sheet"
    },
    answer: ["a"],
    multiSelect: false
  },
  {
    id: 21,
    question: "Which HTTP method is commonly used to update data?",
    options: { a: "GET", b: "POST", c: "PUT", d: "FETCH" },
    answer: ["c"],
    multiSelect: false
  },
  {
    id: 22,
    question: "Which of the following are hashing algorithms? (Choose TWO answers)",
    options: { a: "SHA-256", b: "AES", c: "MD5", d: "RSA" },
    answer: ["a", "c"],
    multiSelect: true
  },
  {
    id: 23,
    question: "What is the main purpose of encryption?",
    options: {
      a: "Improve speed",
      b: "Protect data confidentiality",
      c: "Compress files",
      d: "Remove malware"
    },
    answer: ["b"],
    multiSelect: false
  },
  {
    id: 24,
    question: "Which keyword prevents reassignment in JavaScript?",
    options: { a: "var", b: "let", c: "const", d: "static" },
    answer: ["c"],
    multiSelect: false
  },
  {
    id: 25,
    question: "What does OWASP stand for?",
    options: {
      a: "Open Web Application Security Project",
      b: "Online Web App Secure Program",
      c: "Open Wireless Access Security Protocol",
      d: "Official Web Application Software Platform"
    },
    answer: ["a"],
    multiSelect: false
  },
  {
    id: 26,
    question: "Which of these are types of authentication? (Choose TWO answers)",
    options: { a: "Something you know", b: "Something you have", c: "Something you delete", d: "Something you ignore" },
    answer: ["a", "b"],
    multiSelect: true
  },
  {
    id: 27,
    question: "What is a zero-day vulnerability?",
    options: {
      a: "A fake vulnerability",
      b: "A vulnerability unknown to the vendor",
      c: "A vulnerability fixed immediately",
      d: "A test vulnerability"
    },
    answer: ["b"],
    multiSelect: false
  },
  {
    id: 28,
    question: "Which symbol is used for strict equality in JavaScript?",
    options: { a: "==", b: "=", c: "===", d: "!=" },
    answer: ["c"],
    multiSelect: false
  },
  {
    id: 29,
    question: "Which of the following help prevent SQL Injection? (Choose TWO answers)",
    options: {
      a: "Parameterized queries",
      b: "User input validation",
      c: "Plain SQL strings",
      d: "Hardcoded queries"
    },
    answer: ["a", "b"],
    multiSelect: true
  },
  {
    id: 30,
    question: "What does DNS do?",
    options: {
      a: "Encrypts emails",
      b: "Maps domain names to IP addresses",
      c: "Blocks malware",
      d: "Stores passwords"
    },
    answer: ["b"],
    multiSelect: false
  },

  // ---- Medium to Advanced ----

  {
    id: 31,
    question: "Which of these is NOT a CIA triad component?",
    options: { a: "Confidentiality", b: "Integrity", c: "Availability", d: "Authenticity" },
    answer: ["d"],
    multiSelect: false
  },
  {
    id: 32,
    question: "Which JavaScript feature helps handle async operations?",
    options: { a: "Loops", b: "Callbacks", c: "Objects", d: "Arrays" },
    answer: ["b"],
    multiSelect: false
  },
  {
    id: 33,
    question: "Which of the following are symmetric encryption algorithms? (Choose TWO answers)",
    options: { a: "AES", b: "RSA", c: "DES", d: "ECC" },
    answer: ["a", "c"],
    multiSelect: true
  },
  {
    id: 34,
    question: "What is sandboxing?",
    options: {
      a: "Running code in isolation",
      b: "Deleting files",
      c: "Encrypting storage",
      d: "Blocking ports"
    },
    answer: ["a"],
    multiSelect: false
  },
  {
    id: 35,
    question: "Which port does HTTPS use by default?",
    options: { a: "21", b: "80", c: "443", d: "25" },
    answer: ["c"],
    multiSelect: false
  },
  {
    id: 36,
    question: "What is CSRF?",
    options: {
      a: "Cross-Site Request Forgery",
      b: "Cyber Security Risk Factor",
      c: "Cross Server Routing Function",
      d: "Client Side Request Filter"
    },
    answer: ["a"],
    multiSelect: false
  },
  {
    id: 37,
    question: "Which of these improve API security? (Choose TWO answers)",
    options: { a: "Authentication tokens", b: "Rate limiting", c: "Open endpoints", d: "Hardcoded secrets" },
    answer: ["a", "b"],
    multiSelect: true
  },
  {
    id: 38,
    question: "What is the purpose of a checksum?",
    options: {
      a: "Encrypt data",
      b: "Verify data integrity",
      c: "Compress data",
      d: "Authenticate users"
    },
    answer: ["b"],
    multiSelect: false
  },
  {
    id: 39,
    question: "Which JavaScript object handles JSON conversion?",
    options: { a: "JSON", b: "Object", c: "Parse", d: "Stringify" },
    answer: ["a"],
    multiSelect: false
  },
  {
    id: 40,
    question: "Which attack overwhelms systems with traffic?",
    options: { a: "Phishing", b: "DDoS", c: "MITM", d: "Spoofing" },
    answer: ["b"],
    multiSelect: false
  },

  // ---- Difficult Questions ----

  {
    id: 41,
    question: "What does Same-Origin Policy prevent?",
    options: {
      a: "Cross-site scripting",
      b: "Unauthorized cross-domain access",
      c: "SQL injection",
      d: "Password reuse"
    },
    answer: ["b"],
    multiSelect: false
  },
  {
    id: 42,
    question: "Which are public-key cryptography properties? (Choose TWO answers)",
    options: {
      a: "Uses two keys",
      b: "Faster than symmetric encryption",
      c: "Supports digital signatures",
      d: "Uses only one key"
    },
    answer: ["a", "c"],
    multiSelect: true
  },
  {
    id: 43,
    question: "What is privilege escalation?",
    options: {
      a: "Increasing network speed",
      b: "Gaining higher access rights",
      c: "Encrypting files",
      d: "Resetting passwords"
    },
    answer: ["b"],
    multiSelect: false
  },
  {
    id: 44,
    question: "Which JavaScript concept enables function access to outer scope?",
    options: { a: "Hoisting", b: "Closure", c: "Prototype", d: "Binding" },
    answer: ["b"],
    multiSelect: false
  },
  {
    id: 45,
    question: "Which are secure password storage methods? (Choose TWO answers)",
    options: { a: "Hashing", b: "Salting", c: "Plain text", d: "Base64 encoding" },
    answer: ["a", "b"],
    multiSelect: true
  },
  {
    id: 46,
    question: "What is MITM attack?",
    options: {
      a: "Man-In-The-Middle",
      b: "Memory Injection Threat Method",
      c: "Multiple Internet Traffic Manipulation",
      d: "Managed Internal Threat Model"
    },
    answer: ["a"],
    multiSelect: false
  },
  {
    id: 47,
    question: "Which JavaScript loop guarantees execution at least once?",
    options: { a: "for", b: "while", c: "do...while", d: "foreach" },
    answer: ["c"],
    multiSelect: false
  },
  {
    id: 48,
    question: "Which of these are IDS/IPS functions? (Choose TWO answers)",
    options: {
      a: "Detect intrusions",
      b: "Prevent attacks",
      c: "Compile code",
      d: "Design UI"
    },
    answer: ["a", "b"],
    multiSelect: true
  },
  {
    id: 49,
    question: "What is token-based authentication?",
    options: {
      a: "Using passwords only",
      b: "Using encrypted tokens for access",
      c: "Using MAC addresses",
      d: "Using IP filtering"
    },
    answer: ["b"],
    multiSelect: false
  },
  {
    id: 50,
    question: "Which HTTP header improves security?",
    options: {
      a: "Content-Type",
      b: "Authorization",
      c: "X-Frame-Options",
      d: "Accept"
    },
    answer: ["c"],
    multiSelect: false
  },

  // ---- Final Stretch (51–100 summary level difficulty mix) ----

  {
    id: 51,
    question: "What is code obfuscation?",
    options: {
      a: "Removing bugs",
      b: "Making code harder to understand",
      c: "Encrypting traffic",
      d: "Testing performance"
    },
    answer: ["b"],
    multiSelect: false
  },
  {
    id: 52,
    question: "Which attacks rely on social engineering? (Choose TWO answers)",
    options: { a: "Phishing", b: "Pretexting", c: "DDoS", d: "Buffer overflow" },
    answer: ["a", "b"],
    multiSelect: true
  },
  {
    id: 53,
    question: "What does JWT stand for?",
    options: {
      a: "Java Web Token",
      b: "JSON Web Token",
      c: "JavaScript Web Transfer",
      d: "Joint Web Technology"
    },
    answer: ["b"],
    multiSelect: false
  },

  {
  id: 54,
  question: "Which security principle means giving users only necessary access?",
  options: {
    a: "Defense in depth",
    b: "Least privilege",
    c: "Redundancy",
    d: "Failover"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 55,
  question: "What does MITM stand for?",
  options: {
    a: "Man In The Middle",
    b: "Multiple Internet Traffic Method",
    c: "Main Interface Transfer Mode",
    d: "Managed Internal Threat Model"
  },
  answer: ["a"],
  multiSelect: false
},
{
  id: 56,
  question: "Which protocol securely transfers files?",
  options: {
    a: "FTP",
    b: "SFTP",
    c: "HTTP",
    d: "SMTP"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 57,
  question: "Which of the following improve application security? (Choose TWO answers)",
  options: {
    a: "Regular updates",
    b: "Security testing",
    c: "Hardcoded credentials",
    d: "Disabled logging"
  },
  answer: ["a", "b"],
  multiSelect: true
},
{
  id: 58,
  question: "Which JavaScript keyword stops a loop immediately?",
  options: {
    a: "stop",
    b: "exit",
    c: "break",
    d: "return"
  },
  answer: ["c"],
  multiSelect: false
},
{
  id: 59,
  question: "What is sandboxing in cybersecurity?",
  options: {
    a: "Running code in an isolated environment",
    b: "Deleting malware files",
    c: "Encrypting databases",
    d: "Blocking network ports"
  },
  answer: ["a"],
  multiSelect: false
},
{
  id: 60,
  question: "Which is NOT a secure practice?",
  options: {
    a: "Using HTTPS",
    b: "Regular patching",
    c: "Plain text password storage",
    d: "Access control"
  },
  answer: ["c"],
  multiSelect: false
},
{
  id: 61,
  question: "What does IDS stand for?",
  options: {
    a: "Intrusion Detection System",
    b: "Internet Defense Software",
    c: "Internal Data Security",
    d: "Information Detection Service"
  },
  answer: ["a"],
  multiSelect: false
},
{
  id: 62,
  question: "Which of the following are types of malware? (Choose TWO answers)",
  options: {
    a: "Ransomware",
    b: "Spyware",
    c: "Firewall",
    d: "Load balancer"
  },
  answer: ["a", "b"],
  multiSelect: true
},
{
  id: 63,
  question: "Which JavaScript method converts an object to JSON?",
  options: {
    a: "JSON.parse()",
    b: "JSON.convert()",
    c: "JSON.stringify()",
    d: "Object.toJSON()"
  },
  answer: ["c"],
  multiSelect: false
},
{
  id: 64,
  question: "What is the purpose of salting passwords?",
  options: {
    a: "Make passwords longer",
    b: "Prevent rainbow table attacks",
    c: "Encrypt passwords",
    d: "Speed up hashing"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 65,
  question: "Which HTTP method deletes a resource?",
  options: {
    a: "POST",
    b: "GET",
    c: "DELETE",
    d: "PATCH"
  },
  answer: ["c"],
  multiSelect: false
},
{
  id: 66,
  question: "Which of these are secure coding practices? (Choose TWO answers)",
  options: {
    a: "Input validation",
    b: "Error handling",
    c: "Ignoring warnings",
    d: "Hardcoding secrets"
  },
  answer: ["a", "b"],
  multiSelect: true
},
{
  id: 67,
  question: "What does DDoS aim to do?",
  options: {
    a: "Steal passwords",
    b: "Overwhelm system resources",
    c: "Modify data",
    d: "Inject scripts"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 68,
  question: "Which JavaScript keyword is used to define a function?",
  options: {
    a: "method",
    b: "func",
    c: "function",
    d: "define"
  },
  answer: ["c"],
  multiSelect: false
},
{
  id: 69,
  question: "Which attack exploits user trust? (Choose TWO answers)",
  options: {
    a: "Phishing",
    b: "Pretexting",
    c: "DDoS",
    d: "Port scanning"
  },
  answer: ["a", "b"],
  multiSelect: true
},
{
  id: 70,
  question: "What does CORS control?",
  options: {
    a: "Cross-origin resource sharing",
    b: "Cookie encryption",
    c: "User authentication",
    d: "Database access"
  },
  answer: ["a"],
  multiSelect: false
},

// -------- DIFFICULT QUESTIONS --------

{
  id: 71,
  question: "Which of the following prevents clickjacking?",
  options: {
    a: "CORS",
    b: "X-Frame-Options",
    c: "CSRF token",
    d: "SSL"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 72,
  question: "Which JavaScript concept allows data privacy?",
  options: {
    a: "Closure",
    b: "Hoisting",
    c: "Prototype",
    d: "Inheritance"
  },
  answer: ["a"],
  multiSelect: false
},
{
  id: 73,
  question: "Which are characteristics of Zero Trust security? (Choose TWO answers)",
  options: {
    a: "Never trust, always verify",
    b: "Implicit trust inside network",
    c: "Continuous authentication",
    d: "Perimeter-only security"
  },
  answer: ["a", "c"],
  multiSelect: true
},
{
  id: 74,
  question: "What does hashing ensure?",
  options: {
    a: "Confidentiality",
    b: "Integrity",
    c: "Availability",
    d: "Authentication"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 75,
  question: "Which JavaScript method iterates over array elements?",
  options: {
    a: "map()",
    b: "filter()",
    c: "forEach()",
    d: "reduce()"
  },
  answer: ["c"],
  multiSelect: false
},
{
  id: 76,
  question: "What is privilege escalation?",
  options: {
    a: "Gaining higher-level permissions",
    b: "Encrypting user data",
    c: "Blocking user access",
    d: "Logging activities"
  },
  answer: ["a"],
  multiSelect: false
},
{
  id: 77,
  question: "Which attacks target application logic? (Choose TWO answers)",
  options: {
    a: "SQL Injection",
    b: "XSS",
    c: "DDoS",
    d: "ARP spoofing"
  },
  answer: ["a", "b"],
  multiSelect: true
},
{
  id: 78,
  question: "Which JavaScript operator checks both value and type?",
  options: {
    a: "==",
    b: "===",
    c: "=",
    d: "!="
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 79,
  question: "What is an exploit?",
  options: {
    a: "Security update",
    b: "Malware scanner",
    c: "Code that abuses a vulnerability",
    d: "Firewall rule"
  },
  answer: ["c"],
  multiSelect: false
},
{
  id: 80,
  question: "Which protocol is used for secure web browsing?",
  options: {
    a: "HTTP",
    b: "FTP",
    c: "HTTPS",
    d: "SMTP"
  },
  answer: ["c"],
  multiSelect: false
},

// -------- FINAL SET --------

{
  id: 81,
  question: "Which of these improve password security? (Choose TWO answers)",
  options: {
    a: "Password length",
    b: "Complexity",
    c: "Reuse",
    d: "Sharing"
  },
  answer: ["a", "b"],
  multiSelect: true
},
{
  id: 82,
  question: "What does API stand for?",
  options: {
    a: "Application Programming Interface",
    b: "Advanced Program Interaction",
    c: "Automated Process Integration",
    d: "Application Protocol Internet"
  },
  answer: ["a"],
  multiSelect: false
},
{
  id: 83,
  question: "Which JavaScript feature prevents accidental reassignment?",
  options: {
    a: "var",
    b: "let",
    c: "const",
    d: "static"
  },
  answer: ["c"],
  multiSelect: false
},
{
  id: 84,
  question: "What is data exfiltration?",
  options: {
    a: "Data encryption",
    b: "Unauthorized data transfer",
    c: "Data backup",
    d: "Data deletion"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 85,
  question: "Which of these are endpoint security measures? (Choose TWO answers)",
  options: {
    a: "Antivirus",
    b: "Firewall",
    c: "IDS",
    d: "Backup generator"
  },
  answer: ["a", "b"],
  multiSelect: true
},
{
  id: 86,
  question: "Which JavaScript method removes the last array element?",
  options: {
    a: "shift()",
    b: "pop()",
    c: "push()",
    d: "slice()"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 87,
  question: "What does ransomware do?",
  options: {
    a: "Steals passwords",
    b: "Encrypts data for ransom",
    c: "Monitors traffic",
    d: "Deletes files"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 88,
  question: "Which security control is detective?",
  options: {
    a: "Firewall",
    b: "IDS",
    c: "Encryption",
    d: "Access control"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 89,
  question: "Which of the following are examples of MFA? (Choose TWO answers)",
  options: {
    a: "Password",
    b: "Fingerprint",
    c: "OTP code",
    d: "Username"
  },
  answer: ["b", "c"],
  multiSelect: true
},
{
  id: 90,
  question: "What does logging help with?",
  options: {
    a: "Design",
    b: "Incident investigation",
    c: "Styling",
    d: "Compression"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 91,
  question: "Which JavaScript structure stores key-value pairs?",
  options: {
    a: "Array",
    b: "Object",
    c: "Set",
    d: "Map"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 92,
  question: "Which of these improve network security? (Choose TWO answers)",
  options: {
    a: "Network segmentation",
    b: "Strong passwords",
    c: "Open ports",
    d: "Unused services"
  },
  answer: ["a", "b"],
  multiSelect: true
},
{
  id: 93,
  question: "What is threat modeling?",
  options: {
    a: "Designing UI",
    b: "Identifying potential security threats",
    c: "Testing performance",
    d: "Encrypting data"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 94,
  question: "Which JavaScript method adds an item to the end of an array?",
  options: {
    a: "push()",
    b: "pop()",
    c: "unshift()",
    d: "splice()"
  },
  answer: ["a"],
  multiSelect: false
},
{
  id: 95,
  question: "What does a SIEM system do?",
  options: {
    a: "Manages encryption keys",
    b: "Collects and analyzes security logs",
    c: "Blocks malware",
    d: "Creates backups"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 96,
  question: "Which attack targets DNS infrastructure?",
  options: {
    a: "DNS poisoning",
    b: "XSS",
    c: "CSRF",
    d: "SQL Injection"
  },
  answer: ["a"],
  multiSelect: false
},
{
  id: 97,
  question: "Which JavaScript keyword handles errors?",
  options: {
    a: "catch",
    b: "throw",
    c: "try",
    d: "finally"
  },
  answer: ["c"],
  multiSelect: false
},
{
  id: 98,
  question: "Which of these ensure availability? (Choose TWO answers)",
  options: {
    a: "Load balancing",
    b: "Redundancy",
    c: "Encryption",
    d: "Hashing"
  },
  answer: ["a", "b"],
  multiSelect: true
},
{
  id: 99,
  question: "What is code review mainly used for?",
  options: {
    a: "Styling",
    b: "Finding bugs and vulnerabilities",
    c: "Compiling code",
    d: "Deployment"
  },
  answer: ["b"],
  multiSelect: false
},
{
  id: 100,
  question: "Which practice integrates security into development?",
  options: {
    a: "DevOps",
    b: "Agile",
    c: "DevSecOps",
    d: "Waterfall"
  },
  answer: ["c"],
  multiSelect: false
}
  
];