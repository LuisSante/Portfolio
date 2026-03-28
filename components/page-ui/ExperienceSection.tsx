'use client';

import { cn } from "@/lib/utils";
import { typeFont, typeFontRajdhani } from "@/components/ui/technology-footer-folder";
import type { Dictionary } from "@/i18n/dictionaries";

interface ExperienceSectionProps {
    dictionary: Dictionary['experience'];
}

export function ExperienceSection({ dictionary }: ExperienceSectionProps) {
    return (
        <div
            className="mx-auto mb-[-150px] px-8 max-w-5xl"
        >
            <h1 id="experience" className="pt-20 md:pt-32 max-w-5xl font-bold text-2xl text-[#0b1d3a] md:text-7xl">
                {dictionary.title}
            </h1>
            <div className="relative mx-auto pt-4 pb-32 max-w-2xl text-[#0b1d3a] antialiased">
                {dictionary.items.map((item, index) => (
                    <div key={index}>
                        <div key={`content-${index}`} className="mt-4 md:mt-0 mb-10">
                            <h2 className={cn('text-xl text-[#0b1d3a]')}>{item.title}</h2>
                            <span className="py-1 rounded-full w-fit text-primary/60 text-sm italic">{item.badge}</span>
                            <div className="mt-2 text-sm text-primary/80 prose prose-sm prose-blue">
                                <ul className={cn(
                                    "list-disc space-y-2",
                                    typeFontRajdhani.className
                                )}>
                                    {item.points.map((point, pointIndex) => (
                                        <li
                                            key={`${index}-${pointIndex}`}
                                            className={point.emphasis ? cn('text-[18px]', typeFont.className) : undefined}
                                        >
                                            {point.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
