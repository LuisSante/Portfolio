'use client';

import { FolderCard } from '@/components/ui/folder-card';
import { CardPattern } from '@/components/ui/evervault-card';
import type { Dictionary } from '@/i18n/dictionaries';
import { FaChartLine, FaHeartbeat, FaImage, FaProjectDiagram } from "react-icons/fa";

export interface ProjectsProps {
    name?: string;
    date?: string;
    github?: string;
    repositoryState?: 'private' | 'public';
    linkPage?: string;
    icon?: React.ReactNode;
    iconPage?: React.ReactNode;
    iconResources?: React.ReactNode;
    iconSlides?: React.ReactNode;
    iconVideo?: React.ReactNode;
    description?: string;
    location?: string;
    knowledge?: string[];
    labels?: {
        date: string;
        location: string;
        knowledge: string;
        github: string;
        privateRepo: string;
        publicRepo: string;
    };
    title?: string;
    link?: string;
    tech?: string;
    hrefResearch?: string;
    hrefSlides?: string;
    hrefExplication?: string;
}

const projectIcons: React.ReactNode[] = [<FaProjectDiagram key="icon-0" />, <FaImage key="icon-1" />, <FaChartLine key="icon-2" />, <FaHeartbeat key="icon-3" />];

interface ProjectSectionProps {
    dictionary: Dictionary['projects'];
}

export function ProjectSection({ dictionary }: ProjectSectionProps) {
    const projects = dictionary.items.map<ProjectsProps>((item, index) => ({
        ...item,
        labels: dictionary.labels,
        icon: projectIcons[index % projectIcons.length]
    }));

    return (
        <div
            className=""
        >
            <h1 id="projects" className="text-2xl text-[#0b1d3a] md:text-5xl dark:text-slate-100">
                {dictionary.title}
            </h1>
            <div className={'grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-2'}>
                {projects.map((item, idx) => (
                    <div
                        key={idx}
                        className="group/card relative mx-auto flex w-full max-w-full min-h-[340px] flex-col items-start overflow-hidden rounded-md border border-[#9ab0dc]/45 bg-gradient-to-br from-white/95 via-[#fbf9ff]/90 to-[#f4fbf8]/90 p-4 shadow-md shadow-[#7a97dc]/20 dark:border-slate-700 dark:bg-none dark:bg-slate-900/80 dark:shadow-black/30"
                    >
                        <div className="pointer-events-none absolute inset-0 z-0 opacity-50">
                            <CardPattern />
                        </div>
                        <div className="relative z-10 w-full">
                            <FolderCard {...item} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
