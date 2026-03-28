import { Navbar } from '@/components/page-ui/Navbar';
import { getDictionary } from '@/i18n/dictionaries';

interface HomeLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function HomeLayout({ children, params }: HomeLayoutProps) {
  const dictionary = getDictionary(params.locale);

  return (
    <div className="bg-gradient-to-b from-white via-[#f5f9ff] to-[#eef4ff] text-[#0b1d3a]">
      <Navbar locale={params.locale} dictionary={dictionary.navbar} />
      {children}
    </div>
  );
}
