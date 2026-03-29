'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { MLChipAvatar } from '@/components/ui/ml-chip-avatar';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import type { Dictionary } from '@/i18n/dictionaries';
import { cn } from '@/lib/utils';
import { BackgroundConstellacion } from '../ui/background-constellacion';

interface LandingPageProps {
    dictionary: Dictionary['landing'];
}

export function LandingPage({ dictionary }: LandingPageProps) {
    const tagStyles = [
        'border-fuchsia-200/80 bg-fuchsia-50/85 text-fuchsia-700',
        'border-cyan-200/80 bg-cyan-50/85 text-cyan-700',
        'border-emerald-200/80 bg-emerald-50/85 text-emerald-700',
        'border-amber-200/80 bg-amber-50/85 text-amber-700',
    ];

    const wordsLine1 = dictionary.words.desktopLine1.map((word) => ({
        text: word,
    }));
    const wordsLine2 = dictionary.words.desktopLine2.map((word, index) => ({
        text: word,
        className: index > 0 ? 'text-primary' : undefined,
    }));
    const wordsSM = dictionary.words.mobile.map((word, index) => ({
        text: word,
        className: index === dictionary.words.mobile.length - 1 ? 'text-primary' : undefined,
    }));

    return (
        <div
            id="landing-page"
            className="relative flex min-h-[84svh] w-full items-center bg-gradient-to-b from-[#fffdf7] via-[#f4f7ff] to-[#eef8f7] px-4 text-[#0b1d3a] sm:px-6 md:min-h-screen dark:from-[#050a14] dark:via-[#091223] dark:to-[#0b162b] dark:text-slate-100"
        >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#fffdf7]/90 to-[#eef8f7]/90 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:from-[#050a14]/90 dark:to-[#0b162b]/90" />
            <div className="relative z-30 mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 pb-4 pt-20 sm:pb-10 sm:pt-24 lg:flex-row lg:gap-12 lg:py-16">
                <div className="w-full max-w-2xl text-center lg:max-w-[56%] lg:text-left">
                    <div className="mt-4 hidden lg:block">
                        <TypewriterEffectSmooth words={wordsLine1} className="my-0 justify-start" cursorClassName="hidden" />
                        <TypewriterEffectSmooth words={wordsLine2} className="my-0 -mt-1 justify-start" />
                    </div>

                    <div className="mt-3 lg:hidden">
                        <TypewriterEffectSmooth words={wordsSM} className="my-0 justify-center" />
                    </div>

                    <p className="mt-2 text-xs text-[#4f5d88] sm:text-base dark:text-slate-300">{dictionary.intro}</p>

                    <div className="mt-3 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                        {dictionary.tags.map((tag, index) => (
                            <span
                                key={tag}
                                className={cn(
                                    'rounded-full border px-3 py-1 text-xs',
                                    tagStyles[index % tagStyles.length],
                                    'dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300'
                                )}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-3 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                        <Link href="https://drive.google.com/file/d/1CS7S_vRNKdoAyNyw4aj6Y8nYTcx59cm4/view?usp=sharing">
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">{dictionary.actions.downloadCv}</Button>
                        </Link>
                        <Link href="https://wa.me/51923258987">
                            <Button
                                variant="secondary"
                                className="border border-[#89a7d8]/60 bg-gradient-to-r from-white to-[#f6f2ff] text-[#2f4d8f] hover:bg-[#edf4ff] dark:border-slate-600 dark:bg-none dark:bg-slate-800/80 dark:text-slate-100 dark:hover:bg-slate-700"
                            >
                                {dictionary.actions.contactMe}
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="mt-1 flex w-full justify-center lg:mt-0 lg:w-auto lg:justify-end lg:pr-4">
                    <MLChipAvatar src="/image/me.png" alt="Luis Sante" className="mb-0" />
                </div>
            </div>
            <BackgroundConstellacion />
        </div>
    );
}
