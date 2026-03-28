import Link from 'next/link';
import { FaPython } from 'react-icons/fa';
import {
    SiPandas,
    SiTensorflow,
    SiKeras,
    SiPytorch,
    SiScikitlearn
} from 'react-icons/si';

import { EvervaultCard, Icon } from '@/components/ui/evervault-card';
import type { Dictionary } from '@/i18n/dictionaries';

interface SkillsSectionProps {
    dictionary: Dictionary['skills'];
}

export function SkillsSection({ dictionary }: SkillsSectionProps) {
    return (
        <div className="mx-auto px-8 pb-8 max-w-5xl">
            <h1 id="skills" className="pt-20 md:pt-32 max-w-5xl font-bold text-2xl text-[#0b1d3a] md:text-7xl">
                {dictionary.title}
            </h1>
            <div className={'grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-3'}>
                {skills.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.link}
                        className="relative flex flex-col items-start border-primary/20 bg-white/95 mx-auto p-4 border rounded-md w-full max-w-full h-[13rem]"
                    >
                        <Icon className="-top-3 -left-3 absolute text-primary/35 size-6" />
                        <Icon className="-bottom-3 -left-3 absolute text-primary/35 size-6" />
                        <Icon className="-top-3 -right-3 absolute text-primary/35 size-6" />
                        <Icon className="-right-3 -bottom-3 absolute text-primary/35 size-6" />
                        <EvervaultCard text={item.title} icon={item.icon} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

const skills = [
    {
        title: 'Python',
        link: 'https://www.python.org/',
        icon: <FaPython />
    },
    {
        title: 'PyTorch',
        link: 'https://pytorch.org/',
        icon: <SiPytorch />
    },
    {
        title: 'TensorFlow',
        link: 'https://www.tensorflow.org/',
        icon: <SiTensorflow />
    },
    {
        title: 'Keras',
        link: 'https://keras.io/',
        icon: <SiKeras />
    },
    {
        title: 'Pandas',
        link: 'https://pandas.pydata.org/',
        icon: <SiPandas />
    },
    {
        title: 'Scikit-Learn',
        link: 'https://scikit-learn.org/',
        icon: <SiScikitlearn />
    },

];
