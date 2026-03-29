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
    actions: {
      downloadCv: string;
      contactMe: string;
    };
  };
  experience: {
    title: string;
    items: ExperienceItem[];
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

const dictionaries: Record<'en' | 'es' | 'pt', Dictionary> = {
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
      intro: "Hello, I'm Luis Sante. A programmer passionate about Artificial Intelligence",
      words: {
        desktopLine1: ['Artificial', 'Intelligence'],
        desktopLine2: ['and', 'Machine', 'Learning'],
        mobile: ['AI', 'and', 'ML'],
      },
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
      intro: 'Hola, soy Luis Sante. Programador apasionado por la Inteligencia Artificial',
      words: {
        desktopLine1: ['Inteligencia', 'Artificial'],
        desktopLine2: ['y', 'Aprendizaje', 'Automático'],
        mobile: ['IA', 'y', 'ML'],
      },
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
      intro: 'Olá, eu sou Luis Sante. Programador apaixonado por Inteligência Artificial',
      words: {
        desktopLine1: ['Inteligência', 'Artificial'],
        desktopLine2: ['e', 'Machine', 'Learning'],
        mobile: ['IA', 'e', 'ML'],
      },
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

export function getDictionary(locale: string): Dictionary {
  const normalizedLocale = normalizeLocale(locale);
  const localeFallbackMap: Record<Locale, keyof typeof dictionaries> = {
    en: 'en',
    es: 'es',
    pt: 'pt',
    fr: 'en',
    de: 'en',
    it: 'en',
  };

  const dictionaryLocale = localeFallbackMap[normalizedLocale] ?? i18n.defaultLocale;
  return dictionaries[dictionaryLocale];
}
