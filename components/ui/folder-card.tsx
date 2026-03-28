import { FaFolder, FaGithub } from "react-icons/fa";
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
}

const HeadFolder = ({
    href,
    hrefPage,
    icon,
    iconResources,
    iconProject,
    iconPage
}: HeadFolderProps) => {
    return (
        <div className="flex justify-between items-center mb-[10px]">
            <div className="flex items-center gap-x-6">
                <span className="mr-2 text-primary text-3xl">{icon}</span>
                <span className='mr-2 text-primary text-3xl'>{iconProject}</span>
            </div>
            {href ? (
                <div className="flex gap-x-4">
                    <Link href={href}>
                        <span className="text-primary text-xl">{iconResources}</span>
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

    return (
        <div className='flex flex-col w-full max-w-full text-[#0b1d3a] dark:text-slate-100'>
            <div className="h-full max-h-[50px]">
                <HeadFolder
                    href={item.link}
                    icon={<FaFolder />}
                    iconResources={<FaGithub />}
                    iconProject={item.icon}
                    iconPage={item.iconPage}
                    hrefPage={item.linkPage}
                />
                <span className='font-semibold text-xl'>{item.title}</span>
            </div>
            <div className="mt-10 p-3 w-full h-full max-h-[200px] text-sm overflow-hidden">
                <div className="max-h-[100px] text-ellipsis overflow-hidden">
                    {item.description}
                </div>
            </div>
            <div className="mt-5 px-3">
                <TechnologyFooterFolder tech={item.tech} />
            </div>
        </div>
    );
};
