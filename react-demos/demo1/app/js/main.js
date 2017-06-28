let React = require("react");
let ReactDom = require("react-dom");
let UserApp = require("./containers/userListApp");

let maiComponent = ReactDom.render(
    <UserApp/>,
    document.getElementById("app")
);