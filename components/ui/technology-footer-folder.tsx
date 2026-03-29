import { cn } from "@/lib/utils";

interface TechnologyFooterFolderProps {
    tech?: string;
}

// Local utility-class wrappers that avoid overriding the global font family.
export const typeFont = {
    className: "italic"
};

export const typeFontRajdhani = {
    className: "tracking-wide"
};

export const TechnologyFooterFolder = ({
    tech
}: TechnologyFooterFolderProps) => {
    return (
        <div className={cn(
            'text-md text-primary/85 dark:text-slate-300'
            , typeFont.className)}>
            {tech}
        </div>
    )
}
