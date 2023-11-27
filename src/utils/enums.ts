enum dark {
  main = "#676878",
  secondary = "#F4F4FB",
  accent = "#545E63",
}

enum light {
  main = "#EEF5FF",
  secondary = "#9EB8D9",
  accent = "#676878",
}

enum commons {
  green = "#0ac670",
  red = "#ff5067",
  white = "#fafafa",
  black = "#010101",
}

export const COLORS = { light, dark, commons };

/**
 * Characters status color
 */
export enum STATUS_COLOR {
  "Alive" = "#0ac670",
  "Dead" = "#ff5067",
  "unknown" = "#c0a6fb",
}

/**
 * Characters status type
 */
export enum STATUS {
  alive = "Alive",
  dead = "Dead",
  unknown = "unknown",
}

/**
 * Characters status type
 */
export enum GENDER_ICON {
  male = "gender-male",
  female = "gender-female",
  unknown = "account-question",
}

/**
 * SCREENS PATHs
 */
export enum SCREENS {
  HOME = "Home",
  CHARACTER = "Character",
  CHARACTERS = "Characters",
  CUSTOM_CHARACTERS = "CustomCharacters",
  CUSTOM_CHARACTER = "CustomCharacter",
  FORM_CUSTOM_CHARACTER = "FormCustomCharacter",
}
