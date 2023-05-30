import ShoppingList from "../component/ShoppingList.js";
import GoodsView from "../view/GoodsView.js";
import ShoppingView from "../view/ShoppingView.js";

export default class ViewModel{
    private static _instance:ViewModel;
    public goodsView?:GoodsView
    public shoppingView?:ShoppingView;
    public tableView?:ShoppingList;
    private constructor(){

    }
    public static get instance():ViewModel{
        return this._instance || (this._instance=new ViewModel())
    }
}