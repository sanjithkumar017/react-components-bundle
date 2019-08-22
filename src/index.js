import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "../public/css/main.scss";

const App = () => {
  return (
    <StrictMode>
        <div>Hello World!</div>
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
