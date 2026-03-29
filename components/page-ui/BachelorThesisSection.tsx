import Link from 'next/link';
import { FaFilePdf, FaVideo } from 'react-icons/fa';
import { PiSlideshow } from 'react-icons/pi';

import type { Dictionary } from '@/i18n/dictionaries';

interface BachelorThesisSectionProps {
  dictionary: Dictionary['bachelorThesis'];
}

export function BachelorThesisSection({ dictionary }: BachelorThesisSectionProps) {
  const thesis = dictionary.item;

  return (
    <div className="w-full items-start">
      <h1 id="bachelor-thesis" className="text-2xl text-[#0b1d3a] md:text-5xl dark:text-slate-100">
        {dictionary.title}
      </h1>
      <article className="mt-10 rounded-md border border-primary/20 bg-white p-6 shadow-md shadow-primary/10 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-black/30">
        <h2 className="text-xl font-semibold text-[#0b1d3a] dark:text-slate-100">{thesis.title}</h2>
        <p className="mt-3 text-sm text-primary/85 dark:text-slate-300">{thesis.description}</p>

        <div className="mt-4 grid gap-2 text-sm text-primary/80 dark:text-slate-300 md:grid-cols-2">
          <p>
            <span className="font-medium">{dictionary.labels.location}:</span> {thesis.location}
          </p>
          <p>
            <span className="font-medium">{dictionary.labels.date}:</span> {thesis.date}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-sm font-medium text-[#0b1d3a] dark:text-slate-200">{dictionary.labels.knowledge}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {thesis.knowledge.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary/80 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={thesis.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-3 py-2 text-sm text-primary transition-colors hover:bg-primary/10 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <FaFilePdf className="size-4" />
            {dictionary.labels.pdf}
          </Link>
          <Link
            href={thesis.slidesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-3 py-2 text-sm text-primary transition-colors hover:bg-primary/10 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <PiSlideshow className="size-4" />
            {dictionary.labels.slides}
          </Link>
          <Link
            href={thesis.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-3 py-2 text-sm text-primary transition-colors hover:bg-primary/10 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <FaVideo className="size-4" />
            {dictionary.labels.video}
          </Link>
        </div>
      </article>
    </div>
  );
}
