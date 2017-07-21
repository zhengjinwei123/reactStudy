"use strict";

let Path = require("path");
let Express = require("express");
let Favicon = require("serve-favicon");
let WebpackDevMiddleware = require("webpack-dev-middleware");
let WebpackHotMiddleware = require("webpack-hot-middleware");

let App = Express();
let Port = 3000;

App.use(Favicon(Path.join(__dirname + "/favicon.ico")));
App.use("static", Express.static(Path.join(__dirname, "/static")));


let Webpack = require("webpack");
let WebpackConfig = require("./webpack.config");
let Compiler = Webpack(WebpackConfig);

App.use(WebpackDevMiddleware(Compiler, {
    noInfo: true, publicPath: WebpackConfig.output.publicPath
}));

App.use(WebpackHotMiddleware(Compiler, {
    log: console.log, path: "/__webpack_hmr",
    heartbeat: 10 * 1000
}));


App.get("*", function (req, res) {
    res.sendFile(Path.join(__dirname, "index.html"));
});

App.listen(Port, "localhost", function (error) {
    if (!error) {
        console.info("==> server already listen on port %s", Port);
    } else {
        console.error(error);
    }
});