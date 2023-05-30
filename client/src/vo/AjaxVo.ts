import { IAjaxAddGoodsData, IAjaxChangeGoodsNumData, IAjaxChangeGoodsSelectedData, IAjaxRemoveGoodsData } from "../interface/IAjax";

export const BASE_URL:string="http://localhost";
export const PORT:number=4001;
export type MethodType="get" | "post";
export enum AJAX_ROUTER{
    ADD_GOODS="/addgoods",
    GOODS_LIST="/goodslist",
    SHOPPING_LIST="/shoppinglist",
    REMOVE_GOODS="/removegoods",
    CHANGE_GOODS_NUM="/changegoodsnum",
    CHANGE_GOODS_SELECTED="/changegoodsselected",
    ROOT="/"
}
export type AjaxDataType=IAjaxAddGoodsData | IAjaxChangeGoodsNumData | IAjaxChangeGoodsSelectedData | IAjaxRemoveGoodsData;