'use client';

import { FolderCard } from '@/components/ui/folder-card';
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

const technologies: string[] = [
    'Python',
    'TensorFlow',
    'Keras',
    'PyTorch',
    'Pandas',
    'Imbalanced Learn',
    'Hugging Face',
    'Scikit-learn',
    'React',
    'NextJS',
    'PostgreSQL',
    'TypeScript',
    'Djando REST Framework',
    'Docker',
    'Google Cloud Platform',
    'Amazon Web Services',
    'Rapids',
    'Cuda',
];

const projects: ProjectsProps[] = [
    {
        title: 'Fine-Tuning of LLaMA 2 with QLoRA Optimization',
        link: 'https://github.com/LuisSante/Fine-Tuning-of-LLaMA-2-with-QLoRA-Optimization',
        icon: < FaProjectDiagram />,
        description: "Conducted fine-tuning of the 'NousResearch/Llama-2-7b-chat-hf' model using the 'mlabonne/guanaco-llama2-1k' dataset to create the customized 'llama-2-7b-miniguanaco' model. Implemented QLoRA with parameters such as a 64-dimension LoRA attention layer and 4-bit precision to optimize the model’s performance while maintaining resource efficiency. Configured and trained the model with advanced hyperparameters including a cosine learning rate schedule, gradient checkpointing, and specific optimizer settings like paged_adamw_32bit. Fine-tuning was performed using Hugging Face Transformers and PyTorch, achieving optimized performance in language modeling tasks.",
        tech: `Fine Tuning - ${technologies[0]} - ${technologies[6]} - ${technologies[3]} - LLaMA2 - QLoRA`,
    },
    {
        title: 'Image Classification',
        link: 'https://github.com/LuisSante/Image-Classification',
        icon: < FaImage />,
        description: "Developed a Convolutional Neural Network (CNN) model for image classification, achieving an accuracy of 85.72% on the test set. Preprocessed image data using techniques such as data augmentation and normalization to improve model generalization. Implemented the model using TensorFlow/Keras and optimized its performance through hyperparameter tuning.",
        tech: `${technologies[0]} - ${technologies[1]} - Convolutional Neural Network - Data Augmentation`,
    },
    {
        title: 'AI for E-Commerce Profitability Insights',
        link: 'https://github.com/LuisSante/LexCom',
        icon: < FaChartLine />,
        description: "Led the development of an AI-based product profitability prediction system for an e-commerce platform, plus extra services such as text generators using OpenAi API, the project covers from backend and frontend development to cloud deployment. Utilized data balancing techniques such as SMOTE during the training phase to enhance dataset accuracy and improve model performance",
        tech: `${technologies[0]} - Random Forest - SMOTE - Scrapy`,
    },
    {
        title: 'Stroke Prediction',
        link: 'https://github.com/LuisSante/Predicting-healthcare',
        icon: < FaHeartbeat />,
        description: "Developed a machine learning model to predict the likelihood of a stroke using medical data, achieving an accuracy of 91.12% in validation tests. Utilized feature engineering and model selection techniques to optimize model accuracy, including Random Forest and XGBoost. Implemented data balancing techniques such as SMOTE to address class imbalance in the target variable.",
        tech: `${technologies[0]} - Random Forest - XGBOOST - Feature Engineering`,
    },
];

export function ProjectSection() {
    return (
        <div
            className="mx-auto px-8 pb-8 max-w-5xl"
        >
            <h1 id="projects" className="pt-20 md:pt-32 max-w-5xl font-bold text-2xl text-[#0b1d3a] md:text-7xl">
                Projects
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
