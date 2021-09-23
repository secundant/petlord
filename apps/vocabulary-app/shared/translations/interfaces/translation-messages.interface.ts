export interface TranslationSchema {
  AuthLoginForm: typeof import('root/shared/translations/locales/en-US/AuthLoginForm.json');
  MainLayout: typeof import('root/shared/translations/locales/en-US/MainLayout.json');
}

export type MessagesGroupName = keyof TranslationSchema;

export type TranslationMessages = Partial<Record<MessagesGroupName, Record<string, unknown>>>;
