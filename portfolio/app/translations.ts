export type Language = 'en' | 'fr'

export type Project = {
  title: string
  desc: string
  link?: string
}

export type TimelineItem = {
  period: string
  role: string
  company: string
  summary: string
  stack: string[]
}

export type Copy = {
  brand: { name: string; role: string }
  profile: { name: string; location: string }
  nav: { projects: string; about: string; timeline: string; contact: string }
  hero: {
    headline: string
    lead: string
    primaryCta: string
    secondaryCta: string
  }
  projectsTitle: string
  projects: Project[]
  about: { title: string; body: string }
  timeline: { title: string; intro: string; items: TimelineItem[] }
  contact: {
    title: string
    subtitle: string
    labels: { name: string; email: string; message: string; company: string }
    placeholders: { name: string; email: string; message: string }
    submit: string
    sending: string
    validationError: string
    success: string
    genericError: string
    networkError: string
  }
  footer: { note: string }
}

export const translations: Record<Language, Copy> = {
  en: {
    brand: {
      name: 'Remi Poulenard',
      role: 'Full-stack developer — Web & AI'
    },
    profile: {
      name: 'Rémi Poulenard',
      location: 'Based in Bordeaux 🍷🇫🇷'
    },
    nav: {
      projects: 'Projects',
      about: 'About',
      timeline: 'Timeline',
      contact: 'Contact'
    },
    hero: {
      headline:
        'I build delightful, accessible interfaces and thoughtful design systems.',
      lead: "I'm a full-stack developer focused on fast experiences and great systems. I enjoy small-batch projects, component design and building tools that make teams more productive.",
      primaryCta: 'Say hello',
      secondaryCta: 'See work'
    },
    projectsTitle: 'Selected projects',
    projects: [
      {
        title: 'Indoor Cycling Monitor',
        desc: 'A fast, Markdown-powered blog with clean typography and SEO-first layout.',
        link: '#'
      },
      {
        title: 'Batchy',
        desc: 'Collaborative batch cooking made easy with recipes and meal planning.',
        link: '#'
      },
      {
        title: 'Messenger',
        desc: 'Realtime chat app with rooms and direct messaging',
        link: '#'
      }
    ],
    about: {
      title: 'About',
      body: "I'm a frontend-focused engineer who cares about performance, developer experience and accessible UI. I've shipped web apps and component systems for startups and product teams. Outside of work, I explore design tooling and small open-source projects."
    },
    timeline: {
      title: 'Timeline',
      intro:
        "A quick snapshot of recent roles, ownership and the tools I've leaned on.",
      items: [
        {
          period: 'Mar 2023 — Present',
          role: 'Full-Stack Web Developer',
          company: 'Deepbloo',
          summary:
            'Building a SaaS platform for tender analysis using AI to extract relevant business insights.',
          stack: [
            'AWS',
            'Vue.js',
            'TypeScript',
            'Node.js',
            'Python',
            'PostgreSQL',
            'ElasticSearch',
            'GrapqhQL',
            'AI',
            'NLP'
          ]
        },
        {
          period: '2022 — 2023',
          role: 'Freelance Full-Stack Web Developer',
          company: 'Deepbloo',
          summary:
            'Freelance mission to build a SaaS platform for tender analysis using AI to extract key business insights.',
          stack: [
            'AWS',
            'Vue.js',
            'TypeScript',
            'Node.js',
            'Python',
            'PostgreSQL',
            'ElasticSearch',
            'GrapqhQL',
            'AI',
            'NLP'
          ]
        },
        {
          period: 'oct 2022 — jun 2022',
          role: 'Exchange Student',
          company: 'California State University, Long Beach USA',
          summary:
            'University exchange semester focused on Digital Marketing, Management, and Economics.',
          stack: ['Marketing', 'Management', 'Economics', 'English']
        },
        {
          period: '2018 — 2023',
          role: 'EPITECH TECHNOLOGY',
          company: 'Epitech Bordeaux',
          summary:
            'Computer engineering curriculum centered on hands-on learning and team projects.',
          stack: [
            'C',
            'C++',
            'C#',
            'Algorithms',
            'React Native',
            'Project management',
            'DevOps'
          ]
        },
        {
          period: '2016 — 2018',
          role: 'Medical Entrance Exam Prep (PACES)',
          company: 'Faculty of Medicine, University of Bordeaux',
          summary:
            'Intensive study of foundational sciences to prepare for entry into second-year medical school.',
          stack: [
            'Medicine',
            'Physics',
            'Chemistry',
            'Pharmacology',
            'Microbiology',
            'Mathematics',
            'Epidemiology'
          ]
        }
      ]
    },
    contact: {
      title: 'Contact 👋',
      subtitle: 'Feel free to drop me a line',
      labels: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        company: 'Company'
      },
      placeholders: {
        name: 'Your name',
        email: 'you@domain.com',
        message: 'Tell me about your project or question'
      },
      submit: 'Send message',
      sending: 'Sending…',
      validationError: 'Please fill all fields.',
      success: 'Thanks — I will reply soon.',
      genericError: 'Something went wrong.',
      networkError: 'Network error. Please try again.'
    },
    footer: {
      note: 'Made with ❤️ using React, Next.js and Tailwind CSS'
    }
  },
  fr: {
    brand: {
      name: 'Remi Poulenard',
      role: 'Développeur full-stack — Web & IA'
    },
    profile: {
      name: 'Rémi Poulenard',
      location: 'Basé à Bordeaux 🍷🇫🇷'
    },
    nav: {
      projects: 'Projets',
      about: 'À propos',
      timeline: 'Parcours',
      contact: 'Contact'
    },
    hero: {
      headline:
        'Je crée des interfaces soignées et accessibles, ainsi que des design systems exigeants.',
      lead: "Développeur full-stack focalisé sur les expériences rapides et les systèmes robustes. J'aime les projets sur-mesure, le design de composants et les outils qui rendent les équipes plus efficaces.",
      primaryCta: 'Contactez-moi',
      secondaryCta: 'Voir mes projets'
    },
    projectsTitle: 'Projets sélectionnés',
    projects: [
      {
        title: 'Indoor Cycling Monitor',
        desc: 'Logiciel web de suivi des performances pour les cyclistes en intérieur.',
        link: '#'
      },
      {
        title: 'Batchy',
        desc: 'Cuisine en batch collaborative facilitée avec recettes et planification des repas.',
        link: '#'
      },
      {
        title: 'Messenger',
        desc: 'Application de chat en temps réel avec salons et messagerie directe',
        link: '#'
      }
    ],
    about: {
      title: 'À propos',
      body: "Ingénieur orienté frontend, sensible aux performances, à l'expérience développeur et à l'accessibilité. J'ai livré des apps web et des design systems pour des startups et équipes produit. En dehors du boulot, j'explore les outils de design et de petits projets open-source."
    },
    timeline: {
      title: 'Parcours',
      intro:
        'Un aperçu rapide des rôles récents, des responsabilités et des outils utilisés.',
      items: [
        {
          period: 'Mars 2023 — Présent',
          role: 'Développeur Full-Stack Web',
          company: 'Deepbloo',
          summary:
            "Développement d'une plateforme SaaS d'analyse d'appels d'offres utilisant l'IA pour extraire des insights commerciaux pertinents.",
          stack: [
            'AWS',
            'Vue.js',
            'TypeScript',
            'Node.js',
            'Python',
            'PostgreSQL',
            'ElasticSearch',
            'GrapqhQL',
            'AI',
            'NLP'
          ]
        },
        {
          period: '2022-2023',
          role: 'Développeur Freelance Full-Stack Web',
          company: 'Deepbloo',
          summary:
            "Mission freelance pour la création d'une plateforme SaaS d'analyse d'appels d'offres utilisant l'IA pour extraire des insights commerciaux pertinents.",
          stack: [
            'AWS',
            'Vue.js',
            'TypeScript',
            'Node.js',
            'Python',
            'PostgreSQL',
            'ElasticSearch',
            'GrapqhQL',
            'AI',
            'NLP'
          ]
        },
        {
          period: 'Oct 2021 — Juin 2022',
          role: 'California State University, Long Beach USA',
          company: 'Long Beach',
          summary:
            "Semestre d'échange universitaire axé sur le Marketing Digital, le Management et l'Economie.",
          stack: ['Marketing', 'Management', 'Economie', 'Anglais']
        },
        {
          period: '2018 — 2023',
          role: 'EPITECH TECHNOLOGY',
          company: 'Epitech Bordeaux',
          summary:
            "Cursus d'ingénierie informatique axé sur la pratique et les projets en équipe.",
          stack: [
            'C',
            'C++',
            'C#',
            'Algorithmie',
            'React Native',
            'Gestion de projets',
            'DevOps'
          ]
        },
        {
          period: '2016 — 2018',
          role: 'Préparation Concours PACES',
          company: 'Faculté de Médecine de Bordeaux',
          summary:
            "Étude intensive des sciences fondamentales en vue du concours d'entrée en deuxième année de médecine.",
          stack: [
            'Médecine',
            'Physique',
            'Chimie',
            'Pharmacologie',
            'Microbiologie',
            'Mathématiques',
            'Epidemiologie'
          ]
        }
      ]
    },
    contact: {
      title: 'Contact 👋',
      subtitle: "N'hésitez pas à me laisser un message",
      labels: {
        name: 'Nom',
        email: 'Email',
        message: 'Message',
        company: 'Entreprise'
      },
      placeholders: {
        name: 'Votre nom',
        email: 'vous@domaine.com',
        message: 'Parlez-moi de votre projet ou question'
      },
      submit: 'Envoyer',
      sending: 'Envoi…',
      validationError: 'Merci de remplir tous les champs.',
      success: 'Merci — je reviens vers vous rapidement.',
      genericError: 'Une erreur est survenue.',
      networkError: 'Erreur réseau. Veuillez réessayer.'
    },
    footer: {
      note: 'Réalisé avec ❤️ grâce à React, Next.js et Tailwind CSS'
    }
  }
}
