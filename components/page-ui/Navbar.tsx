'use client';

import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Moon, Sun } from 'lucide-react';
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

interface MainMenuProps {
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
        <div className="fixed top-10 inset-x-0 z-50 px-4">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-3">
                <div />
                <MainMenu locale={normalizedLocale} dictionary={dictionary} />
                <div className="flex items-center justify-self-end gap-2">
                    <LanguageMenu locale={normalizedLocale} dictionary={dictionary} buildLocaleHref={buildLocaleHref} />
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}

function MainMenu({ locale, dictionary }: MainMenuProps) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className="justify-self-center">
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item={dictionary.navigation}>
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href={`/${locale}#landing-page`}>{dictionary.sections.landing}</HoveredLink>
                        <HoveredLink href={`/${locale}#experience`}>{dictionary.sections.experience}</HoveredLink>
                        <HoveredLink href={`/${locale}#skills`}>{dictionary.sections.skills}</HoveredLink>
                        <HoveredLink href={`/${locale}#projects`}>{dictionary.sections.projects}</HoveredLink>
                        <HoveredLink href={`/${locale}#publications`}>{dictionary.sections.publications}</HoveredLink>
                        <HoveredLink href={`/${locale}#contact-me`}>{dictionary.sections.contact}</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item={dictionary.social}>
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="https://github.com/LuisSante" rel="noopener noreferrer" target="_blank">
                            <GitHubLogoIcon className="mr-1" /> {dictionary.socialLinks.github}
                        </HoveredLink>
                        <HoveredLink href="https://www.linkedin.com/in/luis-felipe-sante-taipe-0ba00723b/" rel="noopener noreferrer" target="_blank">
                            <LinkedInLogoIcon className="mr-1" /> {dictionary.socialLinks.linkedin}
                        </HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
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
