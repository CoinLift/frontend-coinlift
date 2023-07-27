import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

import "_styles/index.scss";
import "normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter basename="/frontend-coinlift">
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
