import { countryCodes } from "@/keyboardMappings";

import { KeyboardLayout, KeyCombo } from "../keyboardLayouts"

import { chars as chars_en_US } from "./en_US"

export const chars = {
  ...chars_en_US,
  "\"": { key: "Digit2", shift: true },
  "£": { key: "Digit3", shift: true },
  "€": { key: "Digit4", altRight: true },
  '@': { key: "Quote", shift: true },
  "#": { key: "Backslash" },
  "~": { key: "Backslash", shift: true },
  "¬": { key: "Backquote", shift: true },
  "\\": { key: "IntlBackslash" },
  "|": { key: "IntlBackslash", shift: true },
} as Record<string, KeyCombo>;

export const en_UK: KeyboardLayout = {
  isoCode: "en-UK",
  name: "English (UK)",
  countryCode: countryCodes.UnitedKingdom,
  chars
};
