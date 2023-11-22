export enum dark {
  main = "#676878",
  secondary = "#F4F4FB",
  accent = "#545E63",
}
export enum light {
  main = "#EEF5FF",
  secondary = "#9EB8D9",
  accent = "#676878",
}

export const COLORS = { light, dark };

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
 * SCREENS PATHs
 */
export enum SCREENS {
  HOME = "Home",
  CHARACTER = "Character",
  CHARACTERS = "Characters",
  CUSTOM_CHARACTERS = "CustomCharacters",
  CUSTOM_CHARACTER = "CustomCharacter",
  ADD_CUSTOM_CHARACTER = "AddCustomCharacter",
}
