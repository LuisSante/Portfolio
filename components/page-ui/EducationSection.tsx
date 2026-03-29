import Link from 'next/link';
import { ExternalLink, MapPin } from 'lucide-react';

import type { Dictionary } from '@/i18n/dictionaries';
import { cn } from '@/lib/utils';

interface EducationSectionProps {
  dictionary: Dictionary['education'];
}

export function EducationSection({ dictionary }: EducationSectionProps) {
  return (
    <section className="w-full items-start">
      <h1 id="education" className="scroll-mt-28 text-2xl text-[#0b1d3a] md:text-5xl dark:text-slate-100">
        {dictionary.title}
      </h1>

      <div className="relative pt-6 text-[#0b1d3a] antialiased dark:text-slate-100">
        <div className="space-y-4">
          {dictionary.items.map((item, index) => (
            <article
              key={`${item.institution}-${index}`}
              className="flex w-full flex-col gap-8 py-5 md:flex-row md:items-start md:gap-10"
            >
              <div className="w-full max-w-40">
                <span className="rounded-full py-1 text-md text-primary/80 dark:text-[#7fb4ff]">{item.period}</span>
              </div>

              <div className="flex max-w-5xl w-full">
                <div className="w-full md:flex-1">
                  <div className="mt-4 mb-4 md:mt-0 md:mb-0">
                    <h2 className={cn('text-xl text-[#0b1d3a] dark:text-slate-100')}>{item.institution}</h2>
                    <p className={cn('mt-1 text-base text-primary dark:text-slate-200')}>{item.degree}</p>
                  </div>
                </div>

                <div className="flex flex-col items-start text-primary/90 md:items-end dark:text-slate-200">
                  <div className="inline-flex items-center gap-2">
                  <div className="mt-3 text-sm text-primary/85 dark:text-slate-200">
                      <Link
                        href={item.ubication}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 underline-offset-4 transition-colors hover:text-primary/80 hover:underline dark:hover:text-slate-100"
                      >
                        <MapPin className="size-4" />
                        {dictionary.labels.ubication}
                      </Link>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-primary/75 dark:text-slate-300">{item.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <h2 className="text-2xl text-[#0b1d3a] md:text-4xl dark:text-slate-100">{dictionary.certificationsTitle}</h2>
      <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2">
        {dictionary.certifications.map((certification, index) => (
          <article
            key={`${certification.name}-${index}`}
            className="relative flex h-full min-h-[280px] flex-col rounded-md border border-primary/20 bg-white p-4 shadow-md shadow-primary/10 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-black/30"
          >
            <div className="mb-3 flex flex-wrap gap-3 justify-start">
              <Link
                href={certification.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-3 py-2 text-sm text-primary transition-colors hover:bg-primary/10 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {dictionary.labels.certificateUrl}
                <ExternalLink className="size-4" />
              </Link>
            </div>

            <h3 className="text-xl font-semibold text-[#0b1d3a] dark:text-slate-100">{certification.name}</h3>
            <p className="mt-2 text-sm text-primary/85 dark:text-slate-300">
              {dictionary.labels.organization}: {certification.organization}
            </p>
            <p className="mt-1 text-sm text-primary/80 dark:text-slate-300">
              {dictionary.labels.date}: {certification.date}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-primary/80 dark:text-slate-300">{certification.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
