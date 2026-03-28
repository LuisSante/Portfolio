import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { i18n, isValidLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: LocaleLayoutProps): Metadata {
  const { locale } = params;
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  return children;
}
