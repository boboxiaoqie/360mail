import ICommand from "../interface/ICommand.js";
import IGoods from "../interface/IGoods.js";
import IShopItem from "../interface/IShopItem.js";
export default class ShoppingListCommand implements ICommand {
    constructor();
    exec(data: IGoods[] | IShopItem[]): void;
}
//# sourceMappingURL=ShoppingListCommand.d.ts.map