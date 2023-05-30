import Emitter from "../event/Emitter.js";
import Component from "./Component.js";
export default class StepNumber extends Component {
    constructor() {
        super("div");
        this._step = 1;
        this.elem.innerHTML = `
            <button>-</button>
            <input type='text'>
            <button>+</button>
        `;
        this.elem.className = "step";
        this.input = this.elem.querySelector("input");
        this.setCss();
        this.elem.addEventListener("click", e => this.clickHandler(e));
        this.elem.addEventListener("input", e => this.inputHandler(e));
        this.step = 1;
    }
    clickHandler(e) {
        var bn = e.target;
        if (bn.nodeName !== "BUTTON")
            return;
        if (bn.textContent === "-") {
            this.step--;
        }
        else {
            this.step++;
        }
        this.dispatch();
    }
    inputHandler(e) {
        if (this.ids)
            return;
        this.ids = setTimeout(() => {
            clearTimeout(this.ids);
            this.ids = 0;
            this.input.value = this.input.value.replace(/\D/g, "");
            this.step = Number(this.input.value);
            this.dispatch();
        }, 500);
    }
    dispatch() {
        var evt = new Emitter("change");
        evt.step = this._step;
        this.dispatchEvent(evt);
    }
    set step(value) {
        value = ~~value;
        this.elem.firstElementChild.disabled = false;
        this.elem.lastElementChild.disabled = false;
        if (value <= 1) {
            value = 1;
            this.elem.firstElementChild.disabled = true;
        }
        else if (value >= 99) {
            value = 99;
            this.elem.lastElementChild.disabled = true;
        }
        this._step = value;
        this.input.value = String(value);
    }
    get step() {
        return this._step;
    }
    setCss() {
        StepNumber.setStyle(` .step{
            display: flex;
        }
        .step>button{
            width: 17px;
            height: 20px;
            padding: 0;
            margin: 0;
            border: 1px solid #ccc;
        }
        .step>input{
            width: 46px;
            height: 18px;
            border: none;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            outline: none;
            margin: 0;
            padding: 0;
            text-align: center;
        }`);
    }
}
//# sourceMappingURL=StepNumber.js.map