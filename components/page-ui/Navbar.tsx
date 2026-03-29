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
    <div className="fixed inset-x-0 top-10 z-50 px-4">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
        <div className="hidden md:block" />
        <SectionLinks locale={normalizedLocale} dictionary={dictionary} />
        <div className="flex items-center justify-center gap-2 md:justify-self-end">
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
    { href: `/${locale}#projects`, label: dictionary.sections.projects },
    { href: `/${locale}#publications`, label: dictionary.sections.publications },
    { href: `/${locale}#contact-me`, label: dictionary.sections.contact },
    { href: `/${locale}#social`, label: dictionary.social },
  ];

  return (
    <nav className="flex max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-primary/20 bg-white/95 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,96,225,0.12)] backdrop-blur dark:border-white/15 dark:bg-slate-900/90 dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-xs text-primary/80 transition-colors hover:text-primary sm:text-sm dark:text-slate-300 dark:hover:text-slate-100"
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
        className="border-[#0b1d3a]/20 bg-[#eef6ff]/95 px-5 shadow-[0_10px_26px_rgba(11,29,58,0.18)] dark:border-white/15 dark:bg-slate-900/90 dark:shadow-[0_10px_26px_rgba(0,0,0,0.35)]"
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
    <div className="rounded-full border border-[#0b1d3a]/20 bg-[#eef6ff]/95 p-1 shadow-[0_10px_26px_rgba(11,29,58,0.18)] dark:border-white/15 dark:bg-slate-900/90 dark:shadow-[0_10px_26px_rgba(0,0,0,0.35)]">
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="rounded-full text-[#0b1d3a] hover:bg-white/80 dark:text-slate-100 dark:hover:bg-slate-800"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </div>
  );
}
