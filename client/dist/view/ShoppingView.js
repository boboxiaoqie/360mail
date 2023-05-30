import Ajax from "../bussiness/Ajax.js";
import ShoppingListCommand from "../command/ShoppingListCommand.js";
import Component from "../component/Component.js";
import ShoppingList from "../component/ShoppingList.js";
import MainContorller from "../controller/MainController.js";
import MainModel from "../model/MainModel.js";
import ViewModel from "../model/ViewModel.js";
import { AJAX_ROUTER } from "../vo/AjaxVo.js";
import { CommandType } from "../vo/CommandVo.js";
import { EmitterType } from "../vo/EmitterTypeVo.js";
export default class ShoppingView extends Component {
    constructor() {
        super("div");
        // var cartbox=document.querySelector(".cartbox") as HTMLElement;
        this.insertTo(".carlist", ".bottom-box");
        // super.insertTo(cartbox);
        // this.appendTo("body");
        ViewModel.instance.shoppingView = this;
        ViewModel.instance.tableView = new ShoppingList();
        ViewModel.instance.tableView.appendTo(this.elem);
        ViewModel.instance.tableView.addEventListener(EmitterType.REMOVE_GOODS, (e) => this.removeHandler(e));
        ViewModel.instance.tableView.addEventListener(EmitterType.CHANGE_GOODS_NUM, (e) => this.changeGoodsNum(e));
        ViewModel.instance.tableView.addEventListener(EmitterType.CHANGE_GOODS_SELECTED, (e) => this.changeGoodsSelected(e));
        MainContorller.instance.addCommand(CommandType.SHOPPING_LIST_RENDER, ShoppingListCommand);
        console.log(AJAX_ROUTER);
        Ajax.get(AJAX_ROUTER.SHOPPING_LIST);
    }
    removeHandler(e) {
        Ajax.post(AJAX_ROUTER.REMOVE_GOODS, { id: e.id });
    }
    changeGoodsNum(e) {
        Ajax.post(AJAX_ROUTER.CHANGE_GOODS_NUM, { id: e.id, num: e.num });
    }
    changeGoodsSelected(e) {
        var ids;
        if (e.n === "all") {
            ids = MainModel.instance.shoppingList.map((item) => item.pid);
        }
        else {
            ids = [e.id];
        }
        Ajax.post(AJAX_ROUTER.CHANGE_GOODS_SELECTED, { ids: ids, selected: e.selected });
    }
    setCss() {
    }
}
//# sourceMappingURL=ShoppingView.js.map