'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { MLChipAvatar } from '@/components/ui/ml-chip-avatar';
import { BackgroundConstellacion } from '../ui/background-constellacion';
const words = [
    {
        text: 'Artificial Intelligence',
    },
    {
        text: 'and'
    },
    {
        text: 'Machine Learning',
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
            className="relative flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#f3f8ff] to-[#edf4ff] px-6 w-full min-h-screen text-[#0b1d3a]"
        >
            <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-b from-white/95 to-[#edf4ff]/95 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />
            <MLChipAvatar src="/image/me.png" alt="Luis Sante" />
            <p className="z-30 text-[#345c99] text-xs sm:text-base text-center">
                Hello, I&apos;m Luis Sante. A programmer passionate about Artificial Intelligence
            </p>
            <div className='lg:block hidden'>
                <TypewriterEffectSmooth words={words} />
            </div>
            <div className='lg:hidden'>
                <TypewriterEffectSmooth words={wordsSM} />
            </div>
            <div className="z-30 flex md:flex-row flex-col items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                {/* Todo: drive */}
                <Link href="https://drive.google.com/file/d/1PORxDqwrjU3fiFwWFbM2loboKhgT6Uo5/view?usp=sharing">
                    <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>Download CV</Button>
                </Link>
                <Link href="https://wa.me/51923258987">
                    <Button variant="secondary" className="border border-primary/30 text-[#173e7c]">Contact Me</Button>
                </Link>
            </div>
            <BackgroundConstellacion />
        </div>
    );
}
