import React from "react";
import ReactDOM from "react-dom/client";
import UseEffectCleanUp from "./UseEffectCleanUp";
import App from "./App";
import Self from "./Self";
import ToDoList from "./ToDoList";
import CoinTracker from "./CoinTracker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <CoinTracker />
    // </React.StrictMode>
);
