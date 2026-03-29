'use client';

import { cn } from "@/lib/utils";
import { typeFontRajdhani } from "@/components/ui/technology-footer-folder";
import type { Dictionary } from "@/i18n/dictionaries";

interface ExperienceSectionProps {
    dictionary: Dictionary['experience'];
}

export function ExperienceSection({ dictionary }: ExperienceSectionProps) {
    return (
        <div className="w-full items-start">
            <h1 id="experience" className="scroll-mt-28 text-2xl text-[#0b1d3a] md:text-5xl dark:text-slate-100">
                {dictionary.title}
            </h1>
            <div className="relative pt-4 text-[#0b1d3a] antialiased md:pt-6 dark:text-slate-100">
                <div className="space-y-2 md:space-y-4">
                    {dictionary.items.map((item, index) => (
                        <div
                            key={`${item.name_project}-${index}`}
                            className="flex w-full flex-col gap-4 py-3 md:flex-row md:items-start md:gap-10 md:py-5"
                        >
                            <div className="w-full max-w-40">
                                <span className="rounded-full py-1 text-md text-primary/80 dark:text-[#7fb4ff]">{item.period}</span>
                            </div>
                            <div className="flex w-full max-w-5xl flex-col gap-4 md:flex-row md:gap-0">
                                <div className="w-full md:flex-1">
                                    <div className="mt-2 mb-2 md:mt-0 md:mb-0">
                                        <h2 className={cn('text-xl text-[#0b1d3a] dark:text-slate-100')}>{item.name_project}</h2>
                                        <p className={cn('mt-1 text-base text-primary dark:text-slate-200')}>
                                            {item.role}
                                        </p>
                                        <div className="prose prose-sm prose-blue mt-2 text-sm text-primary/85 dark:prose-invert dark:text-slate-200">
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
                                <div className="flex flex-col items-start text-primary/90 md:items-end dark:text-slate-200">
                                    <div>
                                        {item.organization}
                                    </div>
                                    <p className="mt-1 text-sm text-primary/75 dark:text-slate-300">{item.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
