export const profile = {
  name: "Javier Alejandro S.",
  handle: "Jasu17",
  title: "Systems Engineering Student",
  bio: "Interested in cybersecurity, backend development, Linux and security automation.",
  location: "Colombia",
  github: "https://github.com/Jasu17",
  linkedin: "https://linkedin.com/in/javier-alejandro-s-526483321",
  avatarPlaceholder: false,
  avatar: "/avatar.jpg",
  currentlyBuilding: [
    "Linux Hardening Toolkit",
    "Web Log Security Analyzer",
  ],
  currentFocus: [
  "Linux Hardening Toolkit",
  "Spring Boot backend development",
  "Security automation tools",
],
}

export const projects = [
  {
    id: "log-analyzer",
    name: "log-analyzer",
    description: "Web server log analysis tool with attack pattern detection, risk scoring, and JSON export.",
    longDescription: "Parses Apache and Nginx access logs to detect common attack patterns such as SQL injection, XSS, and path traversal. Assigns a risk score per request and generates structured JSON reports for further processing or integration with other tools.",
    problem: "Manual log review is time-consuming and error-prone. Security teams need automated tools to quickly identify suspicious activity in web server logs.",
    solution: "A CLI tool that ingests raw log files, applies pattern matching against a curated ruleset, scores each request by risk level, and outputs a structured JSON report.",
    features: [
      "Apache and Nginx log parsing",
      "Attack pattern detection (SQLi, XSS, path traversal)",
      "Per-request risk scoring",
      "JSON report export",
      "Configurable detection rules",
    ],
    tags: ["Python", "CLI", "Security"],
    stack: ["Python", "Regex", "JSON"],
    status: "active",
    date: "2025",
    repo: "https://github.com/tu-usuario/log-analyzer",
    challenges: "Balancing detection coverage with false positive rate required iterative tuning of pattern matching rules.",
    lessons: "Learned how attackers craft malicious requests and how to structure detection logic for extensibility.",
  },
  {
    id: "config-auditor",
    name: "config-auditor",
    description: "Modular Linux security auditing tool with 0–100 scoring and CI/CD integration.",
    longDescription: "Audits Linux system configurations across SSH, firewall, file permissions, and system practices. Produces a scored report and supports a --fail-under flag for integration into CI/CD pipelines.",
    problem: "System administrators lack a fast, automated way to verify that Linux configurations meet security baselines before deployment.",
    solution: "A Bash-based auditing tool with modular checks, a 0–100 scoring system, and machine-readable output suitable for pipeline integration.",
    features: [
      "Modular checks: SSH, firewall, permissions, system practices",
      "0–100 security score",
      "CI/CD integration via --fail-under flag",
      "JSON and plain text output",
      "Extensible check modules",
    ],
    tags: ["Bash", "Linux", "Auditing"],
    stack: ["Bash", "Linux", "JSON"],
    status: "active",
    date: "2025",
    repo: "https://github.com/tu-usuario/config-auditor",
    challenges: "Ensuring consistent behavior across different Linux distributions required careful handling of system-specific paths and commands.",
    lessons: "Deepened understanding of Linux security baselines and how to write portable, modular Bash scripts.",
  },
  {
    id: "hardening-toolkit",
    name: "linux-hardening-toolkit",
    description: "Modular hardening toolkit covering SSH, firewall, sysctl, services, users, and audit domains.",
    longDescription: "A collection of Bash modules that apply security hardening measures to a Linux system. Each module targets a specific domain and can be run independently or as part of a full hardening run.",
    problem: "Manually hardening a Linux system is repetitive and inconsistent across environments. There is no single tool that covers all common hardening domains in a modular way.",
    solution: "A toolkit where each hardening domain is an independent module, allowing selective or full application of security measures with logging and rollback support.",
    features: [
      "Modular design: SSH, firewall, sysctl, services, users, audit",
      "Selective or full hardening runs",
      "Execution logging",
      "Rollback support",
      "Aligned with common security benchmarks",
    ],
    tags: ["Bash", "Linux", "Hardening"],
    stack: ["Bash", "Linux", "systemd"],
    status: "active",
    date: "2026",
    repo: "https://github.com/tu-usuario/linux-hardening-toolkit",
    challenges: "Designing rollback mechanisms that work reliably across different system states without causing unintended side effects.",
    lessons: "Gained a deeper understanding of Linux internals, sysctl parameters, and how hardening decisions impact system behavior.",
  },
]

export const skills = [
  {
    category: "Backend",
    items: [
      { name: "Java", level: 7 },
      { name: "Spring Boot", level: 6 },
      { name: "Python", level: 8 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 6 },
      { name: "HTML", level: 6 },
      { name: "CSS", level: 6 },
    ],
  },
  {
    category: "Security",
    items: [
      { name: "Linux Hardening", level: 7 },
      { name: "Log Analysis", level: 8 },
      { name: "System Auditing", level: 7 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Linux", level: 8 },
      { name: "Git", level: 7 },
      { name: "Docker", level: 2 },
    ],
  },
]

export const timeline = [
  {
    year: "2024",
    events: [
      "Started Systems Engineering degree",
      "Began learning Linux seriously",
      "First steps in Python and Bash scripting",
    ],
  },
  {
    year: "2025",
    events: [
      "Built Web Log Security Analyzer",
      "Built Config Auditor",
      "Started learning Spring Boot and Java backend",
    ],
  },
  {
    year: "2026",
    events: [
      "Built Linux Hardening Toolkit",
      "Started portfolio website",
      "Exploring blockchain and distributed systems",
    ],
  },
]