import { ContacMeSection } from '@/components/page-ui/ContacMeSection';
import { ExperienceSection } from '@/components/page-ui/ExperienceSection';
import { LandingPage } from '@/components/page-ui/LandingPage';
import { ProjectSection } from '@/components/page-ui/ProjectSection';
import { ResearchProjectSection } from '@/components/page-ui/ResearchProjectSection';
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
      <ExperienceSection dictionary={dictionary.experience} />
      <SkillsSection dictionary={dictionary.skills} />
      <ProjectSection dictionary={dictionary.projects} />
      <ResearchProjectSection dictionary={dictionary.research} />
      <ContacMeSection dictionary={dictionary.contact} />
    </main>
  );
}
