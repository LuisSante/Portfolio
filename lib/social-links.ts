export const SOCIAL_LINKS = {
  github: 'https://github.com/LuisSante',
  linkedin: 'https://www.linkedin.com/in/luis-felipe-sante-taipe-0ba00723b/',
  whatsapp: 'https://wa.me/51923258987',
  instagram: 'https://www.instagram.com/sante_luis_f?igsh=MTA3NXk4MnZ1dHk0bA==',
  googleScholar: 'https://scholar.google.com/citations?hl=es&user=mrIFoIMAAAAJ',
  orcid: 'https://orcid.org/0009-0009-6547-7313',
} as const;

export type SocialLinkKey = keyof typeof SOCIAL_LINKS;
