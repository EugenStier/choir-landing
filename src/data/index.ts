import { ru } from './ru'
import { de } from './de'

export const translations = {
  ru,
  de,
}

export type Language = keyof typeof translations