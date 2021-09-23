import { GetStaticPropsContext } from 'next';
import { MessagesGroupName, TranslationMessages } from 'root/shared/translations';
import { getMessages, SupportedLocale } from 'root/shared/translations/server-side/getMessages';

export interface TranslationsServerProps {
  messages: TranslationMessages;
}

export function getStaticProps(
  include: MessagesGroupName[],
  { locale, defaultLocale }: GetStaticPropsContext
) {
  return getProps(include, locale ?? defaultLocale);
}

export async function getProps(
  include: MessagesGroupName[],
  locale?: string
): Promise<TranslationsServerProps> {
  assertIsSupportedLocale(locale);
  const messages = await getMessages(include, locale);

  console.log(`[Translations > getProps(locale: "${locale}")]:`, messages);
  return {
    messages
  };
}

export function assertIsSupportedLocale(locale?: string): asserts locale is SupportedLocale {
  if (!locale) {
    throw new Error(`No "locale" or "defaultLocale"`);
  }
  if (!supportedLocales.includes(locale as SupportedLocale)) {
    throw new Error(
      `Locale "${locale}" not supported. List of supported locales:\n${supportedLocalesAsString}`
    );
  }
}

const supportedLocales: SupportedLocale[] = ['en-US', 'ru'];
const supportedLocalesAsString = supportedLocales.map(locale => `  - "${locale}"`).join('\n');
