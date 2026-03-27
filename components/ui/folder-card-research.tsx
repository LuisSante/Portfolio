import { FaFolder } from "react-icons/fa";
import Link from 'next/link';
import { TechnologyFooterFolder } from "./technology-footer-folder";
import { ProjectsProps } from "../page-ui/ProjectSection";

interface HeadFolderResearchProps {
    hrefResearch?: string;
    hrefSlides?: string;
    hrefExplication?: string;
    icon?: React.ReactNode;
    iconProject?: React.ReactNode;
    iconResources?: React.ReactNode;
    iconSlides?: React.ReactNode;
    iconVideo?: React.ReactNode;
}

const HeadFolderResearch = ({
    hrefResearch,
    hrefSlides,
    hrefExplication,
    icon,
    iconProject,
    iconResources,
    iconSlides,
    iconVideo
}: HeadFolderResearchProps) => {
    return (
        <div className="flex justify-between items-center mb-[10px]">
            <div className="flex items-center gap-x-6">
                <span className="mr-2 text-primary text-3xl">{icon}</span>
                <span className='mr-2 text-primary text-3xl'>{iconProject}</span>
            </div>
            {hrefResearch ? (
                <div className="flex gap-x-4">
                    <Link href={hrefResearch}>
                        <span className="text-primary text-xl">{iconResources}</span>
                    </Link>
                    <a href={hrefSlides}>
                        <span className="text-primary text-xl">{iconSlides}</span>
                    </a>
                    <a href={hrefExplication}>
                        <span className="text-primary text-xl">{iconVideo}</span>
                    </a>
                </div>
            ) : (
                <div className="flex gap-x-4">
                    <span className="text-primary text-xl">{iconResources}</span>
                    <span className="text-primary text-xl">{iconSlides}</span>
                    <span className="text-primary text-xl">{iconVideo}</span>
                </div>
            )}
        </div>
    );
};

export const FolderCardResearch = ({ ...item }: ProjectsProps) => {

    return (
        <div className='flex flex-col w-full max-w-full text-[#0b1d3a]'>
            <div className="h-full max-h-[50px]">
                <HeadFolderResearch
                    icon={<FaFolder />}
                    iconProject={item.icon}
                    hrefResearch={item.hrefResearch}
                    hrefSlides={item.hrefSlides}
                    hrefExplication={item.hrefExplication}
                    iconResources={item.iconResources}
                    iconSlides={item.iconSlides}
                    iconVideo={item.iconVideo}
                />
                <span className='font-semibold text-xl'>{item.title}</span>
            </div>
            <div className="mt-10 p-3 w-full h-full max-h-[200px] text-sm overflow-hidden">
                <div className="max-h-[100px] text-ellipsis overflow-hidden">
                    {item.description}
                </div>
            </div>
            <div className="mt-3 px-3">
                <TechnologyFooterFolder tech={item.tech} />
            </div>
        </div>
    );
};
