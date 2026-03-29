import { BachelorThesisSection } from '@/components/page-ui/BachelorThesisSection';
import { ContacMeSection } from '@/components/page-ui/ContacMeSection';
import { ExperienceSection } from '@/components/page-ui/ExperienceSection';
import { LandingPage } from '@/components/page-ui/LandingPage';
import { ProjectSection } from '@/components/page-ui/ProjectSection';
import { PublicationsSection } from '@/components/page-ui/PublicationsSection';
import { getDictionary } from '@/i18n/dictionaries';

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default function HomePage({ params }: HomePageProps) {
  const dictionary = getDictionary(params.locale);

  return (
    <main>
      <LandingPage dictionary={dictionary.landing} />
      <div className='relative -mt-px w-full overflow-hidden bg-gradient-to-b from-[#eef8f7] via-[#edf6fb] to-[#f2f6ff] dark:from-[#0b162b] dark:via-[#0b162b] dark:to-[#0d1a31]'>
        <div className='pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#eef8f7]/88 to-transparent dark:from-[#0b162b]/90 dark:to-transparent' />
        <div className='relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 px-6 py-6 md:gap-4 md:px-8 md:py-1'>
          <ExperienceSection dictionary={dictionary.experience} />
          <PublicationsSection dictionary={dictionary.publications} />
          <ProjectSection dictionary={dictionary.projects} />
          <BachelorThesisSection dictionary={dictionary.bachelorThesis} />
          <ContacMeSection dictionary={dictionary.contact} />
        </div>
      </div>
    </main>
  );
}
