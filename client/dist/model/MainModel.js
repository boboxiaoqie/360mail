import MainContorller from "../controller/MainController.js";
import { CommandType } from "../vo/CommandVo.js";
export default class MainModel {
    constructor() {
        this._goodsList = [];
        this._shoppingList = [];
    }
    static get instance() {
        return this._instance || (this._instance = new MainModel());
    }
    set goodsList(value) {
        this._goodsList = value;
        MainContorller.instance.dispatch(CommandType.GOODS_LIST_RENDER, value);
    }
    get goodsList() {
        return this._goodsList;
    }
    set shoppingList(value) {
        this._shoppingList = value;
        MainContorller.instance.dispatch(CommandType.SHOPPING_LIST_RENDER, value);
    }
    get shoppingList() {
        return this._shoppingList;
    }
}
//# sourceMappingURL=MainModel.js.map