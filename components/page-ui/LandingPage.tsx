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
        className: 'text-blue-500'
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
        className: 'text-blue-500'
    },
];

export function LandingPage() {
    return (
        <div
            id="landing-page"
            className="relative flex flex-col justify-center items-center bg-white px-6 w-full min-h-screen text-slate-900"
        >
            <div className="absolute inset-0 flex justify-center items-center bg-white pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />
            <MLChipAvatar src="/image/me.png" alt="Luis Sante" />
            <p className="z-30 text-slate-600 text-xs sm:text-base text-center">
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
                    <Button className='bg-blue-600 hover:bg-blue-700 text-white'>Download CV</Button>
                </Link>
                <Link href="https://wa.me/51923258987">
                    <Button variant="secondary" className="border border-slate-300">Contact Me</Button>
                </Link>
            </div>
            <BackgroundConstellacion />
        </div>
    );
}
