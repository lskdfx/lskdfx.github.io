import { createStore } from "dreamland/core";
import { flavorList, colorKeys } from "./themes";

export const themeStore = createStore(
  {
    flavorIndex: 0,
    accentKey: "mauve" as string,
    showAccentPicker: false
  },
  { ident: "catppuccin-state", backing: "localstorage", autosave: "auto" }
);

export function applyThemeColors() {
  const root = document.documentElement;
  const currentFlavor = flavorList[themeStore.flavorIndex];
  if (!currentFlavor) return;

  const colorSpec = currentFlavor.colors;

  colorKeys.forEach((key) => {
    const { r, g, b } = colorSpec[key].rgb;
    root.style.setProperty(`--${key}-raw`, `${r}, ${g}, ${b}`);
  });

  const selectedAccent = colorSpec[themeStore.accentKey as keyof typeof colorSpec] || colorSpec.mauve;
  const { r, g, b } = selectedAccent.rgb;
  root.style.setProperty("--accent-raw", `${r}, ${g}, ${b}`);
}

use(themeStore.flavorIndex).listen(applyThemeColors);
use(themeStore.accentKey).listen(applyThemeColors);

applyThemeColors();
