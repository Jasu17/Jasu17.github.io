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
    es: {
      description: "Herramienta de análisis de logs de servidores web con detección de patrones de ataque, puntuación de riesgo y exportación JSON.",
      longDescription: "Analiza logs de acceso de Apache y Nginx para detectar patrones de ataque comunes como inyección SQL, XSS y path traversal. Asigna una puntuación de riesgo por solicitud y genera reportes JSON estructurados.",
      problem: "La revisión manual de logs es lenta y propensa a errores. Los equipos de seguridad necesitan herramientas automatizadas para identificar actividad sospechosa rápidamente.",
      solution: "Una herramienta CLI que procesa archivos de log, aplica coincidencia de patrones contra un conjunto de reglas, puntúa cada solicitud por nivel de riesgo y genera un reporte JSON.",
      features: [
        "Análisis de logs de Apache y Nginx",
        "Detección de patrones de ataque (SQLi, XSS, path traversal)",
        "Puntuación de riesgo por solicitud",
        "Exportación de reportes JSON",
        "Reglas de detección configurables",
      ],
      challenges: "Balancear la cobertura de detección con la tasa de falsos positivos requirió ajuste iterativo de las reglas.",
      lessons: "Aprendí cómo los atacantes construyen solicitudes maliciosas y cómo estructurar la lógica de detección para extensibilidad.",
    },
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
    es: {
      description: "Herramienta modular de auditoría de seguridad Linux con puntuación 0–100 e integración CI/CD.",
      longDescription: "Audita configuraciones del sistema Linux en SSH, firewall, permisos de archivos y prácticas del sistema. Produce un reporte puntuado y soporta el flag --fail-under para integración en pipelines CI/CD.",
      problem: "Los administradores de sistemas carecen de una forma rápida y automatizada de verificar que las configuraciones Linux cumplan con las líneas base de seguridad antes del despliegue.",
      solution: "Una herramienta de auditoría en Bash con verificaciones modulares, un sistema de puntuación 0–100 y salida legible por máquina adecuada para integración en pipelines.",
      features: [
        "Verificaciones modulares: SSH, firewall, permisos, prácticas del sistema",
        "Puntuación de seguridad 0–100",
        "Integración CI/CD mediante flag --fail-under",
        "Salida en JSON y texto plano",
        "Módulos de verificación extensibles",
      ],
      challenges: "Garantizar un comportamiento consistente en diferentes distribuciones Linux requirió manejo cuidadoso de rutas y comandos específicos del sistema.",
      lessons: "Profundicé en las líneas base de seguridad de Linux y en cómo escribir scripts Bash modulares y portables.",
    },
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
    es: {
      description: "Toolkit modular de hardening que cubre SSH, firewall, sysctl, servicios, usuarios y dominios de auditoría.",
      longDescription: "Una colección de módulos Bash que aplican medidas de hardening de seguridad a un sistema Linux. Cada módulo apunta a un dominio específico y puede ejecutarse de forma independiente o como parte de un hardening completo.",
      problem: "El hardening manual de un sistema Linux es repetitivo e inconsistente entre entornos. No existe una herramienta única que cubra todos los dominios comunes de hardening de forma modular.",
      solution: "Un toolkit donde cada dominio de hardening es un módulo independiente, permitiendo aplicación selectiva o completa de medidas de seguridad con soporte de logging y rollback.",
      features: [
        "Diseño modular: SSH, firewall, sysctl, servicios, usuarios, auditoría",
        "Ejecuciones de hardening selectivas o completas",
        "Logging de ejecución",
        "Soporte de rollback",
        "Alineado con benchmarks de seguridad comunes",
      ],
      challenges: "Diseñar mecanismos de rollback que funcionen de manera confiable en diferentes estados del sistema sin causar efectos no deseados.",
      lessons: "Obtuve una comprensión más profunda de los internos de Linux, parámetros sysctl y cómo las decisiones de hardening impactan el comportamiento del sistema.",
    },
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
    events: {
      en: [
        "Focused on Linux administration and scripting",
        "Developed Python and Bash automation tools",
        "Started studying cybersecurity concepts",
      ],
      es: [
        "Enfoque en administración de Linux y scripting",
        "Desarrollé herramientas de automatización en Python y Bash",
        "Comencé a estudiar conceptos de ciberseguridad",
      ],
    },
  },
  {
    year: "2025",
    events: {
      en: [
        "Built Web Log Security Analyzer",
        "Developed Config Auditor",
        "Expanded backend development skills with Java",
      ],
      es: [
        "Construí Web Log Security Analyzer",
        "Desarrollé Config Auditor",
        "Expandí habilidades de desarrollo backend con Java",
      ],
    },
  },
  {
    year: "2026",
    events: {
      en: [
        "Built Linux Hardening Toolkit",
        "Developed portfolio website",
        "Created a Spring Boot management system for a coffee business",
      ],
      es: [
        "Construí Linux Hardening Toolkit",
        "Desarrollé sitio web de portafolio",
        "Creé un sistema de gestión en Spring Boot para un negocio de café",
      ],
    },
  },
]