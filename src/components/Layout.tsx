import { type Component, type ComponentChild } from "dreamland/core";

export const Layout: Component<{ children: ComponentChild }> = function (cx) {
  return (
    <div class="layout">
      <nav class="nav">
        <a href="/" class="logo">me</a>
        <div class="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
        </div>
      </nav>
      <main class="content">
        {cx.children}
      </main>
      <footer class="footer">
        <p>&copy; 2026 Adit - built with Vite and dreamland.js</p>
      </footer>
    </div>
  )
}
