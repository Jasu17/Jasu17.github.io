export const t = {
  en: {
    nav: {
      whoami: 'whoami',
      about: 'about',
      focus: 'current focus',
      projects: 'projects',
      skills: 'skills',
      timeline: 'timeline',
      contact: 'contact',
    },
    hero: {
      commands: [
        { prompt: 'whoami', type: 'text' },
        { prompt: 'cat role.txt', type: 'text' },
        { prompt: 'cat focus.txt', type: 'text' },
        { prompt: 'cat currently_building.txt', type: 'list' },
      ],
    },
    about: {
      command: 'cat about.txt',
      lines: [
        "Systems Engineering student with a focus on cybersecurity and backend development.",
        "Regular Linux user — most of my tools are built for and tested on Linux environments.",
        "I gravitate toward CLI tooling, security automation, and understanding how systems work at a low level.",
        "Currently building practical projects that solve real security and analysis problems.",
      ],
    },
    focus: {
      command: 'cat current_focus.txt',
      comment: '# what i\'m working on right now',
    },
    projects: {
      command: 'ls ./projects',
      status: {
        active: 'active',
        wip: 'in progress',
        archived: 'archived',
      },
      viewDetails: 'view details',
      repo: 'repo →',
      sections: {
        overview: 'overview',
        problem: 'problem',
        solution: 'solution',
        challenges: 'challenges',
        lessons: 'lessons learned',
        features: 'features',
        stack: 'stack',
        repo: '→ view repository on GitHub',
      },
      close: '✕ close',
    },
    skills: {
      command: 'cat skills.json',
    },
    timeline: {
      command: 'cat timeline.log',
    },
    contact: {
      command: 'contact --list',
      links: {
        github: 'github',
        linkedin: 'linkedin',
      },
    },
  },

  es: {
    nav: {
      whoami: 'whoami',
      about: 'sobre mí',
      focus: 'enfoque actual',
      projects: 'proyectos',
      skills: 'habilidades',
      timeline: 'cronología',
      contact: 'contacto',
    },
    hero: {
      commands: [
        { prompt: 'whoami', type: 'text' },
        { prompt: 'cat rol.txt', type: 'text' },
        { prompt: 'cat enfoque.txt', type: 'text' },
        { prompt: 'cat construyendo_actualmente.txt', type: 'list' },
      ],
    },
    about: {
      command: 'cat sobre_mi.txt',
      lines: [
        "Estudiante de Ingeniería de Sistemas con enfoque en ciberseguridad y desarrollo backend.",
        "Usuario habitual de Linux — la mayoría de mis herramientas están construidas y probadas en entornos Linux.",
        "Me inclino hacia herramientas CLI, automatización de seguridad y entender cómo funcionan los sistemas a bajo nivel.",
        "Actualmente construyendo proyectos prácticos que resuelven problemas reales de seguridad y análisis.",
      ],
    },
    focus: {
      command: 'cat enfoque_actual.txt',
      comment: '# en qué estoy trabajando ahora',
    },
    projects: {
      command: 'ls ./proyectos',
      status: {
        active: 'activo',
        wip: 'en progreso',
        archived: 'archivado',
      },
      viewDetails: 'ver detalles',
      repo: 'repo →',
      sections: {
        overview: 'descripción general',
        problem: 'problema',
        solution: 'solución',
        challenges: 'desafíos',
        lessons: 'lecciones aprendidas',
        features: 'funcionalidades',
        stack: 'tecnologías',
        repo: '→ ver repositorio en GitHub',
      },
      close: '✕ cerrar',
    },
    skills: {
      command: 'cat habilidades.json',
    },
    timeline: {
      command: 'cat cronologia.log',
    },
    contact: {
      command: 'contacto --lista',
      links: {
        github: 'github',
        linkedin: 'linkedin',
      },
    },
  },
}