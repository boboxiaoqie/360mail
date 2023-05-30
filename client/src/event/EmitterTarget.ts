import Emitter from "./Emitter.js";
export interface IEventHandler{
    (e:Emitter):void;
}

// export default class EmitterTarget{
//     private list:{[key:string]:Array<IEventHandler|null>}={}
//     constructor(){

//     }

//     public addEventListener(type:string,handler:IEventHandler):void
//     {
//         // this.list[type]=handler;
//         // console.log(this.list)
//         if(!this.list[type]) this.list[type]=[];
//         if(this.list[type].includes(handler)) return;
//         this.list[type].push(handler);
//     }

//     public removeEventListener(type:string,handler:IEventHandler):void
//     {
//         if(!this.list[type]) return;
//         var index:number=this.list[type].indexOf(handler);
//         if(index<0) return;
//         // this.list[type].splice(index,1);
//         this.list[type][index]=null;
//     }

//     public dispatchEvent(evt:Emitter):void
//     {
//         // console.log(evt.type);
//         // console.log(this.list[evt.type])
//         // this.list[evt.type](evt);

//         for(var i=0;i<this.list[evt.type].length;i++){
//             if(this.list[evt.type][i]) (this.list[evt.type][i] as IEventHandler)(evt);
//         }
//         this.list[evt.type]=this.list[evt.type].filter((item:IEventHandler|null)=>item);
//     }
// }


export default class EmitterTarget{
    private list:{[key:string]:Set<IEventHandler>}={}
    constructor(){

    }

    public addEventListener(type:string,handler:IEventHandler):void
    {
        if(!this.list[type])this.list[type]=new Set();
        this.list[type].add(handler);
    }

    public removeEventListener(type:string,handler:IEventHandler):void
    {
        if(!this.list[type])return;
        if(this.list[type].has(handler)) this.list[type].delete(handler);
    }

    public dispatchEvent(evt:Emitter):void
    {
        if(!this.list[evt.type])return;
        evt.target=this;
        this.list[evt.type].forEach((item:IEventHandler)=>item.call(this,evt));
    }
}