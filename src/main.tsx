import { css, type Component} from "dreamland/core";

let App: Component<{}> = function () {
  return (
    <div>
      <h1>Hello lmao</h1>
    </div>
  );
};
App.style = css`
    :scope {
      padding: 0 1rem;
    }
`;

document.querySelector("#app")!.replaceWith(<App />);
