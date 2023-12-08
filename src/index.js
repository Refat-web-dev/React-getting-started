import React from "react"
import * as  ReactDOMClient from "react-dom/client"
import SomeLayout from "./App";
import "./css/style.css"

const rootElement = ReactDOMClient.createRoot(document.querySelector("#root"));

rootElement.render(<SomeLayout />);
