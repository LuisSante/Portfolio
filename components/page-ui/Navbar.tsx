'use client';

import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu';
import { i18n, normalizeLocale, type Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';

interface NavbarProps {
  locale: string;
  dictionary: Dictionary['navbar'];
}

interface SectionLinksProps {
  locale: Locale;
  dictionary: Dictionary['navbar'];
}

interface LanguageMenuProps {
  locale: Locale;
  dictionary: Dictionary['navbar'];
  buildLocaleHref: (nextLocale: Locale) => string;
}

export function Navbar({ locale, dictionary }: NavbarProps) {
  const pathname = usePathname();
  const normalizedLocale = normalizeLocale(locale);

  const buildLocaleHref = useMemo(
    () => (nextLocale: Locale) => {
      const segments = pathname.split('/');
      const firstSegment = segments[1];

      if (firstSegment && i18n.locales.includes(firstSegment as Locale)) {
        segments[1] = nextLocale;
      } else {
        segments.splice(1, 0, nextLocale);
      }

      return segments.join('/') || `/${nextLocale}`;
    },
    [pathname]
  );

  return (
    <div className="fixed inset-x-0 top-3 z-50 px-3 md:top-10 md:px-4">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-2 md:grid-cols-[1fr_auto_1fr] md:gap-3">
        <div className="hidden md:block" />
        <SectionLinks locale={normalizedLocale} dictionary={dictionary} />
        <div className="flex items-center justify-center gap-1.5 md:justify-self-end md:gap-2">
          <LanguageMenu locale={normalizedLocale} dictionary={dictionary} buildLocaleHref={buildLocaleHref} />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

function SectionLinks({ locale, dictionary }: SectionLinksProps) {
  const links = [
    { href: `/${locale}#landing-page`, label: dictionary.sections.landing },
    { href: `/${locale}#experience`, label: dictionary.sections.experience },
    { href: `/${locale}/eduacion`, label: dictionary.sections.education },
    { href: `/${locale}#projects`, label: dictionary.sections.projects },
    { href: `/${locale}#publications`, label: dictionary.sections.publications },
    { href: `/${locale}#contact-me`, label: dictionary.sections.contact },
    { href: `/${locale}#social`, label: dictionary.social },
  ];

  return (
    <nav className="flex max-w-full items-center justify-start gap-x-3 overflow-x-auto whitespace-nowrap rounded-2xl border border-[#9ab0dc]/45 bg-gradient-to-r from-white/95 via-[#f8f5ff]/95 to-[#effaf7]/95 px-3 py-2 shadow-[0_10px_30px_rgba(76,103,175,0.16)] backdrop-blur [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden dark:border-white/15 dark:bg-none dark:bg-slate-900/90 dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] md:flex-wrap md:justify-center md:gap-x-4 md:gap-y-2 md:rounded-full md:px-4 md:py-2.5">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="shrink-0 text-[11px] font-medium text-[#4f67a6] transition-colors hover:text-[#3558c9] sm:text-xs md:text-sm dark:text-slate-300 dark:hover:text-slate-100"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

function LanguageMenu({ locale, dictionary, buildLocaleHref }: LanguageMenuProps) {
  const [active, setActive] = useState<string | null>(null);
  const selectedLocaleLabel = dictionary.languageNames[locale];

  return (
    <div className="justify-self-end">
      <Menu
        setActive={setActive}
        className="border-[#9ab0dc]/45 bg-gradient-to-r from-white/95 via-[#f8f5ff]/95 to-[#effaf7]/95 px-3 py-2 text-sm shadow-[0_10px_26px_rgba(76,103,175,0.18)] dark:border-white/15 dark:bg-none dark:bg-slate-900/90 dark:shadow-[0_10px_26px_rgba(0,0,0,0.35)] md:px-5 md:py-3"
      >
        <MenuItem setActive={setActive} active={active} item={selectedLocaleLabel}>
          <div className="grid grid-cols-3 gap-3 text-sm">
            {i18n.locales.map((availableLocale) => (
              <HoveredLink
                key={availableLocale}
                href={buildLocaleHref(availableLocale)}
                aria-current={availableLocale === locale ? 'true' : undefined}
                className={availableLocale === locale ? 'font-semibold' : undefined}
              >
                {dictionary.languageNames[availableLocale]}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <div className="rounded-full border border-[#9ab0dc]/45 bg-gradient-to-r from-white/95 via-[#f8f5ff]/95 to-[#effaf7]/95 p-0.5 shadow-[0_10px_26px_rgba(76,103,175,0.18)] dark:border-white/15 dark:bg-none dark:bg-slate-900/90 dark:shadow-[0_10px_26px_rgba(0,0,0,0.35)] md:p-1">
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="h-9 w-9 rounded-full text-[#2d4f98] hover:bg-white/80 dark:text-slate-100 dark:hover:bg-slate-800 md:h-10 md:w-10"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </div>
  );
}
