import './css/common.css';
import Layer from './components/layer/layer.js';

const App = function () {
    let dom = document.getElementById("app");
    let layer = new Layer();
    dom.innerHTML = layer.tpl({
        name:'zjw',
        arr:["apple","xiaomi","oppo"],
        m1: layer.m1
    });
};

let app = new App();
