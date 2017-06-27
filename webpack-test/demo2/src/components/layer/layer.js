import  './layer.less';
import  './s1.scss';
import tpl from './layer.tpl';
import m1 from './m1.md';

function layer() {
    return {
        name: "layer",
        tpl: tpl,
        m1:m1
    }
}

export default layer;