import ICommand from "../interface/ICommand.js";
import IGoods from "../interface/IGoods.js";
import IShopItem from "../interface/IShopItem.js";
export default class GoodsListCommand implements ICommand {
    constructor();
    exec(data: IGoods[] | IShopItem[]): void;
    private addGoodsHandler;
}
//# sourceMappingURL=GoodsListCommand.d.ts.map