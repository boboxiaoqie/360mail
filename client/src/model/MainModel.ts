import MainContorller from "../controller/MainController.js";
import IGoods from "../interface/IGoods.js";
import IShopItem from "../interface/IShopItem";
import { CommandType } from "../vo/CommandVo.js";

export default class MainModel{
    private static _instance:MainModel;
    private _goodsList:Array<IGoods>=[];
    private _shoppingList:Array<IShopItem>=[];
    private constructor(){

    }
    public static get instance():MainModel{
        return this._instance || (this._instance=new MainModel())
    }
    public set goodsList(value:Array<IGoods>){
        this._goodsList=value;
        MainContorller.instance.dispatch(CommandType.GOODS_LIST_RENDER,value);
    }
    public get goodsList():Array<IGoods>{
        return this._goodsList;
    }
    public set shoppingList(value:Array<IShopItem>){
        this._shoppingList=value;
        MainContorller.instance.dispatch(CommandType.SHOPPING_LIST_RENDER,value);
    }
    public get shoppingList():Array<IShopItem>{
        return this._shoppingList;
    }
}