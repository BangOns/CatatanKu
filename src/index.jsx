import React from "react";
import { createRoot } from "react-dom/client";

// import style
import "./styles/style.css";
import QuotesApp from "./components/NotesApp";
const root = createRoot(document.getElementById("root"));
root.render(<QuotesApp />);
