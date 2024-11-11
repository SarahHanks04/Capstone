import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CapstoneProvider from "./Context/CapstoneContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CapstoneProvider>
      <App />
    </CapstoneProvider>
  </React.StrictMode>
);
