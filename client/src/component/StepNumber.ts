import Emitter from "../event/Emitter.js";
import Component from "./Component.js";

export default class StepNumber extends Component {
    private input:HTMLInputElement
    private _step:number = 1;
    private ids?:number;
    public id?:number
    constructor() {
        super("div")
        this.elem.innerHTML = `
            <button>-</button>
            <input type='text'>
            <button>+</button>
        `
        this.elem.className = "step";
        this.input = this.elem.querySelector("input") as HTMLInputElement;
        this.setCss();
        this.elem.addEventListener("click", e => this.clickHandler(e))
        this.elem.addEventListener("input", e => this.inputHandler(e));
        this.step=1;
    }
    private clickHandler(e:MouseEvent):void {
        var bn:HTMLButtonElement=e.target as HTMLButtonElement;
        if (bn.nodeName !== "BUTTON") return;
        if (bn.textContent === "-") {
            this.step--;
        } else {
            this.step++;
        }
        this.dispatch();
    }
    private inputHandler(e:Event):void {
        if (this.ids) return;
        this.ids = setTimeout(() => {
            clearTimeout(this.ids);
            this.ids = 0;
            this.input.value = this.input.value.replace(/\D/g, "");
            this.step=Number(this.input.value);
            this.dispatch();
        }, 500);
    }
    private dispatch():void{
        var evt=new Emitter("change");
        evt.step=this._step;
        this.dispatchEvent(evt);
    }
    public set step(value) {
        value = ~~value;
        (this.elem.firstElementChild as HTMLButtonElement).disabled = false;
        (this.elem.lastElementChild as HTMLButtonElement).disabled = false;
        if (value <= 1) {
            value = 1;
            (this.elem.firstElementChild as HTMLButtonElement).disabled = true;
        } else if (value >= 99) {
            value = 99;
            (this.elem.lastElementChild as HTMLButtonElement).disabled = true;
        }
        this._step = value;
        this.input.value = String(value);
    }
    public get step():number{
        return this._step;
    }
    public setCss():void {
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
        }`)
    }
}