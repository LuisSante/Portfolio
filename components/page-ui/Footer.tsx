import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { SiGithub, SiGooglescholar, SiInstagram, SiLinkedin, SiOrcid, SiWhatsapp } from 'react-icons/si';

import type { Dictionary } from '@/i18n/dictionaries';
import { SOCIAL_LINKS } from '@/lib/social-links';

interface FooterProps {
  dictionary: Dictionary['navbar'];
}

const iconButtonClassName =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-white/80 text-primary transition-colors hover:bg-primary/10 dark:border-slate-600 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800';

const contactItemClassName = 'inline-flex items-center gap-2 text-sm text-primary/90 dark:text-slate-200';

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer id="social" className="border-t border-[#0b1d3a]/15 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-[#081228]/85">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-5">
        <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-wrap items-center gap-3 md:justify-start">
            <Link
              href={SOCIAL_LINKS.github}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={dictionary.socialLinks.github}
              title={dictionary.socialLinks.github}
              className={iconButtonClassName}
            >
              <SiGithub className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href={SOCIAL_LINKS.linkedin}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={dictionary.socialLinks.linkedin}
              title={dictionary.socialLinks.linkedin}
              className={iconButtonClassName}
            >
              <SiLinkedin className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href={SOCIAL_LINKS.whatsapp}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={dictionary.socialLinks.whatsapp}
              title={dictionary.socialLinks.whatsapp}
              className={iconButtonClassName}
            >
              <SiWhatsapp className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href={SOCIAL_LINKS.instagram}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={dictionary.socialLinks.instagram}
              title={dictionary.socialLinks.instagram}
              className={iconButtonClassName}
            >
              <SiInstagram className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href={SOCIAL_LINKS.googleScholar}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={dictionary.socialLinks.googleScholar}
              title={dictionary.socialLinks.googleScholar}
              className={iconButtonClassName}
            >
              <SiGooglescholar className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href={SOCIAL_LINKS.orcid}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={dictionary.socialLinks.orcid}
              title={dictionary.socialLinks.orcid}
              className={iconButtonClassName}
            >
              <SiOrcid className="h-[18px] w-[18px]" />
            </Link>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <Link href="tel:+519258987" className={contactItemClassName}>
              <Phone className="h-4 w-4" />
              +519258987
            </Link>
            <Link href="tel:+5521989881146" className={contactItemClassName}>
              <Phone className="h-4 w-4" />
              +55 21 989881146
            </Link>
            <Link href="mailto:luissante123@gmail.com" className={contactItemClassName}>
              <Mail className="h-4 w-4" />
              luissante123@gmail.com
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-primary/70 dark:text-slate-400">
          (C) Luis Felipe Sante Taipe. All Right Reserved
        </p>
      </div>
    </footer>
  );
}
