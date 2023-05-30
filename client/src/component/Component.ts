import EmitterTarget from "../event/EmitterTarget.js";
import Utils from "../utils/Utils.js";
export default abstract class Component extends EmitterTarget{
    protected elem:HTMLElement;
    private static styleBool:boolean=false;
    constructor(type:string){
        super();
        this.elem=document.createElement(type);
    }
    public appendTo(parent:HTMLElement|string):HTMLElement
    {
        if (typeof parent === "string") parent = document.querySelector(parent) as HTMLElement;
        if (parent instanceof HTMLElement) parent.appendChild(this.elem);
        return parent;
    }

    public insertTo(parent:HTMLElement|string,nextElem:HTMLElement|string):HTMLElement
    {
        if (typeof parent === "string") parent = document.querySelector(parent) as HTMLElement;
        if (typeof nextElem === "string") nextElem = document.querySelector(nextElem) as HTMLElement;
        if(parent instanceof HTMLElement && nextElem instanceof HTMLElement) parent.insertBefore(this.elem,nextElem);
        return parent;
    }
    protected static setStyle(str:string){
        if(this.styleBool) return;
        this.styleBool=true;
        Utils.setCss(str);
    }
    abstract setCss():void;
}