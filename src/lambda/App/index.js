/* Express App */
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import compression from "compression";
import customLogger from "./utils/logger";

import React from "react";
import { renderToString } from "react-dom/server";
import ScoreBoard from './../../App/Routes/ScoreBoard';
const Html = ({ body, styles, title }) => {
  const stylesheet = styles ? `<style>${styles}</style>` : "";
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        ${stylesheet}
      </head>
      <body style="margin:0">
        <div id="root">${body}</div>
      </body>
    </html>
  `;
};
/* My express App */
export default function expressApp(functionName) {
  const app = express();
  const router = express.Router();

  // gzip responses
  router.use(compression());

  // Set router base path for local dev
  const routerBasePath = process.env.NODE_ENV === "development" ? `/${functionName}` : `/.netlify/functions/${functionName}`;
  console.log({ routerBasePath,NODE_ENV:process.env.NODE_ENV });
  /* define routes */
  router.get("/share-card", (req, res) => {
    const props={ location:{
        state:{},
      }, history:{replace:()=>{}} }
    const reactAppHtml = renderToString(<ScoreBoard {...props} />);
    console.log(reactAppHtml);
    const html = Html({ title: "Play Photo Pieces", body: reactAppHtml });
    res.send(html);
  });

  router.get("/ping", function(req, res) {
    res.send("pong");
  });

  // Attach logger
  app.use(morgan(customLogger));

  // Setup routes
  app.use(routerBasePath, router);

  // Apply express middlewares
  router.use(cors());
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));

  return app;
}
