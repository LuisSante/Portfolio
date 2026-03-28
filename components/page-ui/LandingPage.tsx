'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { MLChipAvatar } from '@/components/ui/ml-chip-avatar';
import { BackgroundConstellacion } from '../ui/background-constellacion';

const wordsLine1 = [
    {
        text: 'Artificial',
    },
    {
        text: 'Intelligence',
    },
];

const wordsLine2 = [
    {
        text: 'and',
    },
    {
        text: 'Machine',
        className: 'text-primary'
    },
    {
        text: 'Learning',
        className: 'text-primary'
    },
];

const wordsSM = [
    {
        text: 'AI',
    },
    {
        text: 'and'
    },
    {
        text: 'ML',
        className: 'text-primary'
    },
];

export function LandingPage() {
    return (
        <div
            id="landing-page"
            className="relative flex items-center bg-gradient-to-b from-white via-[#f3f8ff] to-[#edf4ff] px-6 w-full min-h-screen text-[#0b1d3a]"
        >
            <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-b from-white/95 to-[#edf4ff]/95 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />
            <div className="relative z-30 mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-8 py-16 lg:flex-row lg:gap-12">
                <div className="w-full max-w-2xl text-center lg:max-w-[56%] lg:text-left">
                    <p className="text-[#345c99] text-xs sm:text-base">
                        Hello, I&apos;m Luis Sante. A programmer passionate about Artificial Intelligence
                    </p>
                    <div className="mt-4 hidden lg:block">
                        <TypewriterEffectSmooth words={wordsLine1} className="my-0 justify-start" cursorClassName="hidden" />
                        <TypewriterEffectSmooth words={wordsLine2} className="my-0 -mt-1 justify-start" />
                    </div>
                    <div className="mt-4 lg:hidden">
                        <TypewriterEffectSmooth words={wordsSM} className="my-0 justify-center" />
                    </div>
                    <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start">
                        {/* Todo: drive */}
                        <Link href="https://drive.google.com/file/d/1PORxDqwrjU3fiFwWFbM2loboKhgT6Uo5/view?usp=sharing">
                            <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>Download CV</Button>
                        </Link>
                        <Link href="https://wa.me/51923258987">
                            <Button variant="secondary" className="border border-primary/30 text-[#173e7c]">Contact Me</Button>
                        </Link>
                    </div>
                </div>
                <div className="flex w-full justify-center lg:w-auto lg:justify-end lg:pr-4">
                    <MLChipAvatar src="/image/me.png" alt="Luis Sante" className="mb-0" />
                </div>
            </div>
            <BackgroundConstellacion />
        </div>
    );
}
