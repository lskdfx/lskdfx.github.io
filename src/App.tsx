import { type Component } from "dreamland/core";
import { Router, Route, router } from "dreamland/router";
import { Layout } from "./components/Layout.tsx";
import { Home } from "./pages/Home.tsx";
import { About } from "./pages/About.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import "./style.css";
export const App: Component = function (cx) {
  cx.mount = () => {
    router.route(location.pathname);
  };
  return (
    <Layout>
      <div class="app">
        <Router>
          <Route path="" show={() => <Home />} />
          <Route path="about" show={() => <About />} />
          {/*<Route path="projects" show={() => <Projects />} /> */}
          <Route path="*" show={() => <NotFound />} />
        </Router>
      </div>
    </Layout>

  )
}

document.getElementById("app")!.replaceWith(<App />);
