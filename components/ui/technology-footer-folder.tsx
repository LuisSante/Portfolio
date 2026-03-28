import { cn } from "@/lib/utils";

interface TechnologyFooterFolderProps {
    tech?: string;
}

// Local utility-class wrappers to avoid remote font downloads in offline environments.
export const typeFont = {
    className: "font-serif italic"
};

export const typeFontRajdhani = {
    className: "font-sans tracking-wide"
};

export const TechnologyFooterFolder = ({
    tech
}: TechnologyFooterFolderProps) => {
    return (
        <div className={cn(
            'text-md'
            , typeFont.className)}>
            {tech}
        </div>
    )
}
