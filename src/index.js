import React from "react";
import ReactDOM from "react-dom";

import * as ServiceWorker from "./utils/service-worker";
import Main from "./main";

ReactDOM.render(<Main />, document.getElementById("root"));
ServiceWorker.register();
