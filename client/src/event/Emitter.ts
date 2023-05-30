import EmitterTarget from "./EmitterTarget";

export default class Emitter{
    public type:string;
    public target?:EmitterTarget;
    [prop:string]:any;
    constructor(type:string){
        this.type=type;
    }
}