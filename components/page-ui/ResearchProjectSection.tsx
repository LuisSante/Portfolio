import React from 'react'
import { FaPython, FaResearchgate, FaVideo } from 'react-icons/fa';
import { FolderCardResearch } from '@/components/ui/folder-card-research';
import { PiSlideshow } from 'react-icons/pi';

const projects = [
    {
        title: 'Topic Modelling for Functionality Detection',
        hrefResearch: 'https://drive.google.com/file/d/1I_xpMxvrG9xbJGiTDUOIom6ZEkxK1kNK/view?usp=sharing',
        hrefSlides: 'https://drive.google.com/file/d/13NJ4fZ0zsP3R3hzTZ9u3TKeIhvfhJfps/view?usp=sharing',
        hrefExplication: 'https://drive.google.com/file/d/1vkVYZGOzVnDu395V3ZxhEOlWddsvIbun/view?usp=sharing',
        icon: < FaPython />,
        iconResources: <FaResearchgate />,
        iconSlides: <PiSlideshow />,
        iconVideo: <FaVideo />,
        description: 'Topic modeling to find functionalities within a user review of a Google Play Store app using unsupervised algorithms and sentences embeddings with Transformers. This research contributed to an enhanced understanding of user needs and informed app development priorities.',
        tech: `Natural Language Proccessing - Topic Modelling - Python - Transformers - Clustering - Embeddings`
    },
];

export const ResearchProjectSection = () => {
    return (
        <div
            className="mx-auto px-8 pb-8 max-w-5xl"
        >
            <h1 id="research-project" className="pt-20 md:pt-32 max-w-5xl font-bold text-2xl text-[#0b1d3a] md:text-7xl">
                Reseach Projects
            </h1>
            <div className={'grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-2'}>
                {projects.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative flex flex-col items-start border-primary/20 shadow-md shadow-primary/10 bg-white mx-auto p-4 border rounded-md w-full max-w-full h-[300px]"
                    >
                        <FolderCardResearch {...item} />
                    </div>
                ))}
            </div>
        </div >
    )
}
