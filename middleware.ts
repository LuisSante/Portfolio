import { NextRequest, NextResponse } from 'next/server';

import { i18n, isValidLocale, type Locale } from '@/i18n/config';

const PUBLIC_FILE = /\.(.*)$/;

function getPreferredLocale(request: NextRequest): Locale {
  const localeFromCookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (localeFromCookie && isValidLocale(localeFromCookie)) {
    return localeFromCookie;
  }

  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const acceptedLocales = acceptLanguage
      .split(',')
      .map((item) => item.split(';')[0]?.trim().toLowerCase())
      .filter(Boolean) as string[];

    for (const locale of acceptedLocales) {
      if (isValidLocale(locale)) {
        return locale;
      }

      const baseLocale = locale.split('-')[0];
      if (baseLocale && isValidLocale(baseLocale)) {
        return baseLocale;
      }
    }
  }

  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  const hasLocalePrefix = i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) {
    const localeFromPath = pathname.split('/')[1];
    const response = NextResponse.next();

    if (localeFromPath && isValidLocale(localeFromPath)) {
      response.cookies.set('NEXT_LOCALE', localeFromPath, { path: '/' });
    }

    return response;
  }

  const locale = getPreferredLocale(request);
  const pathWithoutLeadingSlash = pathname === '/' ? '' : pathname;

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${locale}${pathWithoutLeadingSlash}`;

  const response = NextResponse.redirect(redirectUrl);
  response.cookies.set('NEXT_LOCALE', locale, { path: '/' });

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
