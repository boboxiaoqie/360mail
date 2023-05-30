import Ajax from "../bussiness/Ajax.js";
import Goods from "../component/Goods.js";
import Emitter from "../event/Emitter.js";
import ICommand from "../interface/ICommand.js";
import IGoods from "../interface/IGoods.js";
import IShopItem from "../interface/IShopItem.js";
import ViewModel from "../model/ViewModel.js";
import GoodsView from "../view/GoodsView.js";
import { AJAX_ROUTER } from "../vo/AjaxVo.js";
import { EmitterType } from "../vo/EmitterTypeVo.js";

export default class GoodsListCommand implements ICommand{
    constructor(){

    }
    public exec(data: IGoods[] | IShopItem[]): void {
        (data as IGoods[]).forEach((item:IGoods)=>{
            var goods:Goods=new Goods(item);
            goods.appendTo((ViewModel.instance.goodsView as GoodsView).getElem());
            goods.addEventListener(EmitterType.ADD_GOODS,(e:Emitter)=>this.addGoodsHandler(e))
        })
    }
    private addGoodsHandler(e:Emitter):void
    {
        Ajax.post(AJAX_ROUTER.ADD_GOODS,{pid:e.id,id:e.pid})
    }
}