import React from "react";
import { render } from "react-dom";
const App = () => {
  return <div>React Component</div>;
};

render(React.createElement(App), document.getElementById("root"));
