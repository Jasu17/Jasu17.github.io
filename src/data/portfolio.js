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
    tags: ["Python", "CLI", "Security"],
    status: "active",
    repo: "https://github.com/Jasu17/log-analyzer.git",
  },
  {
    id: "config-auditor",
    name: "config-auditor",
    description: "Modular Linux security auditing tool with 0–100 scoring and CI/CD integration.",
    tags: ["Bash", "Linux", "Auditing"],
    status: "active",
    repo: "https://github.com/Jasu17/Config-auditor.git",
  },
  {
    id: "hardening-toolkit",
    name: "linux-hardening-toolkit",
    description: "Modular hardening toolkit covering SSH, firewall, sysctl, services, users, and audit domains.",
    tags: ["Bash", "Linux", "Hardening"],
    status: "active",
    repo: "https://github.com/Jasu17/linux-hardening-toolkit.git",
  },
]

export const skills = [
  { category: "Languages", items: ["Python", "Bash", "JavaScript"] },
  { category: "Security", items: ["Log Analysis", "System Auditing", "Hardening"] },
  { category: "Tools", items: ["Linux", "Git", "React", "Vite"] },
]