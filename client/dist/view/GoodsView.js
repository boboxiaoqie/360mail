import Ajax from "../bussiness/Ajax.js";
import GoodsListCommand from "../command/GoodsListCommand.js";
import Component from "../component/Component.js";
import MainContorller from "../controller/MainController.js";
import ViewModel from "../model/ViewModel.js";
import { AJAX_ROUTER } from "../vo/AjaxVo.js";
import { CommandType } from "../vo/CommandVo.js";
export default class GoodsView extends Component {
    constructor() {
        super("div");
        this.appendTo("tbody");
        ViewModel.instance.goodsView = this;
        MainContorller.instance.addCommand(CommandType.GOODS_LIST_RENDER, GoodsListCommand);
        Ajax.get(AJAX_ROUTER.GOODS_LIST);
    }
    getElem() {
        return this.elem;
    }
    setCss() {
    }
}
//# sourceMappingURL=GoodsView.js.map