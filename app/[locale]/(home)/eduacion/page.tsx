import { redirect } from 'next/navigation';

interface EduacionRedirectPageProps {
  params: {
    locale: string;
  };
}

export default function EduacionRedirectPage({ params }: EduacionRedirectPageProps) {
  redirect(`/${params.locale}/education`);
}
