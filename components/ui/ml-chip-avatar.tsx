'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type MLChipAvatarProps = {
    src: string;
    alt: string;
    className?: string;
};

const pulseNodes = [
    { x: 24.5, y: 220.5, delay: 0 },
    { x: 477.5, y: 281.5, delay: 0.2 },
    { x: 220.5, y: 478.5, delay: 0.4 },
    { x: 281.5, y: 24.5, delay: 0.6 },
    { x: 77.5, y: 344.5, delay: 0.8 },
    { x: 423.5, y: 157.5, delay: 1 },
    { x: 344.5, y: 423.5, delay: 1.2 },
    { x: 157.5, y: 77.5, delay: 1.4 },
];

export const MLChipAvatar = ({ src, alt, className }: MLChipAvatarProps) => {
    return (
        <div className={`relative z-30 mb-6 h-[300px] w-[300px] md:h-[390px] md:w-[390px] ${className ?? ''}`}>
            <motion.div
                className="absolute inset-[6%] rounded-[40px] bg-[#0060E1]/25 blur-3xl"
                animate={{
                    opacity: [0.24, 0.48, 0.24],
                    scale: [0.95, 1.04, 0.95],
                }}
                transition={{
                    duration: 4.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute inset-0"
                animate={{
                    rotate: [0, 0.7, 0, -0.7, 0],
                    y: [0, -2, 0],
                    scale: [1, 1.012, 1],
                }}
                transition={{
                    duration: 6.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <Image
                    src="/mlprofile.svg"
                    alt="ML profile frame"
                    fill
                    className="object-contain drop-shadow-[0_0_24px_rgba(0,96,225,0.34)]"
                    sizes="(min-width: 768px) 390px, 300px"
                    priority
                />
            </motion.div>

            <motion.svg
                viewBox="0 0 502 503"
                className="absolute inset-0 h-full w-full"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            >
                {pulseNodes.map((node, idx) => (
                    <g key={`pulse-node-${idx}`}>
                        <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r="11"
                            fill="#0060E1"
                            opacity="0.1"
                            animate={{
                                opacity: [0.05, 0.25, 0.05],
                                scale: [0.8, 1.35, 0.8],
                            }}
                            transition={{
                                duration: 2.8,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: node.delay,
                            }}
                        />
                        <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r="2.6"
                            fill="#0f74ff"
                            animate={{ opacity: [0.45, 1, 0.45] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: node.delay + 0.05,
                            }}
                        />
                    </g>
                ))}
            </motion.svg>

            <motion.div
                className="absolute left-[32.3%] top-[32.2%] h-[35.5%] w-[35.5%] overflow-hidden rounded-[10px] border border-[#bad7ff]/70 bg-white shadow-[0_0_35px_rgba(0,96,225,0.28)]"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4.7, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 138px, 106px"
                    priority
                />
                <motion.div
                    className="absolute -inset-x-[20%] top-0 h-[45%] bg-gradient-to-b from-white/20 via-[#58a0ff]/35 to-transparent mix-blend-screen"
                    animate={{ y: ['-110%', '150%'] }}
                    transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        repeatDelay: 1.2,
                    }}
                />
                <div className="absolute inset-0 rounded-[10px] border border-[#d5e8ff]/70" />
            </motion.div>
        </div>
    );
};
