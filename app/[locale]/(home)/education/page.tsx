import { EducationSection } from '@/components/page-ui/EducationSection';
import { getDictionary } from '@/i18n/dictionaries';

interface EducationPageProps {
  params: {
    locale: string;
  };
}

export default function EducationPage({ params }: EducationPageProps) {
  const dictionary = getDictionary(params.locale);

  return (
    <main>
      <div className="relative -mt-px w-full overflow-hidden bg-gradient-to-b from-[#edf4ff] via-[#eaf2ff] to-[#e7efff] pt-36 dark:from-[#0b162b] dark:via-[#0b162b] dark:to-[#0d1a31]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#edf4ff]/80 to-transparent dark:from-[#0b162b]/90 dark:to-transparent" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-16 px-6 py-16 md:px-8 md:py-10">
          <EducationSection dictionary={dictionary.education} />
        </div>
      </div>
    </main>
  );
}
