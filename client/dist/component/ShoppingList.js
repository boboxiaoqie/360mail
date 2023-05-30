import Emitter from "../event/Emitter.js";
import { EmitterType } from "../vo/EmitterTypeVo.js";
import Component from "./Component.js";
import StepNumber from "./StepNumber.js";
export default class ShoppingList extends Component {
    constructor() {
        super("table");
        this._data = [];
        this.elem.innerHTML = `
            <thead>
                <tr>
                    <th colspan='2'><input type='checkbox' class='all'>全选</th>
                    <th>商品</th>
                    <th></th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>小计</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        this.all = this.elem.querySelector(".all");
        this.tables = this.elem.querySelector("tbody");
        this.all.addEventListener("click", e => this.checkboxHandler(e));
    }
    set data(_data) {
        console.log(_data);
        this._data = _data;
        this.tables.innerHTML = "";
        this.all.checked = _data.every(item => item.selected);
        var elem = document.createDocumentFragment();
        for (var i = 0; i < _data.length; i++) {
            var tr = document.createElement("tr");
            for (var key in _data[i]) {
                if (key === "pid")
                    continue;
                var td = document.createElement("td");
                this.setTdContent(td, _data[i], key);
                tr.appendChild(td);
            }
            elem.appendChild(tr);
        }
        this.tables.appendChild(elem);
    }
    get data() {
        return this._data;
    }
    setTdContent(td, data, key) {
        switch (key) {
            case "selected":
                var ck = document.createElement("input");
                ck.type = "checkbox";
                ck.checked = data.selected;
                ck.setAttribute("ids", String(data.pid));
                ck.addEventListener("click", e => this.checkboxHandler(e));
                td.appendChild(ck);
                break;
            case "img":
                var img = new Image(80, 80);
                img.src = data.img;
                td.appendChild(img);
                break;
            case "price":
            case "total":
                td.textContent = Number(data[key]).toFixed(2);
                break;
            case "num":
                var step = new StepNumber();
                step.step = data.num;
                step.appendTo(td);
                step.id = data.pid;
                step.addEventListener("change", e => this.stepChangeHandler(e));
                break;
            case "deleted":
                var a = document.createElement("a");
                a.href = "javascript:void(0)";
                a.textContent = "删除";
                a.setAttribute("ids", String(data.pid));
                a.addEventListener("click", e => this.removeHandler(e));
                td.appendChild(a);
                break;
            default:
                td.textContent = String(data[key]);
        }
    }
    removeHandler(e) {
        var evt = new Emitter(EmitterType.REMOVE_GOODS);
        evt.id = e.target.getAttribute("ids");
        this.dispatchEvent(evt);
    }
    stepChangeHandler(e) {
        var evt = new Emitter(EmitterType.CHANGE_GOODS_NUM);
        evt.id = e.target.id;
        evt.num = e.target.step;
        this.dispatchEvent(evt);
    }
    checkboxHandler(e) {
        var evt = new Emitter(EmitterType.CHANGE_GOODS_SELECTED);
        if (e.target.className === "all") {
            evt.n = "all";
        }
        else {
            evt.n = 1;
            evt.id = Number(e.target.getAttribute("ids"));
        }
        evt.selected = e.target.checked;
        this.dispatchEvent(evt);
    }
    setCss() {
    }
}
//# sourceMappingURL=ShoppingList.js.map