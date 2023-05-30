import Ajax from "../bussiness/Ajax.js";
import ShoppingListCommand from "../command/ShoppingListCommand.js";
import Component from "../component/Component.js";
import ShoppingList from "../component/ShoppingList.js";
import MainContorller from "../controller/MainController.js";
import Emitter from "../event/Emitter.js";
import IShopItem from "../interface/IShopItem.js";
import MainModel from "../model/MainModel.js";
import ViewModel from "../model/ViewModel.js";
import { AJAX_ROUTER } from "../vo/AjaxVo.js";
import { CommandType } from "../vo/CommandVo.js";
import { EmitterType } from "../vo/EmitterTypeVo.js";

export default class ShoppingView extends Component{
    constructor(){
        super("div");
        // var cartbox=document.querySelector(".cartbox") as HTMLElement;
        this.insertTo(".carlist",".bottom-box")
        // super.insertTo(cartbox);
        // this.appendTo("body");
        ViewModel.instance.shoppingView=this;
        ViewModel.instance.tableView=new ShoppingList();
        ViewModel.instance.tableView.appendTo(this.elem);
        ViewModel.instance.tableView.addEventListener(EmitterType.REMOVE_GOODS,(e:Emitter)=>this.removeHandler(e))
        ViewModel.instance.tableView.addEventListener(EmitterType.CHANGE_GOODS_NUM,(e:Emitter)=>this.changeGoodsNum(e))
        ViewModel.instance.tableView.addEventListener(EmitterType.CHANGE_GOODS_SELECTED,(e:Emitter)=>this.changeGoodsSelected(e))
        MainContorller.instance.addCommand(CommandType.SHOPPING_LIST_RENDER,ShoppingListCommand);
        console.log(AJAX_ROUTER);
        Ajax.get(AJAX_ROUTER.SHOPPING_LIST);
    }
    private removeHandler(e:Emitter){

        Ajax.post(AJAX_ROUTER.REMOVE_GOODS,{id:e.id})
    }
    private changeGoodsNum(e:Emitter){
        Ajax.post(AJAX_ROUTER.CHANGE_GOODS_NUM,{id:e.id,num:e.num});
    }
    private changeGoodsSelected(e:Emitter):void
    {
        var ids:Array<number>;
        if(e.n==="all"){
            ids=MainModel.instance.shoppingList.map((item:IShopItem)=>item.pid);
        }else{
            ids=[e.id];
        }
        Ajax.post(AJAX_ROUTER.CHANGE_GOODS_SELECTED,{ids:ids,selected:e.selected});
    }
    public setCss(): void {
        
    }
}