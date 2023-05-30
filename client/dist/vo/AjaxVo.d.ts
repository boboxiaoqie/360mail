import { IAjaxAddGoodsData, IAjaxChangeGoodsNumData, IAjaxChangeGoodsSelectedData, IAjaxRemoveGoodsData } from "../interface/IAjax";
export declare const BASE_URL: string;
export declare const PORT: number;
export type MethodType = "get" | "post";
export declare enum AJAX_ROUTER {
    ADD_GOODS = "/addgoods",
    GOODS_LIST = "/goodslist",
    SHOPPING_LIST = "/shoppinglist",
    REMOVE_GOODS = "/removegoods",
    CHANGE_GOODS_NUM = "/changegoodsnum",
    CHANGE_GOODS_SELECTED = "/changegoodsselected",
    ROOT = "/"
}
export type AjaxDataType = IAjaxAddGoodsData | IAjaxChangeGoodsNumData | IAjaxChangeGoodsSelectedData | IAjaxRemoveGoodsData;
//# sourceMappingURL=AjaxVo.d.ts.map