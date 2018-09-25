import React from "react";
import ReactDOM from "react-dom";

import * as BrowserRouter from "react-router-dom/es/BrowserRouter";
import * as ServiceWorker from "./App/utils/service-worker";
import Main from "./App/main";

const Router = BrowserRouter.default;
const App = Main(Router);
ReactDOM.render(<App />, document.getElementById("root"));
ServiceWorker.register();
