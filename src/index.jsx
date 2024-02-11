import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");


// ReactDOM.createRoot(entryPoint).render(<App />);

// This code below is an example of how to avoid using the JSX syntax
// and use the React.createElement function instead.
// See the App used below is not a JSX tag, but a function call.

ReactDOM.createRoot(entryPoint).render(React.createElement(App));
