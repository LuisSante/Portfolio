'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const transition = {
    type: 'spring',
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001
};

export const Menu = ({ setActive, children }: { setActive: (item: string | null) => void; children: React.ReactNode }) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="relative flex justify-center items-center space-x-4 border-slate-200 bg-white/95 shadow-input px-8 py-3 border rounded-full boder backdrop-blur"
        >
            {children}
        </nav>
    );
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative">
            <motion.p transition={{ duration: 0.3 }} className="hover:opacity-[0.9] text-slate-900 cursor-pointer">
                {item}
            </motion.p>
            {active !== null && (
                <motion.div initial={{ opacity: 0, scale: 0.85, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={transition}>
                    {active === item && (
                        <div className="top-[calc(100%_+_1rem)] left-1/2 absolute -translate-x-1/2">
                            <motion.div
                                transition={transition}
                                layoutId="active" // layoutId ensures smooth animation
                                className="border-slate-200 bg-white shadow-xl border rounded-2xl overflow-hidden"
                            >
                                <motion.div
                                    layout // layout ensures smooth animation
                                    className="p-4 w-max h-full"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const ProductItem = ({ title, description, href, src }: { title: string; description: string; href: string; src: string }) => {
    return (
        <Link href={href} className="flex space-x-2">
            <Image src={src} width={140} height={70} alt={title} className="shadow-2xl rounded-md shrink-0" />
            <div>
                <h4 className="mb-1 font-bold text-slate-900 text-xl">{title}</h4>
                <p className="max-w-[10rem] text-slate-600 text-sm">{description}</p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link {...rest} className="flex items-center text-slate-700 hover:text-slate-950">
            {children}
        </Link>
    );
};
