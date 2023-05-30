import { ServerResponse } from "http";

enum RouterType{
    ADD_GOODS="/addgoods",
    GOODS_LIST="/goodslist",
    SHOPPING_LIST="/shoppinglist",
    REMOVE_GOODS="/removegoods",
    CHANGE_GOODS_NUM="/changegoodsnum",
    CHANGE_GOODS_SELECTED="/changegoodsselected"
}
export default RouterType;

export interface IRouterCommand{
    exec(data:any,res:ServerResponse):void;
}