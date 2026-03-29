import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { SiGithub, SiGooglescholar, SiInstagram, SiLinkedin, SiOrcid, SiWhatsapp } from 'react-icons/si';

import type { Dictionary } from '@/i18n/dictionaries';
import { SOCIAL_LINKS } from '@/lib/social-links';

interface FooterProps {
  dictionary: Dictionary['navbar'];
}

const iconButtonClassName =
  'inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#9ab0dc]/50 bg-gradient-to-r from-white/90 to-[#f4f8ff]/90 text-[#3d62c6] transition-colors hover:bg-primary/10 dark:border-slate-600 dark:bg-none dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800 md:h-11 md:w-11';

const contactItemClassName = 'inline-flex items-center gap-2 text-base text-[#5473bf] dark:text-slate-200 sm:text-sm';

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer id="social" className="border-t border-[#9ab0dc]/45 bg-gradient-to-r from-[#f8fbff]/90 via-[#f8f5ff]/85 to-[#f2fbf7]/90 backdrop-blur dark:border-white/10 dark:bg-none dark:bg-[#081228]/85">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-4 sm:px-6 md:gap-8 md:py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2.5 md:justify-start md:gap-3">
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

          <div className="flex flex-col gap-2 sm:items-center md:items-end">
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

        <p className="text-center text-xs text-[#5f79ba] dark:text-slate-400 sm:text-[13px]">
          (C) Luis Felipe Sante Taipe. All Right Reserved
        </p>
      </div>
    </footer>
  );
}
