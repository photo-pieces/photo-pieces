import React from "react";
import ReactDOM from "react-dom";

import * as BrowserRouter from "react-router-dom/es/BrowserRouter";
import * as ServiceWorker from "./App/utils/service-worker";
import App from "./App";

const Router = BrowserRouter.default;
const Main = App(Router);
ReactDOM.render(<Main/>, document.getElementById("root"));
ServiceWorker.register();
