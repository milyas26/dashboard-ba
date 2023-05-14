import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./../public/assets/css/bootstrap.min.css";
import "./../public/assets/css/beyond.css";
import "./../public/assets/css/font-awesome.min.css";
import "./../public/assets/css/weather-icons.min.css";
import "./../public/assets/css/demo.min.css";
import "./../public/assets/css/typicons.min.css";
import "./../public/assets/css/animate.min.css";
import 'rsuite/dist/rsuite.min.css';

import { Providers } from "./redux/provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
