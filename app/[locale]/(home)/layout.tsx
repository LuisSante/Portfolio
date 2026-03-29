import { Footer } from '@/components/page-ui/Footer';
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
    <div className="relative bg-gradient-to-b from-[#fdfbff] via-[#f4f8ff] to-[#eef8f5] text-[#0b1d3a] dark:from-[#050a14] dark:via-[#091223] dark:to-[#0b162b] dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 dark:hidden [background:radial-gradient(42rem_30rem_at_12%_14%,rgba(99,102,241,0.14),transparent),radial-gradient(38rem_28rem_at_88%_20%,rgba(16,185,129,0.12),transparent),radial-gradient(34rem_30rem_at_50%_82%,rgba(244,114,182,0.10),transparent)]" />
      <div className="relative">
        <Navbar locale={params.locale} dictionary={dictionary.navbar} />
        {children}
        <Footer dictionary={dictionary.navbar} />
      </div>
    </div>
  );
}
