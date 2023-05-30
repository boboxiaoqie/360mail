import IShopItem from "../interface/IShopItem.js";
import Component from "./Component.js";
export default class ShoppingList extends Component {
    private tables;
    private all;
    private _data;
    constructor();
    set data(_data: Array<IShopItem>);
    get data(): Array<IShopItem>;
    private setTdContent;
    private removeHandler;
    private stepChangeHandler;
    private checkboxHandler;
    setCss(): void;
}
//# sourceMappingURL=ShoppingList.d.ts.map