import IGoods from "./IGoods.js";
import IShopItem from "./IShopItem.js";

export default interface ICommand{
    exec(data:Array<IGoods>|Array<IShopItem>):void;
}