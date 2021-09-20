import { createEvent, createStore } from 'effector';
import { Language } from 'root/entities/language';

export const currentLanguageIdChanged = createEvent<Language['id']>();
export const $currentLanguageId = createStore<Language['id'] | null>(null).on(
  currentLanguageIdChanged,
  (_, id) => id
);
