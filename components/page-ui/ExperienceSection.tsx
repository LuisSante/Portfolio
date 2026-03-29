'use client';

import { cn } from "@/lib/utils";
import { typeFont, typeFontRajdhani } from "@/components/ui/technology-footer-folder";
import type { Dictionary } from "@/i18n/dictionaries";

interface ExperienceSectionProps {
    dictionary: Dictionary['experience'];
}

export function ExperienceSection({ dictionary }: ExperienceSectionProps) {
    return (
        <div className="w-full items-start">
            <h1 id="experience" className="pt-20 md:pt-8 text-2xl text-[#0b1d3a] md:text-5xl dark:text-slate-100">
                {dictionary.title}
            </h1>
            <div className="relative pt-4 pb-32 text-[#0b1d3a] antialiased dark:text-slate-200">
                {dictionary.items.map((item, index) => (
                    <div key={`${item.name_project}-${index}`} className="flex w-full flex-col gap-12 md:flex-row md:items-start">
                        <div className="w-full max-w-40">
                            <span className="py-1 rounded-full text-primary/60 dark:text-primary/80 text-md">{item.period}</span>
                        </div>
                        <div className="w-full max-w-5xl md:flex-1">
                            <div className="mt-4 md:mt-0 mb-10">
                                <h2 className={cn('text-xl text-[#0b1d3a] dark:text-slate-100')}>{item.name_project}</h2>
                                <p className={cn('mt-1 text-base text-primary/90 dark:text-slate-200')}>
                                    {item.role} - {item.organization}
                                </p>
                                <p className="mt-1 text-sm text-primary/70 dark:text-slate-300">{item.location}</p>
                                <div className="mt-2 text-sm text-primary/80 dark:text-slate-300 prose prose-sm prose-blue dark:prose-invert">
                                    <ul className={cn(
                                        "list-disc space-y-2",
                                        typeFontRajdhani.className
                                    )}>
                                        {item.responsibilities.map((responsibility, pointIndex) => (
                                            <li key={`${index}-${pointIndex}`}>
                                                {responsibility}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
