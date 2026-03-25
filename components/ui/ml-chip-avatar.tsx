'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type MLChipAvatarProps = {
    src: string;
    alt: string;
    className?: string;
};

const traces = [
    'M20 78 H78 V92',
    'M20 130 H66 V130 H88',
    'M20 182 H78 V168',
    'M240 78 H182 V92',
    'M240 130 H194',
    'M240 182 H182 V168',
    'M78 20 V78 H92',
    'M130 20 V66 H130 V88',
    'M182 20 V78 H168',
    'M78 240 V182 H92',
    'M130 240 V194',
    'M182 240 V182 H168',
];

const pins = [
    { x: 5, y: 74, w: 15, h: 8 },
    { x: 5, y: 126, w: 15, h: 8 },
    { x: 5, y: 178, w: 15, h: 8 },
    { x: 240, y: 74, w: 15, h: 8 },
    { x: 240, y: 126, w: 15, h: 8 },
    { x: 240, y: 178, w: 15, h: 8 },
    { x: 74, y: 5, w: 8, h: 15 },
    { x: 126, y: 5, w: 8, h: 15 },
    { x: 178, y: 5, w: 8, h: 15 },
    { x: 74, y: 240, w: 8, h: 15 },
    { x: 126, y: 240, w: 8, h: 15 },
    { x: 178, y: 240, w: 8, h: 15 },
];

export const MLChipAvatar = ({ src, alt, className }: MLChipAvatarProps) => {
    return (
        <div className={`relative z-30 mb-4 w-[220px] h-[220px] md:w-[250px] md:h-[250px] ${className ?? ''}`}>
            <motion.div
                className="absolute inset-0 rounded-[34px] bg-gradient-to-br from-sky-100/70 via-cyan-100/55 to-blue-100/60 blur-xl"
                animate={{
                    scale: [0.98, 1.02, 0.98],
                    opacity: [0.5, 0.85, 0.5],
                }}
                transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute inset-0 rounded-[34px] border border-sky-200/70 shadow-[0_0_40px_rgba(14,165,233,0.25)]"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.svg viewBox="0 0 260 260" className="absolute inset-0 w-full h-full">
                <defs>
                    <linearGradient id="chip-trace" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="50%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                    <linearGradient id="chip-frame" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#bae6fd" />
                        <stop offset="50%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                </defs>

                <motion.rect
                    x="18"
                    y="18"
                    width="224"
                    height="224"
                    rx="30"
                    fill="rgba(255,255,255,0.35)"
                    stroke="url(#chip-frame)"
                    strokeWidth="2"
                    animate={{
                        strokeOpacity: [0.55, 1, 0.55],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {pins.map((pin, idx) => (
                    <motion.rect
                        key={`pin-${idx}`}
                        x={pin.x}
                        y={pin.y}
                        width={pin.w}
                        height={pin.h}
                        rx="2"
                        fill="#e0f2fe"
                        stroke="#7dd3fc"
                        strokeWidth="0.8"
                        animate={{ opacity: [0.45, 1, 0.45] }}
                        transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: idx * 0.08,
                        }}
                    />
                ))}

                {traces.map((trace, idx) => (
                    <motion.path
                        key={`trace-${idx}`}
                        d={trace}
                        fill="none"
                        stroke="url(#chip-trace)"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 1, 0.25],
                            opacity: [0, 0.95, 0.95, 0.25],
                        }}
                        transition={{
                            duration: 3.8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: idx * 0.14,
                        }}
                    />
                ))}

                <motion.rect
                    x="92"
                    y="92"
                    width="76"
                    height="76"
                    rx="14"
                    fill="rgba(14,165,233,0.08)"
                    stroke="#7dd3fc"
                    strokeWidth="1.2"
                    animate={{
                        opacity: [0.55, 1, 0.55],
                    }}
                    transition={{
                        duration: 2.7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </motion.svg>

            <motion.div
                className="absolute top-[52px] left-[52px] rounded-2xl w-[116px] h-[116px] md:top-[58px] md:left-[58px] md:w-[134px] md:h-[134px] overflow-hidden"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 134px, 116px"
                    priority
                />
                <div className="absolute inset-0 border border-sky-200/70 rounded-2xl" />
            </motion.div>
        </div>
    );
};
