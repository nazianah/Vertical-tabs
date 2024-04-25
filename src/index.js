
import React from "react";
import ReactDOM from "react-dom";

import NewNavigation from "./components/NewNavigation.js";

import "react-web-tabs/dist/react-web-tabs.css";
import "./App.css";

function App() {
  return <NewNavigation />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
