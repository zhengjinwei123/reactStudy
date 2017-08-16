let Koa = require("koa");
let app = new Koa();
let serve = require('koa-static');

app.use(serve(__dirname+"/public/"));

let router  = require("koa-router")();

let homeAdData = require("./home/ad.js");
router.get("/api/homead",function *(next){
    this.body = homeAdData;
});

let homeListData = require("./home/list.js");
router.get("/api/homelist/:city/:page",function *(next){
    const params = this.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    this.body = homeListData;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);