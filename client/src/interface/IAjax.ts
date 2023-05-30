import { MethodType } from "../vo/AjaxVo.js";

export interface IAjaxOption{
    method:MethodType;
    body?:string;
    header?:{[key:string]:string};
}

export interface IAjaxAddGoodsData{
    pid:number;
    id:number;
}

export interface IAjaxRemoveGoodsData{
    id:number;
}

export interface IAjaxChangeGoodsNumData{
    id:number;
    num:number;
}

export interface IAjaxChangeGoodsSelectedData{
    ids:Array<number>;
    selected:boolean;
}
