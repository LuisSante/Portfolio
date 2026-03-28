'use client';

import { FolderCard } from '@/components/ui/folder-card';
import type { Dictionary } from '@/i18n/dictionaries';
import { FaChartLine, FaHeartbeat, FaImage, FaProjectDiagram } from "react-icons/fa";

export interface ProjectsProps {
    title?: string;
    link?: string;
    linkPage?: string;
    icon?: React.ReactNode;
    iconPage?: React.ReactNode;
    iconResources?: React.ReactNode;
    iconSlides?: React.ReactNode;
    iconVideo?: React.ReactNode;
    description?: string;
    tech?: string;
    hrefResearch?: string;
    hrefSlides?: string;
    hrefExplication?: string;
}

const projectResources: Pick<ProjectsProps, 'link' | 'icon'>[] = [
    {
        link: 'https://github.com/LuisSante/Fine-Tuning-of-LLaMA-2-with-QLoRA-Optimization',
        icon: < FaProjectDiagram />,
    },
    {
        link: 'https://github.com/LuisSante/Image-Classification',
        icon: < FaImage />,
    },
    {
        link: 'https://github.com/LuisSante/LexCom',
        icon: < FaChartLine />,
    },
    {
        link: 'https://github.com/LuisSante/Predicting-healthcare',
        icon: < FaHeartbeat />,
    },
];

interface ProjectSectionProps {
    dictionary: Dictionary['projects'];
}

export function ProjectSection({ dictionary }: ProjectSectionProps) {
    const projects = dictionary.items.reduce<ProjectsProps[]>((acc, item, index) => {
        const resource = projectResources[index];
        if (!resource) {
            return acc;
        }

        acc.push({
            ...resource,
            ...item,
        });

        return acc;
    }, []);

    return (
        <div
            className="mx-auto px-8 pb-8 max-w-5xl"
        >
            <h1 id="projects" className="pt-20 md:pt-32 max-w-5xl font-bold text-2xl text-[#0b1d3a] md:text-7xl">
                {dictionary.title}
            </h1>
            <div className={'grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-2'}>
                {projects.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative flex flex-col items-start border-primary/20 shadow-md shadow-primary/10 bg-white mx-auto p-4 border rounded-md w-full max-w-full h-[300px]"
                    >
                        <FolderCard {...item} />
                    </div>
                ))}
            </div>
        </div>
    )
}
