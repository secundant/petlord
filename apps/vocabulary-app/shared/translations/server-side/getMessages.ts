import { MessagesGroupName, TranslationMessages } from 'root/shared/translations';

export type SupportedLocale = 'ru' | 'en-US';

export async function getMessages(
  include: MessagesGroupName[],
  locale: SupportedLocale
): Promise<TranslationMessages> {
  const messages = await Promise.all(
    include.map(name =>
      import(`root/shared/translations/locales/${locale}/${name}.json`).then(groupMessages => [
        name,
        groupMessages.default
      ])
    )
  );

  return Object.fromEntries(messages);
}
