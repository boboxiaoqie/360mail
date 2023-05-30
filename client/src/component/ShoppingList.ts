import Emitter from "../event/Emitter.js";
import IShopItem from "../interface/IShopItem.js";
import { EmitterType } from "../vo/EmitterTypeVo.js";
import Component from "./Component.js";
import StepNumber from "./StepNumber.js";

export default class ShoppingList extends Component{
    private tables:HTMLTableSectionElement
    private all:HTMLInputElement;
    private _data:Array<IShopItem>=[];
    constructor(){
        super("table");
        this.elem.innerHTML=`
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
        `
        this.all=this.elem.querySelector(".all") as HTMLInputElement;
        this.tables=this.elem.querySelector("tbody") as HTMLTableSectionElement; 
        this.all.addEventListener("click",e=>this.checkboxHandler(e));
    }

    public set data(_data:Array<IShopItem>){
        console.log(_data);
        this._data=_data;
        this.tables.innerHTML="";
        this.all.checked=_data.every(item=>item.selected);
        var elem:DocumentFragment=document.createDocumentFragment();
        for(var i=0;i<_data.length;i++){
            var tr:HTMLTableRowElement=document.createElement("tr");
           for(var key in _data[i]){
                if(key==="pid")continue;
                var td:HTMLTableCellElement=document.createElement("td");
                this.setTdContent(td,_data[i],key)
                tr.appendChild(td);
           }
            elem.appendChild(tr);
        }
        this.tables.appendChild(elem);
    }
    public get data():Array<IShopItem>
    {
        return this._data;
    }
    private setTdContent(td:HTMLTableCellElement,data:IShopItem,key:string):void{
        switch(key){
            case "selected":
                var ck:HTMLInputElement=document.createElement("input");
                ck.type="checkbox";
                ck.checked=data.selected;
                ck.setAttribute("ids",String(data.pid));
                ck.addEventListener("click",e=>this.checkboxHandler(e));
                td.appendChild(ck);
                break;
            case "img":
                var img=new Image(80,80);
                img.src=data.img;
                td.appendChild(img);
                break
            case "price":
            case "total":
                td.textContent=Number(data[key]).toFixed(2);
                break;
            case "num":
                var step=new StepNumber();
                step.step=data.num;
                step.appendTo(td);
                step.id=data.pid;
                step.addEventListener("change",e=>this.stepChangeHandler(e));
                break;
            case "deleted":
                var a:HTMLAnchorElement=document.createElement("a");
                a.href="javascript:void(0)"
                a.textContent="删除";
                a.setAttribute("ids",String(data.pid));
                a.addEventListener("click",e=>this.removeHandler(e));
                td.appendChild(a);
                break;
            default:
                td.textContent=String(data[key as  keyof IShopItem]);
        }
    }
    private removeHandler(e:MouseEvent):void{
        var evt:Emitter=new Emitter(EmitterType.REMOVE_GOODS);
        evt.id=(e.target as HTMLElement).getAttribute("ids");
        this.dispatchEvent(evt);
    }
    private stepChangeHandler(e:Emitter):void{
        var evt:Emitter=new Emitter(EmitterType.CHANGE_GOODS_NUM);
        evt.id=(e.target as StepNumber).id;
        evt.num=(e.target as StepNumber).step;
        this.dispatchEvent(evt);
    }
    private checkboxHandler(e:MouseEvent):void{
        var evt=new Emitter(EmitterType.CHANGE_GOODS_SELECTED);
        if((e.target as HTMLInputElement).className==="all"){
            evt.n="all";
        }else{
            evt.n=1;
            evt.id=Number((e.target as HTMLInputElement).getAttribute("ids"));
        }
        evt.selected=(e.target as HTMLInputElement).checked
        this.dispatchEvent(evt);
    }
    public setCss(): void {
        
    }
}