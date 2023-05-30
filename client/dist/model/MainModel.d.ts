import IGoods from "../interface/IGoods.js";
import IShopItem from "../interface/IShopItem";
export default class MainModel {
    private static _instance;
    private _goodsList;
    private _shoppingList;
    private constructor();
    static get instance(): MainModel;
    set goodsList(value: Array<IGoods>);
    get goodsList(): Array<IGoods>;
    set shoppingList(value: Array<IShopItem>);
    get shoppingList(): Array<IShopItem>;
}
//# sourceMappingURL=MainModel.d.ts.map