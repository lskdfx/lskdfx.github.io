import { type Component } from "dreamland/core";
import { Layout } from "./components/Layout.tsx";
import "./style.css"; 
export const App: Component = function () {
  return (
    <Layout>
      <h1>Hi! I'm Adit</h1>
    </Layout>
  )
}

document.getElementById("app")!.replaceWith(<App />);
