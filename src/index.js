import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import packageJson from './../package.json';
import * as ServiceWorker from "./utils/service-worker";
import Main from "./main";

ReactDOM.render(<Main />, document.getElementById("root"));
ServiceWorker.register();

setInterval(() => {
    axios.get('/api/v1/version', {
        params: {
            version: packageJson.version
        }
    })
    .then((response) => {
    })
    .catch(function(error){
        if (error.response) {
            if(error.response.status == 400){
                window.location.reload()
            }
        }
    });
}, 30000);