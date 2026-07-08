import { type Component, type ComponentChild } from "dreamland/core";
import { themeStore } from "../lib/store";
import { flavorList, accents } from "../lib/themes";

type FlavorColors = typeof flavorList[number]["colors"];

type LayoutProps = { children: ComponentChild };
type LayoutState = {
  showAccentPicker: boolean;
  currentFlavorName: string;
  currentFlavorColors: FlavorColors | undefined;
};

export const Layout: Component<LayoutProps, LayoutState> = function (cx) {
  this.showAccentPicker = false;
  this.currentFlavorName = flavorList[themeStore.flavorIndex]?.name || "Mocha";
  this.currentFlavorColors = flavorList[themeStore.flavorIndex]?.colors;

  const cycleFlavor = () => {
    themeStore.flavorIndex = (themeStore.flavorIndex + 1) % flavorList.length;
    this.currentFlavorName = flavorList[themeStore.flavorIndex].name;
    this.currentFlavorColors = flavorList[themeStore.flavorIndex].colors;
  };

  const selectAccent = (key: string) => {
    themeStore.accentKey = key;
    this.showAccentPicker = false;
  };

  return (
    <div class="layout">
      <nav class="nav">
        <div class="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
        </div>
        <div class="theme-controls" style="position: relative; display: flex; gap: 0.5rem;">
          <button class="ctrl-btn" on:click={cycleFlavor}>
            {use(this.currentFlavorName)}
          </button>
          <button class="ctrl-btn" on:click={() => (this.showAccentPicker = !this.showAccentPicker)}>
            Accent
          </button>
          {use(this.showAccentPicker).andThen(
            <div class="accent-grid">
              {accents.map((key: string) => {
                const colorHex = this.currentFlavorColors?.[key as keyof FlavorColors]?.hex || "#ffffff";
                return (
                  <button
                    class={`color-dot ${themeStore.accentKey === key ? "active" : ""}`}
                    style={`background-color: ${colorHex};`}
                    title={key}
                    on:click={() => selectAccent(key)}
                  />
                );
              })}
            </div>,
            null
          )}
        </div>
      </nav>
      <main class="content">
        {cx.children}
      </main>
      <footer class="footer">
        <p>&copy; 2026 Adit - built with Vite and dreamland.js</p>
      </footer>
    </div>
  );
};
