import { Theme } from "../constants/theme";

export const isLocalStorageDark = () => localStorage.theme === Theme.DARK;

export const isThemeInLocalStorage = () => localStorage.theme !== undefined;

export const isPrefersDarkMode = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

export const getInitialTheme = () =>
  isLocalStorageDark() || (!isThemeInLocalStorage() && isPrefersDarkMode()) ? Theme.DARK : Theme.LIGHT;
