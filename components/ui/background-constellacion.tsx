'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

type Star = {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
    glow: number;
};

type Line = {
    id: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    opacity: number;
    width: number;
    delay: number;
    duration: number;
};

const VIEWBOX_WIDTH = 1200;
const VIEWBOX_HEIGHT = 700;
const STAR_COUNT = 34;

const pseudoRandom = (seed: number) => {
    const value = Math.sin(seed * 999.91) * 10000;
    return value - Math.floor(value);
};

const between = (seed: number, min: number, max: number) => {
    return min + pseudoRandom(seed) * (max - min);
};

const createStars = (): Star[] => {
    return Array.from({ length: STAR_COUNT }, (_, index) => {
        const seed = index + 1;
        return {
            id: index,
            x: between(seed * 1.9, 70, VIEWBOX_WIDTH - 70),
            y: between(seed * 2.7, 50, VIEWBOX_HEIGHT - 50),
            size: between(seed * 3.1, 1.1, 3.2),
            glow: between(seed * 4.3, 2.8, 6.5),
            delay: between(seed * 5.2, 0, 3.5),
            duration: between(seed * 6.4, 2.4, 5.4),
        };
    });
};

const createLines = (stars: Star[]): Line[] => {
    const pairRegistry = new Set<string>();
    const lines: Line[] = [];

    stars.forEach((star, index) => {
        const nearest = stars
            .filter((_, candidateIndex) => candidateIndex !== index)
            .map((candidate, candidateIndex) => {
                const dx = star.x - candidate.x;
                const dy = star.y - candidate.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                return { candidate, candidateIndex, distance };
            })
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 2);

        nearest.forEach(({ candidate, candidateIndex }, nearIndex) => {
            const minIndex = Math.min(index, candidateIndex);
            const maxIndex = Math.max(index, candidateIndex);
            const key = `${minIndex}-${maxIndex}`;

            if (pairRegistry.has(key)) {
                return;
            }

            pairRegistry.add(key);

            const seed = (minIndex + 1) * (maxIndex + 2) * (nearIndex + 3);
            lines.push({
                id: key,
                x1: star.x,
                y1: star.y,
                x2: candidate.x,
                y2: candidate.y,
                width: between(seed * 1.2, 0.6, 1.8),
                opacity: between(seed * 1.7, 0.14, 0.38),
                delay: between(seed * 2.1, 0, 4),
                duration: between(seed * 2.8, 3.5, 7.5),
            });
        });
    });

    return lines;
};

export const BackgroundConstellacion = () => {
    const stars = useMemo(() => createStars(), []);
    const lines = useMemo(() => createLines(stars), [stars]);

    return (
        <div className="pointer-events-none absolute inset-0 hidden md:block overflow-hidden dark:opacity-75">
            <motion.div
                className="absolute -left-24 top-10 rounded-full w-80 h-80 bg-[#0060E1]/30 blur-3xl dark:bg-[#4a7cff]/20"
                animate={{
                    x: [0, 30, -12, 0],
                    y: [0, -20, 16, 0],
                    opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute -right-20 bottom-8 rounded-full w-72 h-72 bg-[#2f82ff]/26 blur-3xl dark:bg-[#5d8cff]/20"
                animate={{
                    x: [0, -24, 14, 0],
                    y: [0, 20, -10, 0],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
            />

            <motion.svg
                viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
                className="w-full h-full dark:opacity-80"
                preserveAspectRatio="xMidYMid slice"
                animate={{ opacity: [0.85, 1, 0.9, 0.85] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
                <defs>
                    <linearGradient id="constellation-line" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#88b9ff" stopOpacity="0.85" />
                        <stop offset="50%" stopColor="#0060E1" stopOpacity="0.65" />
                        <stop offset="100%" stopColor="#2d86ff" stopOpacity="0.85" />
                    </linearGradient>
                    <radialGradient id="star-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#eaf3ff" stopOpacity="0.92" />
                        <stop offset="100%" stopColor="#eaf3ff" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <g>
                    {lines.map((line) => (
                        <motion.line
                            key={line.id}
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            stroke="url(#constellation-line)"
                            strokeWidth={line.width}
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0.2, 1, 0.4],
                                opacity: [0.08, line.opacity, 0.1],
                            }}
                            transition={{
                                duration: line.duration,
                                delay: line.delay,
                                repeat: Infinity,
                                repeatType: 'mirror',
                                ease: 'easeInOut',
                            }}
                        />
                    ))}
                </g>

                <g>
                    {stars.map((star) => (
                        <g key={star.id}>
                            <motion.circle
                                cx={star.x}
                                cy={star.y}
                                r={star.glow}
                                fill="url(#star-glow)"
                                animate={{
                                    opacity: [0.1, 0.45, 0.1],
                                    scale: [0.9, 1.25, 0.9],
                                }}
                                transition={{
                                    duration: star.duration + 1.5,
                                    delay: star.delay,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />

                            <motion.circle
                                cx={star.x}
                                cy={star.y}
                                r={star.size}
                                fill="#ddebff"
                                animate={{
                                    opacity: [0.45, 1, 0.45],
                                    scale: [1, 1.4, 1],
                                }}
                                transition={{
                                    duration: star.duration,
                                    delay: star.delay,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                        </g>
                    ))}
                </g>
            </motion.svg>
        </div>
    );
};
