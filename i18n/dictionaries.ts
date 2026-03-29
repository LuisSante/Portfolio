import { i18n, type Locale, normalizeLocale } from './config';

interface ExperienceItem {
  name_project: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  responsibilities: string[];
}

interface ProjectItem {
  name: string;
  date: string;
  github: string;
  repositoryState: 'private' | 'public';
  description: string;
  location: string;
  knowledge: string[];
}

interface PublicationItem {
  title: string;
  role: string;
  organization: string;
  conference: string | null;
  journal: string | null;
  knowledge: string[];
  technology: string[];
  doi: string | null;
  github: {
    url: string;
    state: 'private' | 'public';
  };
}

interface BachelorThesisItem {
  title: string;
  description: string;
  videoUrl: string;
  slidesUrl: string;
  pdfUrl: string;
  knowledge: string[];
  location: string;
  date: string;
}

interface EducationItem {
  institution: string;
  ubication: string;
  degree: string;
  period: string;
  location: string;
}

interface CertificationItem {
  name: string;
  organization: string;
  date: string;
  description: string;
  certificateUrl: string;
}

export interface Dictionary {
  metadata: {
    title: string;
    description: string;
  };
  navbar: {
    navigation: string;
    social: string;
    language: string;
    sections: {
      landing: string;
      experience: string;
      education: string;
      skills: string;
      projects: string;
      publications: string;
      contact: string;
    };
    socialLinks: {
      github: string;
      linkedin: string;
      whatsapp: string;
      instagram: string;
      googleScholar: string;
      orcid: string;
    };
    languageNames: Record<Locale, string>;
  };
  landing: {
    intro: string;
    words: {
      desktopLine1: string[];
      desktopLine2: string[];
      mobile: string[];
    };
    tags: string[];
    actions: {
      downloadCv: string;
      contactMe: string;
    };
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  education: {
    title: string;
    certificationsTitle: string;
    labels: {
      ubication: string;
      location: string;
      organization: string;
      date: string;
      certificateUrl: string;
    };
    items: EducationItem[];
    certifications: CertificationItem[];
  };
  skills: {
    title: string;
  };
  projects: {
    title: string;
    labels: {
      date: string;
      location: string;
      knowledge: string;
      github: string;
      privateRepo: string;
      publicRepo: string;
    };
    items: ProjectItem[];
  };
  publications: {
    title: string;
    labels: {
      conference: string;
      journal: string;
      knowledge: string;
      technology: string;
      doi: string;
      github: string;
      privateRepo: string;
      publicRepo: string;
      location: string;
    };
    items: PublicationItem[];
  };
  bachelorThesis: {
    title: string;
    labels: {
      location: string;
      date: string;
      knowledge: string;
      pdf: string;
      slides: string;
      video: string;
    };
    item: BachelorThesisItem;
  };
  contact: {
    title: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
  };
}

const baseDictionaries: Record<'en' | 'es' | 'pt', Dictionary> = {
  en: {
    metadata: {
      title: 'Portfolio Luis Sante',
      description: 'Welcome to my portfolio!',
    },
    navbar: {
      navigation: 'Navigation',
      social: 'Social',
      language: 'Language',
      sections: {
        landing: 'Home',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        projects: 'Projects',
        publications: 'Publications',
        contact: 'Contact Me',
      },
      socialLinks: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
        googleScholar: 'Google Scholar',
        orcid: 'ORCID',
      },
      languageNames: {
        en: 'EN',
        es: 'ES',
        pt: 'PT',
        fr: 'FR',
        de: 'DE',
        it: 'IT',
      },
    },
    landing: {
      intro:
        "Hello, I'm Luis Sante. Data Scientist Researcher with advanced Software Engineering expertise, building scalable AI products from research to production.",
      words: {
        desktopLine1: ['Data', 'Science'],
        desktopLine2: ['and', 'Machine', 'Learning'],
        mobile: ['Data Science', 'and', 'Machine Learning'],
      },
      tags: [
        'Natural Language Processing',
        'Graph Neural Network',
        'Transformers',
        'Graph',
        'RAG',
        'FullStack',
      ],
      actions: {
        downloadCv: 'Download CV',
        contactMe: 'Contact Me',
      },
    },
    experience: {
      title: 'Experience',
      items: [
        {
          name_project: 'LegalXplain',
          role: 'Backend Developer',
          organization: 'Visual Data Science - FGV EMAP',
          period: 'Mar 2025 - now',
          location: 'Rio de Janeiro, Brazil',
          responsibilities: [
            'Developed backend services for LegalXplain platform using NLP ',
            'Deployed scalable ML/NLP pipelines into production',
            'Improved accessibility and understanding of legal documents',
          ],
        },
        {
          name_project: 'Sentiment Analysis and Structural Topic Modeling (SA-STM)',
          role: 'Machine Learning Researcher',
          organization: 'Excelsius',
          period: 'Oct 2024 - Feb 2025',
          location: 'Lima, Peru',
          responsibilities: [
            'Applied sentiment analysis and Structural Topic Modeling (STM)',
            'Classified software requirements from user reviews',
          ],
        },
        {
          name_project: 'Trading World EVS Official Website',
          role: 'Freelance Full-Stack Developer',
          organization: 'Freelance',
          period: 'Jun 2024 - Oct 2024',
          location: 'Arequipa, Peru',
          responsibilities: [
            'Developed official website',
            'Built responsive UI and backend integration',
          ],
        },
        {
          name_project: 'LexCom',
          role: 'Tech Lead',
          organization: 'Lexcom.tech',
          period: 'Oct 2023 - Oct 2024',
          location: 'Arequipa, Peru',
          responsibilities: [
            'Led development of profitability prediction system',
            'Built ML models for e-commerce data',
            'Integrated OpenAI-based text generation services',
            'Handled full-stack and cloud deployment',
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      certificationsTitle: 'Certifications',
      labels: {
        ubication: 'Ubication',
        location: 'Location',
        organization: 'Organization',
        date: 'Date',
        certificateUrl: 'Certificate URL',
      },
      items: [
        {
          institution: 'Getulio Vargas Foundation',
          ubication: 'https://maps.app.goo.gl/tJgGKJWCpEm2XEq56',
          degree: "Master's in Data Science & Artificial Intelligence",
          period: '2025 - Present',
          location: 'Rio de Janeiro, Brazil',
        },
        {
          institution: 'Getulio Vargas Foundation',
          ubication: 'https://maps.app.goo.gl/tJgGKJWCpEm2XEq56',
          degree: 'Summer School in Data Science & Artificial Intelligence',
          period: 'Jan 2025 - Mar 2025',
          location: 'Rio de Janeiro, Brazil',
        },
        {
          institution: 'National University of San Agustín',
          ubication: 'https://maps.app.goo.gl/5HHyhvRnv78PTJ1t8',
          degree: "Bachelor's in Computer Science",
          period: '2019 - 2023',
          location: 'Arequipa, Peru',
        },
      ],
      certifications: [
        {
          name: 'Speaker on Topic Modeling',
          organization: 'National University of Engineering (UNI)',
          date: 'Oct 28, 2024',
          description: 'Explained LDA and compared with clustering methods.',
          certificateUrl: 'https://www.uni.edu.pe/',
        },
        {
          name: 'AWS Cloud Architecting',
          organization: 'Amazon Web Services',
          date: 'Dec 2023',
          description: 'Focused on cloud optimization and architecture.',
          certificateUrl: 'https://www.credly.com/',
        },
        {
          name: 'Fundamentals of Accelerated Data Science',
          organization: 'NVIDIA',
          date: 'Oct 2022',
          description: 'Used CUDA and RAPIDS for ML acceleration.',
          certificateUrl: 'https://learn.nvidia.com/',
        },
      ],
    },
    skills: {
      title: 'Skills',
    },
    projects: {
      title: 'Projects',
      labels: {
        date: 'Date',
        location: 'Location',
        knowledge: 'Knowledge',
        github: 'GitHub',
        privateRepo: 'Private repository',
        publicRepo: 'Public repository',
      },
      items: [
        {
          name: 'Security Urban Perception Tracking',
          date: 'Jun 2025',
          github: 'https://github.com/FGV-VIS-2025/final-project-security-urban-perception-tracking',
          repositoryState: 'public',
          description:
            'Visual prototype exploring urban security perception using eye-tracking data across participants.',
          location: 'Rio de Janeiro, Brazil',
          knowledge: [
            'Eye-Tracking Data Analysis',
            'Visual Analytics',
            'Spatiotemporal Data Visualization',
          ],
        },
        {
          name: 'Fine-Tuning LLaMA 2 with QLoRA',
          date: 'Aug 2024',
          github: 'https://github.com/LuisSante/Fine-Tuning-of-LLaMA-2-with-QLoRA-Optimization',
          repositoryState: 'public',
          description:
            "Conducted fine-tuning of the 'NousResearch/Llama-2-7b-chat-hf' model using the 'mlabonne/guanaco-llama2-1k' dataset to create the customized 'llama-2-7b-miniguanaco' model. Implemented QLoRA with a 64-dimension LoRA attention layer and 4-bit precision to optimize model performance while maintaining resource efficiency.",
          location: 'Arequipa, Peru',
          knowledge: ['Fine Tuning', 'Python', 'HuggingFace', 'PyTorch', 'LLaMA2', 'QLoRA'],
        },
      ],
    },
    publications: {
      title: 'Publications',
      labels: {
        conference: 'Conference',
        journal: 'Journal',
        knowledge: 'Knowledge',
        technology: 'Technology',
        doi: 'DOI',
        github: 'GitHub',
        privateRepo: 'Private repository',
        publicRepo: 'Public repository',
        location: 'Location',
      },
      items: [
        {
          title: 'UrbanClipAtlas: A Visual Analytics Framework for Event and Scene Retrieval in Urban Videos',
          role: 'Data Scientist Researcher',
          organization: 'Visual Data Science - FGV EMAP',
          conference: 'EuroVis',
          journal: null,
          knowledge: [
            'Vision-Language Models (VLMs)',
            'Knowledge Graphs',
            'Spatiotemporal Data Analysis',
            'Event and Scene Retrieval',
            'Computer Vision',
          ],
          technology: [
            'Python',
            'HuggingFace',
            'YOLOv8-World',
            'Svelte',
            'TypeScript',
            'WebSockets',
          ],
          doi: null,
          github: {
            url: 'https://github.com/visual-ds/urbanclipatlas',
            state: 'private',
          },
        },
        {
          title: 'STRive: An association rule-based system for the exploration of spatiotemporal categorical data',
          role: 'Data Scientist Researcher',
          organization: 'Visual Data Science - FGV EMAP',
          conference: null,
          journal: 'Computer & Graphics - SIBGRAPI',
          knowledge: ['Association Rule Mining', 'Clustering', 'Spatiotemporal Data Analysis'],
          technology: ['Python', 'scikit-learn', 'D3.js', 'TypeScript'],
          doi: 'https://doi.org/10.1016/j.cag.2025.104410',
          github: {
            url: 'https://github.com/visual-ds/STRive',
            state: 'public',
          },
        },
      ],
    },
    bachelorThesis: {
      title: "Bachelor's Thesis",
      labels: {
        location: 'Location',
        date: 'Date',
        knowledge: 'Knowledge',
        pdf: 'PDF',
        slides: 'Slides',
        video: 'Video',
      },
      item: {
        title: 'Topic modeling using Agglomerative Clustering and Sentence-BERT on user comments',
        description:
          'Topic modeling to find functionalities within user reviews of a Google Play Store app using unsupervised algorithms and sentence embeddings with Transformers. This research contributed to better understanding user needs and app development priorities.',
        videoUrl: 'https://drive.google.com/file/d/1vkVYZGOzVnDu395V3ZxhEOlWddsvIbun/view',
        slidesUrl: 'https://drive.google.com/file/d/13NJ4fZ0zsP3R3hzTZ9u3TKeIhvfhJfps/view',
        pdfUrl: 'https://drive.google.com/file/d/1I_xpMxvrG9xbJGiTDUOIom6ZEkxK1kNK/view',
        knowledge: ['NLP', 'Topic Modelling', 'Transformers', 'Clustering'],
        location: 'Arequipa, Peru',
        date: 'Aug 2024',
      },
    },
    contact: {
      title: 'Contact me',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'email@gmail.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Type your message here.',
      submit: 'Submit',
    },
  },
  es: {
    metadata: {
      title: 'Portafolio Luis Sante',
      description: 'Bienvenido a mi portafolio.',
    },
    navbar: {
      navigation: 'Navegación',
      social: 'Redes',
      language: 'Idioma',
      sections: {
        landing: 'Inicio',
        experience: 'Experiencia',
        education: 'Educación',
        skills: 'Habilidades',
        projects: 'Proyectos',
        publications: 'Publicaciones',
        contact: 'Contáctame',
      },
      socialLinks: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
        googleScholar: 'Google Académico',
        orcid: 'ORCID',
      },
      languageNames: {
        en: 'EN',
        es: 'ES',
        pt: 'PT',
        fr: 'FR',
        de: 'DE',
        it: 'IT',
      },
    },
    landing: {
      intro:
        'Hola, soy Luis Sante. Data Scientist Researcher con conocimientos avanzados en Ingeniería de Software, enfocado en construir soluciones de IA escalables de investigación a producción.',
      words: {
        desktopLine1: ['Data', 'Science'],
        desktopLine2: ['y', 'Machine', 'Learning'],
        mobile: ['Data Science', 'y', 'Machine Learning'],
      },
      tags: [
        'Natural Language Processing',
        'Graph Neural Network',
        'Transformers',
        'Graph',
        'RAG',
        'FullStack',
      ],
      actions: {
        downloadCv: 'Descargar CV',
        contactMe: 'Contáctame',
      },
    },
    experience: {
      title: 'Experiencia',
      items: [
        {
          name_project: 'LegalXplain',
          role: 'Backend Developer',
          organization: 'Visual Data Science - FGV EMAP',
          period: 'Mar 2025 - now',
          location: 'Rio de Janeiro, Brazil',
          responsibilities: [
            'Developed backend services for LegalXplain platform using NLP',
            'Deployed scalable ML/NLP pipelines into production',
            'Improved accessibility and understanding of legal documents',
          ],
        },
        {
          name_project: 'Sentiment Analysis and Structural Topic Modeling (SA-STM)',
          role: 'Machine Learning Researcher',
          organization: 'Excelsius',
          period: 'Oct 2024 - Feb 2025',
          location: 'Lima, Peru',
          responsibilities: [
            'Applied sentiment analysis and Structural Topic Modeling (STM)',
            'Classified software requirements from user reviews',
          ],
        },
        {
          name_project: 'Trading World EVS Official Website',
          role: 'Freelance Full-Stack Developer',
          organization: 'Freelance',
          period: 'Jun 2024 - Oct 2024',
          location: 'Arequipa, Peru',
          responsibilities: [
            'Developed official website',
            'Built responsive UI and backend integration',
          ],
        },
        {
          name_project: 'LexCom',
          role: 'Tech Lead',
          organization: 'Lexcom.tech',
          period: 'Oct 2023 - Oct 2024',
          location: 'Arequipa, Peru',
          responsibilities: [
            'Led development of profitability prediction system',
            'Built ML models for e-commerce data',
            'Integrated OpenAI-based text generation services',
            'Handled full-stack and cloud deployment',
          ],
        },
      ],
    },
    education: {
      title: 'Educación',
      certificationsTitle: 'Certificados',
      labels: {
        ubication: 'Ubicación',
        location: 'Lugar',
        organization: 'Organización',
        date: 'Fecha',
        certificateUrl: 'URL del certificado',
      },
      items: [
        {
          institution: 'Fundación Getulio Vargas',
          ubication: 'https://maps.app.goo.gl/tJgGKJWCpEm2XEq56',
          degree: 'Maestría en Ciencia de Datos e Inteligencia Artificial',
          period: '2025 - Presente',
          location: 'Río de Janeiro, Brasil',
        },
        {
          institution: 'Fundación Getulio Vargas',
          ubication: 'https://maps.app.goo.gl/tJgGKJWCpEm2XEq56',
          degree: 'Escuela de Verano en Ciencia de Datos e Inteligencia Artificial',
          period: 'Ene 2025 - Mar 2025',
          location: 'Río de Janeiro, Brasil',
        },
        {
          institution: 'Universidad Nacional de San Agustín',
          ubication: 'https://maps.app.goo.gl/5HHyhvRnv78PTJ1t8',
          degree: 'Bachiller en Ciencias de la Computación',
          period: '2019 - 2023',
          location: 'Arequipa, Perú',
        },
      ],
      certifications: [
        {
          name: 'Ponente sobre Topic Modeling',
          organization: 'Universidad Nacional de Ingeniería (UNI)',
          date: '28 Oct, 2024',
          description: 'Explicación de LDA y comparación con métodos de clustering.',
          certificateUrl: 'https://www.uni.edu.pe/',
        },
        {
          name: 'AWS Cloud Architecting',
          organization: 'Amazon Web Services',
          date: 'Dic 2023',
          description: 'Enfoque en optimización y arquitectura en la nube.',
          certificateUrl: 'https://www.credly.com/',
        },
        {
          name: 'Fundamentos de Ciencia de Datos Acelerada',
          organization: 'NVIDIA',
          date: 'Oct 2022',
          description: 'Uso de CUDA y RAPIDS para acelerar modelos de ML.',
          certificateUrl: 'https://learn.nvidia.com/',
        },
      ],
    },
    skills: {
      title: 'Habilidades',
    },
    projects: {
      title: 'Proyectos',
      labels: {
        date: 'Fecha',
        location: 'Ubicación',
        knowledge: 'Conocimientos',
        github: 'GitHub',
        privateRepo: 'Repositorio privado',
        publicRepo: 'Repositorio público',
      },
      items: [
        {
          name: 'Security Urban Perception Tracking',
          date: 'Jun 2025',
          github: 'https://github.com/FGV-VIS-2025/final-project-security-urban-perception-tracking',
          repositoryState: 'public',
          description:
            'Prototipo visual para explorar la percepción de seguridad urbana usando datos de eye-tracking entre participantes.',
          location: 'Rio de Janeiro, Brasil',
          knowledge: [
            'Análisis de Datos de Eye-Tracking',
            'Analítica Visual',
            'Visualización de Datos Espaciotemporales',
          ],
        },
        {
          name: 'Fine-Tuning LLaMA 2 with QLoRA',
          date: 'Ago 2024',
          github: 'https://github.com/LuisSante/Fine-Tuning-of-LLaMA-2-with-QLoRA-Optimization',
          repositoryState: 'public',
          description:
            "Realicé fine-tuning del modelo 'NousResearch/Llama-2-7b-chat-hf' usando el dataset 'mlabonne/guanaco-llama2-1k' para crear el modelo personalizado 'llama-2-7b-miniguanaco'. Implementé QLoRA con una capa de atención LoRA de 64 dimensiones y precisión de 4 bits para optimizar el rendimiento manteniendo la eficiencia de recursos.",
          location: 'Arequipa, Peru',
          knowledge: ['Fine Tuning', 'Python', 'HuggingFace', 'PyTorch', 'LLaMA2', 'QLoRA'],
        },
      ],
    },
    publications: {
      title: 'Publicaciones',
      labels: {
        conference: 'Conferencia',
        journal: 'Revista',
        knowledge: 'Conocimientos',
        technology: 'Tecnología',
        doi: 'DOI',
        github: 'GitHub',
        privateRepo: 'Repositorio privado',
        publicRepo: 'Repositorio público',
        location: 'Ubicación',
      },
      items: [
        {
          title: 'UrbanClipAtlas: A Visual Analytics Framework for Event and Scene Retrieval in Urban Videos',
          role: 'Investigador en Ciencia de Datos',
          organization: 'Visual Data Science - FGV EMAP',
          conference: 'EuroVis',
          journal: null,
          knowledge: [
            'Modelos de Visión-Lenguaje (VLMs)',
            'Grafos de Conocimiento',
            'Análisis de Datos Espaciotemporales',
            'Recuperación de Eventos y Escenas',
            'Computer Vision',
          ],
          technology: [
            'Python',
            'HuggingFace',
            'YOLOv8-World',
            'Svelte',
            'TypeScript',
            'WebSockets'
          ],
          doi: null,
          github: {
            url: 'https://github.com/visual-ds/urbanclipatlas',
            state: 'private',
          },
        },
        {
          title: 'STRive: An association rule-based system for the exploration of spatiotemporal categorical data',
          role: 'Investigador en Ciencia de Datos',
          organization: 'Visual Data Science - FGV EMAP',
          conference: null,
          journal: 'Computer & Graphics - SIBGRAPI',
          knowledge: ['Minería de Reglas de Asociación', 'Clustering', 'Análisis de Datos Espaciotemporales'],
          technology: ['Python', 'scikit-learn', 'D3.js', 'TypeScript'],
          doi: 'https://doi.org/10.1016/j.cag.2025.104410',
          github: {
            url: 'https://github.com/visual-ds/STRive',
            state: 'public',
          },
        },
      ],
    },
    bachelorThesis: {
      title: 'Tesis de Bachiller',
      labels: {
        location: 'Ubicación',
        date: 'Fecha',
        knowledge: 'Conocimientos',
        pdf: 'PDF',
        slides: 'Diapositivas',
        video: 'Video',
      },
      item: {
        title: 'Modelado de temas mediante Clustering Aglomerativo y Sentence-BERT en comentarios de usuarios',
        description:
          'Modelado de tópicos para encontrar funcionalidades dentro de reseñas de usuarios de una app de Google Play Store mediante algoritmos no supervisados y embeddings de oraciones con Transformers. Esta investigación contribuyó a comprender mejor las necesidades de los usuarios y las prioridades de desarrollo.',
        videoUrl: 'https://drive.google.com/file/d/1vkVYZGOzVnDu395V3ZxhEOlWddsvIbun/view',
        slidesUrl: 'https://drive.google.com/file/d/13NJ4fZ0zsP3R3hzTZ9u3TKeIhvfhJfps/view',
        pdfUrl: 'https://drive.google.com/file/d/1I_xpMxvrG9xbJGiTDUOIom6ZEkxK1kNK/view',
        knowledge: ['PLN', 'Modelado de Tópicos', 'Transformers', 'Clustering'],
        location: 'Arequipa, Peru',
        date: 'Ago 2024',
      },
    },
    contact: {
      title: 'Contáctame',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo',
      emailPlaceholder: 'correo@gmail.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Escribe tu mensaje aquí.',
      submit: 'Enviar',
    },
  },
  pt: {
    metadata: {
      title: 'Portfólio Luis Sante',
      description: 'Bem-vindo ao meu portfólio.',
    },
    navbar: {
      navigation: 'Navegação',
      social: 'Redes',
      language: 'Idioma',
      sections: {
        landing: 'Início',
        experience: 'Experiência',
        education: 'Educação',
        skills: 'Habilidades',
        projects: 'Projetos',
        publications: 'Publicações',
        contact: 'Contato',
      },
      socialLinks: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
        googleScholar: 'Google Acadêmico',
        orcid: 'ORCID',
      },
      languageNames: {
        en: 'EN',
        es: 'ES',
        pt: 'PT',
        fr: 'FR',
        de: 'DE',
        it: 'IT',
      },
    },
    landing: {
      intro:
        'Olá, eu sou Luis Sante. Data Scientist Researcher com conhecimento avançado em Engenharia de Software, focado em levar pesquisa de IA para produtos escaláveis em produção.',
      words: {
        desktopLine1: ['Data', 'Science'],
        desktopLine2: ['e', 'Machine', 'Learning'],
        mobile: ['Data Science', 'e', 'Machine Learning'],
      },
      tags: [
        'Natural Language Processing',
        'Graph Neural Network',
        'Transformers',
        'Graph',
        'RAG',
        'FullStack',
      ],
      actions: {
        downloadCv: 'Baixar CV',
        contactMe: 'Fale comigo',
      },
    },
    experience: {
      title: 'Experiência',
      items: [
        {
          name_project: 'LegalXplain',
          role: 'Backend Developer',
          organization: 'Visual Data Science - FGV EMAP',
          period: 'Mar 2025 - now',
          location: 'Rio de Janeiro, Brazil',
          responsibilities: [
            'Developed backend services for LegalXplain platform using NLP',
            'Deployed scalable ML/NLP pipelines into production',
            'Improved accessibility and understanding of legal documents',
          ],
        },
        {
          name_project: 'Sentiment Analysis and Structural Topic Modeling (SA-STM)',
          role: 'Machine Learning Researcher',
          organization: 'Excelsius',
          period: 'Oct 2024 - Feb 2025',
          location: 'Lima, Peru',
          responsibilities: [
            'Applied sentiment analysis and Structural Topic Modeling (STM)',
            'Classified software requirements from user reviews',
          ],
        },
        {
          name_project: 'Trading World EVS Official Website',
          role: 'Freelance Full-Stack Developer',
          organization: 'Freelance',
          period: 'Jun 2024 - Oct 2024',
          location: 'Arequipa, Peru',
          responsibilities: [
            'Developed official website',
            'Built responsive UI and backend integration',
          ],
        },
        {
          name_project: 'LexCom',
          role: 'Tech Lead',
          organization: 'Lexcom.tech',
          period: 'Oct 2023 - Oct 2024',
          location: 'Arequipa, Peru',
          responsibilities: [
            'Led development of profitability prediction system',
            'Built ML models for e-commerce data',
            'Integrated OpenAI-based text generation services',
            'Handled full-stack and cloud deployment',
          ],
        },
      ],
    },
    education: {
      title: 'Educação',
      certificationsTitle: 'Certificados',
      labels: {
        ubication: 'Localização',
        location: 'Lugar',
        organization: 'Organização',
        date: 'Data',
        certificateUrl: 'URL do certificado',
      },
      items: [
        {
          institution: 'Fundação Getulio Vargas',
          ubication: 'https://maps.app.goo.gl/tJgGKJWCpEm2XEq56',
          degree: 'Mestrado em Ciência de Dados e Inteligência Artificial',
          period: '2025 - Presente',
          location: 'Rio de Janeiro, Brasil',
        },
        {
          institution: 'Fundação Getulio Vargas',
          ubication: 'https://maps.app.goo.gl/tJgGKJWCpEm2XEq56',
          degree: 'Escola de Verão em Ciência de Dados e Inteligência Artificial',
          period: 'Jan 2025 - Mar 2025',
          location: 'Rio de Janeiro, Brasil',
        },
        {
          institution: 'Universidade Nacional de San Agustín',
          ubication: 'https://maps.app.goo.gl/5HHyhvRnv78PTJ1t8',
          degree: 'Bacharelado em Ciência da Computação',
          period: '2019 - 2023',
          location: 'Arequipa, Peru',
        },
      ],
      certifications: [
        {
          name: 'Palestrante sobre Topic Modeling',
          organization: 'Universidade Nacional de Engenharia (UNI)',
          date: '28 Out, 2024',
          description: 'Explicou LDA e comparou com métodos de clustering.',
          certificateUrl: 'https://www.uni.edu.pe/',
        },
        {
          name: 'AWS Cloud Architecting',
          organization: 'Amazon Web Services',
          date: 'Dez 2023',
          description: 'Foco em otimização e arquitetura de nuvem.',
          certificateUrl: 'https://www.credly.com/',
        },
        {
          name: 'Fundamentos de Ciência de Dados Acelerada',
          organization: 'NVIDIA',
          date: 'Out 2022',
          description: 'Uso de CUDA e RAPIDS para aceleração de ML.',
          certificateUrl: 'https://learn.nvidia.com/',
        },
      ],
    },
    skills: {
      title: 'Habilidades',
    },
    projects: {
      title: 'Projetos',
      labels: {
        date: 'Data',
        location: 'Localização',
        knowledge: 'Conhecimentos',
        github: 'GitHub',
        privateRepo: 'Repositório privado',
        publicRepo: 'Repositório público',
      },
      items: [
        {
          name: 'Security Urban Perception Tracking',
          date: 'Jun 2025',
          github: 'https://github.com/FGV-VIS-2025/final-project-security-urban-perception-tracking',
          repositoryState: 'public',
          description:
            'Protótipo visual para explorar a percepção de segurança urbana usando dados de eye-tracking entre participantes.',
          location: 'Rio de Janeiro, Brasil',
          knowledge: [
            'Análise de Dados de Eye-Tracking',
            'Análise Visual',
            'Visualização de Dados Espaçotemporais',
          ],
        },
        {
          name: 'Fine-Tuning LLaMA 2 with QLoRA',
          date: 'Ago 2024',
          github: 'https://github.com/LuisSante/Fine-Tuning-of-LLaMA-2-with-QLoRA-Optimization',
          repositoryState: 'public',
          description:
            "Realizei fine-tuning do modelo 'NousResearch/Llama-2-7b-chat-hf' usando o dataset 'mlabonne/guanaco-llama2-1k' para criar o modelo personalizado 'llama-2-7b-miniguanaco'. Implementei QLoRA com camada de atenção LoRA de 64 dimensões e precisão de 4 bits para otimizar o desempenho com eficiência de recursos.",
          location: 'Arequipa, Peru',
          knowledge: ['Fine Tuning', 'Python', 'HuggingFace', 'PyTorch', 'LLaMA2', 'QLoRA'],
        },
      ],
    },
    publications: {
      title: 'Publicações',
      labels: {
        conference: 'Conferência',
        journal: 'Periódico',
        knowledge: 'Conhecimentos',
        technology: 'Tecnologia',
        doi: 'DOI',
        github: 'GitHub',
        privateRepo: 'Repositório privado',
        publicRepo: 'Repositório público',
        location: 'Localização',
      },
      items: [
        {
          title: 'UrbanClipAtlas: A Visual Analytics Framework for Event and Scene Retrieval in Urban Videos',
          role: 'Pesquisador em Ciência de Dados',
          organization: 'Visual Data Science - FGV EMAP',
          conference: 'EuroVis',
          journal: null,
          knowledge: [
            'Modelos de Visão-Linguagem (VLMs)',
            'Grafos de Conhecimento',
            'Análise de Dados Espaçotemporais',
            'Recuperação de Eventos e Cenas',
            'Computer Vision',
          ],
          technology: [
            'Python',
            'HuggingFace',
            'YOLOv8-World',
            'Svelte',
            'TypeScript',
            'WebSockets'
          ],
          doi: null,
          github: {
            url: 'https://github.com/visual-ds/urbanclipatlas',
            state: 'private',
          },
        },
        {
          title: 'STRive: An association rule-based system for the exploration of spatiotemporal categorical data',
          role: 'Pesquisador em Ciência de Dados',
          organization: 'Visual Data Science - FGV EMAP',
          conference: null,
          journal: 'Computer & Graphics - SIBGRAPI',
          knowledge: ['Mineração de Regras de Associação', 'Clustering', 'Análise de Dados Espaçotemporais'],
          technology: ['Python', 'scikit-learn', 'D3.js', 'TypeScript'],
          doi: 'https://doi.org/10.1016/j.cag.2025.104410',
          github: {
            url: 'https://github.com/visual-ds/STRive',
            state: 'public',
          },
        },
      ],
    },
    bachelorThesis: {
      title: 'Tese de Bacharelado',
      labels: {
        location: 'Localização',
        date: 'Data',
        knowledge: 'Conhecimentos',
        pdf: 'PDF',
        slides: 'Slides',
        video: 'Vídeo',
      },
      item: {
        title: 'Modelagem de tópicos com Clustering Aglomerativo e Sentence-BERT em comentários de usuários',
        description:
          'Modelagem de tópicos para encontrar funcionalidades em avaliações de usuários de um aplicativo da Google Play Store usando algoritmos não supervisionados e embeddings de sentenças com Transformers. Esta pesquisa contribuiu para uma melhor compreensão das necessidades dos usuários e das prioridades de desenvolvimento do aplicativo.',
        videoUrl: 'https://drive.google.com/file/d/1vkVYZGOzVnDu395V3ZxhEOlWddsvIbun/view',
        slidesUrl: 'https://drive.google.com/file/d/13NJ4fZ0zsP3R3hzTZ9u3TKeIhvfhJfps/view',
        pdfUrl: 'https://drive.google.com/file/d/1I_xpMxvrG9xbJGiTDUOIom6ZEkxK1kNK/view',
        knowledge: ['PLN', 'Modelagem de Tópicos', 'Transformers', 'Clustering'],
        location: 'Arequipa, Peru',
        date: 'Ago 2024',
      },
    },
    contact: {
      title: 'Contato',
      nameLabel: 'Nome',
      namePlaceholder: 'Seu nome',
      emailLabel: 'Email',
      emailPlaceholder: 'email@gmail.com',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Digite sua mensagem aqui.',
      submit: 'Enviar',
    },
  },
};

const dictionaries: Record<Locale, Dictionary> = {
  ...baseDictionaries,
  fr: {
    ...baseDictionaries.en,
    metadata: {
      title: 'Portfolio Luis Sante',
      description: 'Bienvenue sur mon portfolio.',
    },
    navbar: {
      ...baseDictionaries.en.navbar,
      social: 'Réseaux',
      language: 'Langue',
      sections: {
        ...baseDictionaries.en.navbar.sections,
        landing: 'Accueil',
        experience: 'Expérience',
        education: 'Éducation',
        skills: 'Compétences',
        projects: 'Projets',
        publications: 'Publications',
        contact: 'Contactez-moi',
      },
      socialLinks: {
        ...baseDictionaries.en.navbar.socialLinks,
        googleScholar: 'Google Scholar',
      },
    },
    landing: {
      ...baseDictionaries.en.landing,
      intro:
        "Bonjour, je suis Luis Sante. Data Scientist Researcher avec une expertise avancée en génie logiciel, créant des solutions d'IA évolutives de la recherche à la production.",
      words: {
        desktopLine1: ['Data', 'Science'],
        desktopLine2: ['et', 'Machine', 'Learning'],
        mobile: ['Data Science', 'et', 'Machine Learning'],
      },
      actions: {
        downloadCv: 'Télécharger le CV',
        contactMe: 'Contactez-moi',
      },
    },
    experience: {
      ...baseDictionaries.en.experience,
      title: 'Expérience',
    },
    education: {
      ...baseDictionaries.en.education,
      title: 'Éducation',
      certificationsTitle: 'Certifications',
      labels: {
        ubication: 'Localisation',
        location: 'Lieu',
        organization: 'Organisation',
        date: 'Date',
        certificateUrl: 'URL du certificat',
      },
      items: [
        {
          institution: 'Fondation Getulio Vargas',
          ubication: 'https://maps.app.goo.gl/tJgGKJWCpEm2XEq56',
          degree: 'Master en Data Science et Intelligence Artificielle',
          period: '2025 - Présent',
          location: 'Rio de Janeiro, Brésil',
        },
        {
          institution: 'Fondation Getulio Vargas',
          ubication: 'https://maps.app.goo.gl/tJgGKJWCpEm2XEq56',
          degree: 'École d’été en Data Science et Intelligence Artificielle',
          period: 'Jan 2025 - Mar 2025',
          location: 'Rio de Janeiro, Brésil',
        },
        {
          institution: 'Université nationale de San Agustín',
          ubication: 'https://maps.app.goo.gl/5HHyhvRnv78PTJ1t8',
          degree: 'Licence en informatique',
          period: '2019 - 2023',
          location: 'Arequipa, Pérou',
        },
      ],
      certifications: [
        {
          name: 'Intervenant sur le Topic Modeling',
          organization: 'Université nationale d’ingénierie (UNI)',
          date: '28 oct. 2024',
          description: 'Présentation de LDA et comparaison avec des méthodes de clustering.',
          certificateUrl: 'https://www.uni.edu.pe/',
        },
        {
          name: 'AWS Cloud Architecting',
          organization: 'Amazon Web Services',
          date: 'Déc. 2023',
          description: 'Axé sur l’optimisation cloud et l’architecture.',
          certificateUrl: 'https://www.credly.com/',
        },
        {
          name: 'Fondamentaux de la Data Science accélérée',
          organization: 'NVIDIA',
          date: 'Oct. 2022',
          description: 'Utilisation de CUDA et RAPIDS pour accélérer le ML.',
          certificateUrl: 'https://learn.nvidia.com/',
        },
      ],
    },
    skills: {
      title: 'Compétences',
    },
    projects: {
      ...baseDictionaries.en.projects,
      title: 'Projets',
      labels: {
        date: 'Date',
        location: 'Lieu',
        knowledge: 'Connaissances',
        github: 'GitHub',
        privateRepo: 'Dépôt privé',
        publicRepo: 'Dépôt public',
      },
    },
    publications: {
      ...baseDictionaries.en.publications,
      title: 'Publications',
      labels: {
        conference: 'Conférence',
        journal: 'Revue',
        knowledge: 'Connaissances',
        technology: 'Technologie',
        doi: 'DOI',
        github: 'GitHub',
        privateRepo: 'Dépôt privé',
        publicRepo: 'Dépôt public',
        location: 'Lieu',
      },
    },
    bachelorThesis: {
      ...baseDictionaries.en.bachelorThesis,
      title: 'Mémoire de licence',
      labels: {
        location: 'Lieu',
        date: 'Date',
        knowledge: 'Connaissances',
        pdf: 'PDF',
        slides: 'Diapositives',
        video: 'Vidéo',
      },
    },
    contact: {
      title: 'Contactez-moi',
      nameLabel: 'Nom',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Email',
      emailPlaceholder: 'email@gmail.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Écrivez votre message ici.',
      submit: 'Envoyer',
    },
  },
  de: {
    ...baseDictionaries.en,
    metadata: {
      title: 'Portfolio Luis Sante',
      description: 'Willkommen in meinem Portfolio.',
    },
    navbar: {
      ...baseDictionaries.en.navbar,
      navigation: 'Navigation',
      social: 'Soziale Netzwerke',
      language: 'Sprache',
      sections: {
        ...baseDictionaries.en.navbar.sections,
        landing: 'Start',
        experience: 'Erfahrung',
        education: 'Ausbildung',
        skills: 'Fähigkeiten',
        projects: 'Projekte',
        publications: 'Publikationen',
        contact: 'Kontakt',
      },
    },
    landing: {
      ...baseDictionaries.en.landing,
      intro:
        'Hallo, ich bin Luis Sante. Data Scientist Researcher mit fortgeschrittenem Software-Engineering-Know-how und Fokus auf skalierbare KI-Lösungen von Forschung bis Produktion.',
      words: {
        desktopLine1: ['Data', 'Science'],
        desktopLine2: ['und', 'Machine', 'Learning'],
        mobile: ['Data Science', 'und', 'Machine Learning'],
      },
      actions: {
        downloadCv: 'CV herunterladen',
        contactMe: 'Kontakt',
      },
    },
    experience: {
      ...baseDictionaries.en.experience,
      title: 'Erfahrung',
    },
    education: {
      ...baseDictionaries.en.education,
      title: 'Ausbildung',
      certificationsTitle: 'Zertifikate',
      labels: {
        ubication: 'Standort',
        location: 'Ort',
        organization: 'Organisation',
        date: 'Datum',
        certificateUrl: 'Zertifikat-URL',
      },
      items: [
        {
          institution: 'Getulio-Vargas-Stiftung',
          ubication: 'https://maps.app.goo.gl/tJgGKJWCpEm2XEq56',
          degree: 'Master in Data Science und Künstlicher Intelligenz',
          period: '2025 - Heute',
          location: 'Rio de Janeiro, Brasilien',
        },
        {
          institution: 'Getulio-Vargas-Stiftung',
          ubication: 'https://maps.app.goo.gl/tJgGKJWCpEm2XEq56',
          degree: 'Summer School in Data Science und Künstlicher Intelligenz',
          period: 'Jan 2025 - Mär 2025',
          location: 'Rio de Janeiro, Brasilien',
        },
        {
          institution: 'Nationale Universität San Agustín',
          ubication: 'https://maps.app.goo.gl/5HHyhvRnv78PTJ1t8',
          degree: 'Bachelor in Informatik',
          period: '2019 - 2023',
          location: 'Arequipa, Peru',
        },
      ],
      certifications: [
        {
          name: 'Speaker über Topic Modeling',
          organization: 'Nationale Universität für Ingenieurwesen (UNI)',
          date: '28. Okt. 2024',
          description: 'LDA erklärt und mit Clustering-Methoden verglichen.',
          certificateUrl: 'https://www.uni.edu.pe/',
        },
        {
          name: 'AWS Cloud Architecting',
          organization: 'Amazon Web Services',
          date: 'Dez 2023',
          description: 'Fokus auf Cloud-Optimierung und Architektur.',
          certificateUrl: 'https://www.credly.com/',
        },
        {
          name: 'Grundlagen der beschleunigten Data Science',
          organization: 'NVIDIA',
          date: 'Okt 2022',
          description: 'CUDA und RAPIDS für ML-Beschleunigung eingesetzt.',
          certificateUrl: 'https://learn.nvidia.com/',
        },
      ],
    },
    skills: {
      title: 'Fähigkeiten',
    },
    projects: {
      ...baseDictionaries.en.projects,
      title: 'Projekte',
      labels: {
        date: 'Datum',
        location: 'Ort',
        knowledge: 'Kenntnisse',
        github: 'GitHub',
        privateRepo: 'Privates Repository',
        publicRepo: 'Öffentliches Repository',
      },
    },
    publications: {
      ...baseDictionaries.en.publications,
      title: 'Publikationen',
      labels: {
        conference: 'Konferenz',
        journal: 'Zeitschrift',
        knowledge: 'Kenntnisse',
        technology: 'Technologie',
        doi: 'DOI',
        github: 'GitHub',
        privateRepo: 'Privates Repository',
        publicRepo: 'Öffentliches Repository',
        location: 'Ort',
      },
    },
    bachelorThesis: {
      ...baseDictionaries.en.bachelorThesis,
      title: 'Bachelorarbeit',
      labels: {
        location: 'Ort',
        date: 'Datum',
        knowledge: 'Kenntnisse',
        pdf: 'PDF',
        slides: 'Folien',
        video: 'Video',
      },
    },
    contact: {
      title: 'Kontakt',
      nameLabel: 'Name',
      namePlaceholder: 'Dein Name',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'email@gmail.com',
      messageLabel: 'Nachricht',
      messagePlaceholder: 'Schreibe deine Nachricht hier.',
      submit: 'Senden',
    },
  },
  it: {
    ...baseDictionaries.en,
    metadata: {
      title: 'Portfolio Luis Sante',
      description: 'Benvenuto nel mio portfolio.',
    },
    navbar: {
      ...baseDictionaries.en.navbar,
      navigation: 'Navigazione',
      social: 'Social',
      language: 'Lingua',
      sections: {
        ...baseDictionaries.en.navbar.sections,
        landing: 'Home',
        experience: 'Esperienza',
        education: 'Istruzione',
        skills: 'Competenze',
        projects: 'Progetti',
        publications: 'Pubblicazioni',
        contact: 'Contattami',
      },
    },
    landing: {
      ...baseDictionaries.en.landing,
      intro:
        'Ciao, sono Luis Sante. Data Scientist Researcher con competenze avanzate in Ingegneria del Software, focalizzato su soluzioni AI scalabili dalla ricerca alla produzione.',
      words: {
        desktopLine1: ['Data', 'Science'],
        desktopLine2: ['e', 'Machine', 'Learning'],
        mobile: ['Data Science', 'e', 'Machine Learning'],
      },
      actions: {
        downloadCv: 'Scarica CV',
        contactMe: 'Contattami',
      },
    },
    experience: {
      ...baseDictionaries.en.experience,
      title: 'Esperienza',
    },
    education: {
      ...baseDictionaries.en.education,
      title: 'Istruzione',
      certificationsTitle: 'Certificati',
      labels: {
        ubication: 'Ubicazione',
        location: 'Luogo',
        organization: 'Organizzazione',
        date: 'Data',
        certificateUrl: 'URL del certificato',
      },
      items: [
        {
          institution: 'Fondazione Getulio Vargas',
          ubication: 'https://maps.app.goo.gl/tJgGKJWCpEm2XEq56',
          degree: 'Master in Data Science e Intelligenza Artificiale',
          period: '2025 - Presente',
          location: 'Rio de Janeiro, Brasile',
        },
        {
          institution: 'Fondazione Getulio Vargas',
          ubication: 'https://maps.app.goo.gl/tJgGKJWCpEm2XEq56',
          degree: 'Summer School in Data Science e Intelligenza Artificiale',
          period: 'Gen 2025 - Mar 2025',
          location: 'Rio de Janeiro, Brasile',
        },
        {
          institution: 'Università Nazionale di San Agustín',
          ubication: 'https://maps.app.goo.gl/5HHyhvRnv78PTJ1t8',
          degree: 'Laurea in Informatica',
          period: '2019 - 2023',
          location: 'Arequipa, Perù',
        },
      ],
      certifications: [
        {
          name: 'Relatore su Topic Modeling',
          organization: 'Università Nazionale di Ingegneria (UNI)',
          date: '28 ott 2024',
          description: 'Spiegazione di LDA e confronto con metodi di clustering.',
          certificateUrl: 'https://www.uni.edu.pe/',
        },
        {
          name: 'AWS Cloud Architecting',
          organization: 'Amazon Web Services',
          date: 'Dic 2023',
          description: 'Focalizzato su ottimizzazione cloud e architettura.',
          certificateUrl: 'https://www.credly.com/',
        },
        {
          name: 'Fondamenti di Data Science Accelerata',
          organization: 'NVIDIA',
          date: 'Ott 2022',
          description: 'Uso di CUDA e RAPIDS per accelerare il ML.',
          certificateUrl: 'https://learn.nvidia.com/',
        },
      ],
    },
    skills: {
      title: 'Competenze',
    },
    projects: {
      ...baseDictionaries.en.projects,
      title: 'Progetti',
      labels: {
        date: 'Data',
        location: 'Luogo',
        knowledge: 'Conoscenze',
        github: 'GitHub',
        privateRepo: 'Repository privato',
        publicRepo: 'Repository pubblico',
      },
    },
    publications: {
      ...baseDictionaries.en.publications,
      title: 'Pubblicazioni',
      labels: {
        conference: 'Conferenza',
        journal: 'Rivista',
        knowledge: 'Conoscenze',
        technology: 'Tecnologia',
        doi: 'DOI',
        github: 'GitHub',
        privateRepo: 'Repository privato',
        publicRepo: 'Repository pubblico',
        location: 'Luogo',
      },
    },
    bachelorThesis: {
      ...baseDictionaries.en.bachelorThesis,
      title: 'Tesi di laurea',
      labels: {
        location: 'Luogo',
        date: 'Data',
        knowledge: 'Conoscenze',
        pdf: 'PDF',
        slides: 'Slide',
        video: 'Video',
      },
    },
    contact: {
      title: 'Contattami',
      nameLabel: 'Nome',
      namePlaceholder: 'Il tuo nome',
      emailLabel: 'Email',
      emailPlaceholder: 'email@gmail.com',
      messageLabel: 'Messaggio',
      messagePlaceholder: 'Scrivi qui il tuo messaggio.',
      submit: 'Invia',
    },
  },
};

export function getDictionary(locale: string): Dictionary {
  const normalizedLocale = normalizeLocale(locale);
  return dictionaries[normalizedLocale] ?? dictionaries[i18n.defaultLocale];
}
