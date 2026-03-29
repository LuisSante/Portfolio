import { FaFolder, FaGithub, FaLock } from "react-icons/fa";
import Link from 'next/link';
import { TechnologyFooterFolder } from "./technology-footer-folder";
import { ProjectsProps } from "../page-ui/ProjectSection";

interface HeadFolderProps {
    href?: string;
    hrefPage?: string;
    icon?: React.ReactNode;
    iconResources?: React.ReactNode;
    iconProject?: React.ReactNode;
    iconPage?: React.ReactNode;
    githubLabel?: string;
    repositoryState?: 'private' | 'public';
    repositoryStateLabel?: string;
}

const HeadFolder = ({
    href,
    hrefPage,
    icon,
    iconResources,
    iconProject,
    iconPage,
    githubLabel,
    repositoryState,
    repositoryStateLabel
}: HeadFolderProps) => {
    return (
        <div className="flex justify-between items-center mb-[10px]">
            <div className="flex items-center gap-x-6">
                <span className="mr-2 text-primary text-3xl">{icon}</span>
                <span className='mr-2 text-primary text-3xl'>{iconProject}</span>
            </div>
            {href ? (
                <div className="flex gap-x-4">
                    <Link
                        href={href}
                        className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-3 py-2 text-sm text-primary transition-colors hover:bg-primary/10 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                        <span className="text-base">{iconResources}</span>
                        <span>{githubLabel}</span>
                        {repositoryState === 'private' ? <FaLock className="size-3" /> : null}
                        {repositoryStateLabel ? <span className="text-xs opacity-80">({repositoryStateLabel})</span> : null}
                    </Link>
                    {hrefPage && iconPage && (
                        <a href={hrefPage}>
                            <span className="text-primary text-xl">{iconPage}</span>
                        </a>
                    )}
                </div>
            ) : (
                <div className="flex gap-x-4">
                    <span className="text-primary text-xl">{iconResources}</span>
                    {iconPage && <span className="text-primary text-xl">{iconPage}</span>}
                </div>
            )}
        </div>
    );
};


export const FolderCard = ({ ...item }: ProjectsProps) => {
    const projectTitle = item.name ?? item.title;
    const githubUrl = item.github ?? item.link;
    const repositoryState = item.repositoryState ?? 'public';
    const hasKnowledge = Array.isArray(item.knowledge) && item.knowledge.length > 0;
    const dateLabel = item.labels?.date ?? 'Date';
    const locationLabel = item.labels?.location ?? 'Location';
    const knowledgeLabel = item.labels?.knowledge ?? 'Knowledge';
    const githubLabel = item.labels?.github ?? 'GitHub';
    const repositoryStateLabel = repositoryState === 'private'
        ? item.labels?.privateRepo ?? 'Private repository'
        : item.labels?.publicRepo ?? 'Public repository';

    return (
        <div className='flex flex-col w-full max-w-full text-[#0b1d3a] dark:text-slate-100'>
            <div className="h-full max-h-[50px]">
                <HeadFolder
                    href={githubUrl}
                    icon={<FaFolder />}
                    iconResources={<FaGithub />}
                    iconProject={item.icon}
                    iconPage={item.iconPage}
                    hrefPage={item.linkPage}
                    githubLabel={githubLabel}
                    repositoryState={repositoryState}
                    repositoryStateLabel={repositoryStateLabel}
                />
                <span className='font-semibold text-xl'>{projectTitle}</span>
            </div>
            <div className="mt-10 p-3 w-full text-sm">
                <p className="max-h-[72px] overflow-hidden text-ellipsis">{item.description}</p>
                {(item.date || item.location) && (
                    <div className="mt-3 space-y-1 text-primary/80 dark:text-slate-300">
                        {item.date ? (
                            <p>
                                <span className="font-medium">{dateLabel}:</span> {item.date}
                            </p>
                        ) : null}
                        {item.location ? (
                            <p>
                                <span className="font-medium">{locationLabel}:</span> {item.location}
                            </p>
                        ) : null}
                    </div>
                )}
            </div>
            {hasKnowledge ? (
                <div className="mt-1 px-3 pb-3">
                    <p className="mb-2 text-sm font-medium text-[#0b1d3a] dark:text-slate-200">{knowledgeLabel}</p>
                    <div className="flex flex-wrap gap-2">
                        {item.knowledge?.map((topic) => (
                            <span
                                key={topic}
                                className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary/80 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="mt-5 px-3">
                    <TechnologyFooterFolder tech={item.tech} />
                </div>
            )}
        </div>
    );
};
