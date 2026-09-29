export type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  github?: string
  featured?: boolean
}

export type SkillCategory = {
  title: string
  items: string[]
}

export const profile = {
  name: 'Massimiliano Tagliabue',
  shortName: 'Massimiliano',
  role: 'Web Developer & IT Specialist',
  /** Inserisci qui la tua email reale (es. "nome@dominio.com") */
  email: '',
  linkedin: 'https://www.linkedin.com/in/massimiliano-tagliabue/',
  github: 'https://github.com/MassimilianoTagliabue',
  lead:
    'Sviluppo interfacce web moderne, veloci e funzionali, con esperienza nella gestione di database NoSQL e infrastrutture IT.',
}

export const projects: Project[] = [
  {
    title: 'Studio Pozzi',
    category: 'Web App / Prototipo',
    description:
      'Sito vetrina per studio di consulenza contabile e fiscale, progettato con focus su accessibilità, chiarezza dei servizi offerti e form di contatto diretto per i clienti.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    github: 'https://github.com/MassimilianoTagliabue/studio-pozzi',
    featured: true,
  },
  {
    title: 'New Fisiomed',
    category: 'Redesign Concept',
    description:
      'Restyling moderno per una clinica fisioterapica, ottimizzato per dispositivi mobile e integrato con un form per la richiesta di appuntamenti e informazioni.',
    tags: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Lucide Icons',
      'Vercel',
    ],
    github: 'https://github.com/MassimilianoTagliabue/new-fisiomed',
    featured: true,
  },
  {
    title: 'Quote Car Pro',
    category: 'Web App / Business Tool',
    description:
      'Applicazione web interattiva per la gestione e la generazione rapida di preventivi per riparazioni e interventi di carrozzeria, con calcolo dinamico dei costi.',
    tags: ['React', 'JavaScript', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/MassimilianoTagliabue/quote-car-pro',
  },
  {
    title: 'Personal Finance Tracker',
    category: 'Personal Tool',
    description:
      'Web app per il tracciamento e il bilancio delle entrate e uscite mensili personali, con reportistica visiva e gestione dei flussi finanziari.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Lovable'],
  },
]

export const systemsHighlights = [
  'Gestione e configurazione di cluster MongoDB (Replica Sets, Sharding, Pipeline di Aggregazione avanzate).',
  'Amministrazione di sistemi Linux (Ubuntu Terminal, scripting Bash per automazioni).',
  'Gestione di ambienti di virtualizzazione (Proxmox) e supporto tecnico di rete/sistemi.',
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    items: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'HTML5 / CSS3',
    ],
  },
  {
    title: 'Backend & Database',
    items: ['MongoDB', 'Node.js', 'REST API'],
  },
  {
    title: 'Tools & DevOps',
    items: [
      'Linux (Ubuntu)',
      'Git',
      'GitHub',
      'Vercel',
      'Vite',
      'Proxmox',
      'AI Tools (Cursor, Lovable)',
    ],
  },
]

export const socials = [
  {
    label: 'GitHub',
    href: profile.github,
    handle: '@MassimilianoTagliabue',
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    handle: '/in/massimiliano-tagliabue',
  },
  ...(profile.email
    ? [
        {
          label: 'Email',
          href: `mailto:${profile.email}`,
          handle: profile.email,
        },
      ]
    : []),
]
