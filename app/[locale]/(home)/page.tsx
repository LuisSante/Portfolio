import { BachelorThesisSection } from '@/components/page-ui/BachelorThesisSection';
import { ContacMeSection } from '@/components/page-ui/ContacMeSection';
import { ExperienceSection } from '@/components/page-ui/ExperienceSection';
import { LandingPage } from '@/components/page-ui/LandingPage';
import { ProjectSection } from '@/components/page-ui/ProjectSection';
import { PublicationsSection } from '@/components/page-ui/PublicationsSection';
import { SkillsSection } from '@/components/page-ui/SkillsSection';
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
      <div className='w-full flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center max-w-[1080px] w-full'>
          <ExperienceSection dictionary={dictionary.experience} />
          <PublicationsSection dictionary={dictionary.publications} />
          <SkillsSection dictionary={dictionary.skills} />
          <ProjectSection dictionary={dictionary.projects} />
          <BachelorThesisSection dictionary={dictionary.bachelorThesis} />
          <ContacMeSection dictionary={dictionary.contact} />
        </div>
      </div>
    </main>
  );
}
