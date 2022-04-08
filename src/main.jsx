import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends React.Component {
  render() {
    return (
      <>
        <App />
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root"),
);
