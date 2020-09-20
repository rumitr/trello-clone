import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AppStateProvider } from "./AppStateContext";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </DndProvider>,
  document.getElementById("root")
);
