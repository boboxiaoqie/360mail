import ShoppingList from "../component/ShoppingList.js";
import ICommand from "../interface/ICommand.js";
import IGoods from "../interface/IGoods.js";
import IShopItem from "../interface/IShopItem.js";
import ViewModel from "../model/ViewModel.js";

export default class ShoppingListCommand implements ICommand
{
    constructor(){

    }
    public exec(data: IGoods[] | IShopItem[]): void {
        // console.log(data);
        (ViewModel.instance.tableView as ShoppingList).data=data as Array<IShopItem>;
    }
}