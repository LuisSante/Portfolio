'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChipProfile } from './chip';
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react';

type MLChipAvatarProps = {
    src: string;
    alt: string;
    className?: string;
};

type InteractiveMask = {
    id: string;
    src: string;
    color: string;
    glowColor: string;
};

type LoadedMask = {
    width: number;
    height: number;
    data: Uint8ClampedArray;
    maskSrc: string;
};

const interactiveMasks: InteractiveMask[] = [
    {
        id: 'person',
        src: '/image/masks/3_person.png',
        color: 'rgba(255, 68, 138, 0.58)',
        glowColor: 'rgba(255, 68, 138, 0.3)',
    },
    {
        id: 'backpack',
        src: '/image/masks/1_backpack.png',
        color: 'rgba(240, 106, 39, 0.54)',
        glowColor: 'rgba(240, 106, 39, 0.28)',
    },
    {
        id: 'mountain',
        src: '/image/masks/4_mountain-merged.png',
        color: 'rgba(87, 89, 255, 0.52)',
        glowColor: 'rgba(87, 89, 255, 0.28)',
    },
    {
        id: 'sea',
        src: '/image/masks/2_sea.png',
        color: 'rgba(0, 145, 255, 0.52)',
        glowColor: 'rgba(0, 145, 255, 0.26)',
    },
    {
        id: 'sky',
        src: '/image/masks/0_sky-other-merged.png',
        color: 'rgba(90, 206, 255, 0.5)',
        glowColor: 'rgba(90, 206, 255, 0.26)',
    },
];

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

const ENERGY_CYCLE_DURATION = 5.8;

const buildMaskStyle = (maskSrc: string): CSSProperties => ({
    WebkitMaskImage: `url(${maskSrc})`,
    maskImage: `url(${maskSrc})`,
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    // Match Next/Image object-cover so mask and photo crop stay perfectly aligned.
    WebkitMaskSize: 'cover',
    maskSize: 'cover',
    maskMode: 'alpha',
});

const loadMaskImage = (src: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new window.Image();
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error(`Failed to load mask image: ${src}`));
        image.src = src;
    });

