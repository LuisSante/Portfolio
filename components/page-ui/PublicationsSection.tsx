import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaLock } from 'react-icons/fa';

import type { Dictionary } from '@/i18n/dictionaries';
import { cn } from '@/lib/utils';

interface PublicationsSectionProps {
  dictionary: Dictionary['publications'];
}

export function PublicationsSection({ dictionary }: PublicationsSectionProps) {
  const tagStyles = [
    'border-fuchsia-200/80 bg-fuchsia-50/85 text-fuchsia-700',
    'border-cyan-200/80 bg-cyan-50/85 text-cyan-700',
    'border-emerald-200/80 bg-emerald-50/85 text-emerald-700',
    'border-amber-200/80 bg-amber-50/85 text-amber-700',
  ];

  return (
    <div className="w-full items-start">
      <h1 id="publications" className="text-2xl text-[#0b1d3a] md:text-5xl dark:text-slate-100">
        {dictionary.title}
      </h1>
      <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2">
        {dictionary.items.map((publication, index) => {
          const repositoryState =
            publication.github.state === 'private' ? dictionary.labels.privateRepo : dictionary.labels.publicRepo;

          return (
            <article
              key={`${publication.title}-${index}`}
              className="relative flex h-full min-h-[400px] flex-col rounded-md border border-[#9ab0dc]/45 bg-gradient-to-br from-white/95 via-[#fbf9ff]/90 to-[#f4fbf8]/90 p-4 shadow-md shadow-[#7a97dc]/20 dark:border-slate-700 dark:bg-none dark:bg-slate-900/80 dark:shadow-black/30"
            >
              <div className="mb-2 flex flex-wrap gap-3 justify-start">
                {publication.doi ? (
                  <Link
                    href={publication.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-3 py-2 text-sm text-primary transition-colors hover:bg-primary/10 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    {dictionary.labels.doi}
                    <FaExternalLinkAlt className="size-3" />
                  </Link>
                ) : null}
                <Link
                  href={publication.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[#9ab0dc]/45 px-3 py-2 text-sm text-primary transition-colors hover:bg-primary/10 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <FaGithub className="size-4" />
                  {dictionary.labels.github}
                  {publication.github.state === 'private' ? <FaLock className="size-3" /> : null}
                  <span className="text-xs opacity-80">({repositoryState})</span>
                </Link>
              </div>
              <h2 className="text-xl font-semibold text-[#0b1d3a] dark:text-slate-100">{publication.title}</h2>
              <p className="mt-2 text-sm text-primary/85 dark:text-slate-300">
                {publication.role} - {publication.organization}
              </p>

              <div className="mt-3 space-y-1 text-sm text-primary/80 dark:text-slate-300">
                {publication.conference ? (
                  <p>
                    <span className="font-medium">{dictionary.labels.conference}:</span> {publication.conference}
                  </p>
                ) : null}
                {publication.journal ? (
                  <p>
                    <span className="font-medium">{dictionary.labels.journal}:</span> {publication.journal}
                  </p>
                ) : null}
              </div>

              <div className="mt-4">
                <p className="text-sm font-medium text-[#0b1d3a] dark:text-slate-200">{dictionary.labels.knowledge}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {publication.knowledge.map((topic, topicIndex) => (
                    <span
                      key={topic}
                      className={cn(
                        'rounded-full border px-3 py-1 text-xs',
                        tagStyles[topicIndex % tagStyles.length],
                        'dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300'
                      )}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm font-medium text-[#0b1d3a] dark:text-slate-200">{dictionary.labels.technology}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {publication.technology.map((tool, toolIndex) => (
                    <span
                      key={tool}
                      className={cn(
                        'rounded-full border px-3 py-1 text-xs',
                        tagStyles[(toolIndex + 1) % tagStyles.length],
                        'dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300'
                      )}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </article>
          );
        })}
      </div>
    </div>
  );
}
