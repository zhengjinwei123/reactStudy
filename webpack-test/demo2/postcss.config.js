const path = require("path");
module.exports =   {
    plugins: [require("autoprefixer")({
        browsers: ["last 5 versions"]
    })]
};