export const MLChipAvatar = ({ src, alt, className }: MLChipAvatarProps) => {
    const viewportRef = useRef<HTMLDivElement>(null);
    const loadedMasksRef = useRef<LoadedMask[]>([]);
    const activeMaskRef = useRef<number | null>(null);
    const [activeMaskIndex, setActiveMaskIndex] = useState<number | null>(null);
    const [masksReady, setMasksReady] = useState(false);
    const [maskRenderSources, setMaskRenderSources] = useState(() =>
        interactiveMasks.map((mask) => mask.src)
    );

    useEffect(() => {
        let isMounted = true;

        const readMaskPixels = async () => {
            const masks = await Promise.all(
                interactiveMasks.map(async (mask) => {
                    const image = await loadMaskImage(mask.src);
                    const width = image.naturalWidth || image.width;
                    const height = image.naturalHeight || image.height;
                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;

                    const context = canvas.getContext('2d', { willReadFrequently: true });
                    if (!context) {
                        return null;
                    }

                    context.drawImage(image, 0, 0, width, height);
                    const data = context.getImageData(0, 0, width, height).data;
                    const alphaMaskData = context.createImageData(width, height);

                    for (let channelIndex = 0; channelIndex < data.length; channelIndex += 4) {
                        alphaMaskData.data[channelIndex] = 255;
                        alphaMaskData.data[channelIndex + 1] = 255;
                        alphaMaskData.data[channelIndex + 2] = 255;
                        alphaMaskData.data[channelIndex + 3] = data[channelIndex];
                    }

                    context.clearRect(0, 0, width, height);
                    context.putImageData(alphaMaskData, 0, 0);

                    return {
                        width,
                        height,
                        data,
                        maskSrc: canvas.toDataURL('image/png'),
                    } satisfies LoadedMask;
                })
            );

            if (!isMounted) {
                return;
            }

            loadedMasksRef.current = masks.filter((mask): mask is LoadedMask => Boolean(mask));
            setMasksReady(loadedMasksRef.current.length === interactiveMasks.length);
            setMaskRenderSources(
                loadedMasksRef.current.length === interactiveMasks.length
                    ? loadedMasksRef.current.map((mask) => mask.maskSrc)
                    : interactiveMasks.map((mask) => mask.src)
            );
        };

        readMaskPixels().catch(() => {
            if (isMounted) {
                loadedMasksRef.current = [];
                setMasksReady(false);
                setMaskRenderSources(interactiveMasks.map((mask) => mask.src));
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    const maskStyles = useMemo(() => {
        return interactiveMasks.map((mask, maskIndex) =>
            buildMaskStyle(maskRenderSources[maskIndex] ?? mask.src)
        );
    }, [maskRenderSources]);

    const setActiveMask = useCallback((nextMaskIndex: number | null) => {
        if (activeMaskRef.current === nextMaskIndex) {
            return;
        }

        activeMaskRef.current = nextMaskIndex;
        setActiveMaskIndex(nextMaskIndex);
    }, []);

    const getMaskAtPointer = useCallback((clientX: number, clientY: number) => {
        const viewport = viewportRef.current;
        const masks = loadedMasksRef.current;

        if (!viewport || masks.length === 0) {
            return null;
        }

        const bounds = viewport.getBoundingClientRect();
        if (bounds.width === 0 || bounds.height === 0) {
            return null;
        }

        const pointerX = clientX - bounds.left;
        const pointerY = clientY - bounds.top;

        if (pointerX < 0 || pointerX > bounds.width || pointerY < 0 || pointerY > bounds.height) {
            return null;
        }

        const imageWidth = masks[0].width;
        const imageHeight = masks[0].height;
        const coverScale = Math.max(bounds.width / imageWidth, bounds.height / imageHeight);
        const renderedWidth = imageWidth * coverScale;
        const renderedHeight = imageHeight * coverScale;
        const offsetX = (bounds.width - renderedWidth) / 2;
        const offsetY = (bounds.height - renderedHeight) / 2;
        const imageX = Math.floor(((pointerX - offsetX) / renderedWidth) * imageWidth);
        const imageY = Math.floor(((pointerY - offsetY) / renderedHeight) * imageHeight);

        if (imageX < 0 || imageX >= imageWidth || imageY < 0 || imageY >= imageHeight) {
            return null;
        }

        const pixelIndex = (imageY * imageWidth + imageX) * 4;
        for (let maskIndex = 0; maskIndex < masks.length; maskIndex += 1) {
            if (masks[maskIndex].data[pixelIndex] > 24) {
                return maskIndex;
            }
        }

        return null;
    }, []);

    const handlePointerMove = useCallback(
        (event: ReactPointerEvent<HTMLDivElement>) => {
            if (!masksReady) {
                return;
            }

            setActiveMask(getMaskAtPointer(event.clientX, event.clientY));
        },
        [getMaskAtPointer, masksReady, setActiveMask]
    );

    return (
        <a
            href="https://huggingface.co/facebook/mask2former-swin-base-coco-panoptic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Mask2Former model on Hugging Face"
            className={`relative z-30 mb-6 block h-[360px] w-[360px] cursor-pointer md:h-[540px] md:w-[540px] xl:h-[620px] xl:w-[620px] ${className ?? ''}`}
        >
            <motion.div
                className="absolute inset-[6%] rounded-[40px] bg-[#0060E1]/25 blur-3xl dark:bg-[#4a7cff]/18"
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
                <ChipProfile
                    cycleDuration={ENERGY_CYCLE_DURATION}
                    className="h-full w-full overflow-visible drop-shadow-[0_0_24px_rgba(0,96,225,0.34)]"
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
                className="absolute left-[32.3%] top-[32.2%] h-[35.5%] w-[35.5%] overflow-hidden rounded-[10px] border border-[#bad7ff]/70 bg-white shadow-[0_0_35px_rgba(0,96,225,0.28)] dark:border-[#7ba7ff]/55 dark:bg-slate-900 dark:shadow-[0_0_35px_rgba(0,0,0,0.45)]"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4.7, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div
                    ref={viewportRef}
                    className="relative h-full w-full cursor-crosshair"
                    onPointerMove={handlePointerMove}
                    onPointerLeave={() => setActiveMask(null)}
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 220px, (min-width: 768px) 192px, 128px"
                        priority
                    />
                    {interactiveMasks.map((mask, maskIndex) => (
                        <div
                            key={mask.id}
                            className="pointer-events-none absolute inset-0 transition-opacity duration-200"
                            style={{
                                ...maskStyles[maskIndex],
                                backgroundColor: mask.color,
                                opacity: activeMaskIndex === maskIndex ? 1 : 0,
                            }}
                        />
                    ))}
                    {activeMaskIndex !== null && (
                        <div
                            className="pointer-events-none absolute inset-0 blur-[10px] transition-opacity duration-200"
                            style={{
                                ...maskStyles[activeMaskIndex],
                                backgroundColor: interactiveMasks[activeMaskIndex].glowColor,
                                opacity: 1,
                            }}
                        />
                    )}
                </div>
                <motion.div
                    className="pointer-events-none absolute -inset-x-[20%] top-0 h-[45%] bg-gradient-to-b from-white/20 via-[#58a0ff]/35 to-transparent mix-blend-screen dark:from-white/10 dark:via-[#2f5eb6]/30"
                    animate={{ y: ['-110%', '150%'] }}
                    transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 3.9,
                        repeatDelay: 4.2,
                    }}
                />
                <div className="pointer-events-none absolute inset-0 rounded-[10px] border border-[#d5e8ff]/70 dark:border-[#7ba7ff]/45" />
            </motion.div>
        </a>
    );
};
