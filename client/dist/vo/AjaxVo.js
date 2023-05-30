export const BASE_URL = "http://localhost";
export const PORT = 4001;
export var AJAX_ROUTER;
(function (AJAX_ROUTER) {
    AJAX_ROUTER["ADD_GOODS"] = "/addgoods";
    AJAX_ROUTER["GOODS_LIST"] = "/goodslist";
    AJAX_ROUTER["SHOPPING_LIST"] = "/shoppinglist";
    AJAX_ROUTER["REMOVE_GOODS"] = "/removegoods";
    AJAX_ROUTER["CHANGE_GOODS_NUM"] = "/changegoodsnum";
    AJAX_ROUTER["CHANGE_GOODS_SELECTED"] = "/changegoodsselected";
    AJAX_ROUTER["ROOT"] = "/";
})(AJAX_ROUTER || (AJAX_ROUTER = {}));
//# sourceMappingURL=AjaxVo.js.map