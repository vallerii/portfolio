import type { Locale } from './config';
import en, { type Dictionary } from './dictionaries/en';
import uk from './dictionaries/uk';

const dictionaries: Record<Locale, Dictionary> = { en, uk };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
export type { Dictionary };

/** Replace {key} placeholders */
export const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (_, k: string) => values[k] ?? '');
