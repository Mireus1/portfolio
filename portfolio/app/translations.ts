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
          period: '2023 — Present',
          role: 'Senior Frontend Engineer',
          company: 'Freelance',
          summary:
            'Partnering with startups to ship accessible design systems and high-performing marketing sites.',
          stack: ['Next.js', 'TypeScript', 'Design systems', 'Accessibility']
        },
        {
          period: '2021 — 2023',
          role: 'Lead UI Engineer',
          company: 'Product Studio',
          summary:
            'Led a small team to build a component library that unified five product surfaces and reduced UI defects.',
          stack: ['React', 'Storybook', 'Design ops', 'Team lead']
        },
        {
          period: '2019 — 2021',
          role: 'Full-stack Developer',
          company: 'SaaS Startup',
          summary:
            'Shipped end-to-end features, improved onboarding flows and introduced observability to reduce downtime.',
          stack: ['Node.js', 'GraphQL', 'Postgres', 'Product discovery']
        },
        {
          period: '2016 — 2019',
          role: 'UI/UX Engineer',
          company: 'Agency',
          summary:
            'Designed and built interactive marketing experiences for global brands with a focus on motion.',
          stack: ['Animation', 'CSS architecture', 'Prototyping', 'Client work']
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
          period: '2023 — Présent',
          role: 'Ingénieur Frontend Senior',
          company: 'Freelance',
          summary:
            'Partenariat avec des startups pour livrer des design systems accessibles et des sites marketing performants.',
          stack: ['Next.js', 'TypeScript', 'Design systems', 'Accessibilité']
        },
        {
          period: '2021 — 2023',
          role: 'Lead UI Engineer',
          company: 'Product Studio',
          summary:
            "Pilotage d'une petite équipe pour construire une bibliothèque de composants qui a unifié cinq surfaces produit et réduit les bugs UI.",
          stack: ['React', 'Storybook', 'Design ops', "Lead d'équipe"]
        },
        {
          period: '2019 — 2021',
          role: 'Développeur full-stack',
          company: 'SaaS Startup',
          summary:
            "Livraison de features de bout en bout, amélioration de l'onboarding et mise en place d'observabilité pour réduire les pannes.",
          stack: ['Node.js', 'GraphQL', 'Postgres', 'Discovery produit']
        },
        {
          period: '2016 — 2019',
          role: 'Ingénieur UI/UX',
          company: 'Agence',
          summary:
            "Conception et réalisation d'expériences marketing interactives pour des marques globales avec un focus sur le motion.",
          stack: ['Animation', 'Architecture CSS', 'Prototypage', 'Clientèle']
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
