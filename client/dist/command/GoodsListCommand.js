import Ajax from "../bussiness/Ajax.js";
import Goods from "../component/Goods.js";
import ViewModel from "../model/ViewModel.js";
import { AJAX_ROUTER } from "../vo/AjaxVo.js";
import { EmitterType } from "../vo/EmitterTypeVo.js";
export default class GoodsListCommand {
    constructor() {
    }
    exec(data) {
        data.forEach((item) => {
            var goods = new Goods(item);
            goods.appendTo(ViewModel.instance.goodsView.getElem());
            goods.addEventListener(EmitterType.ADD_GOODS, (e) => this.addGoodsHandler(e));
        });
    }
    addGoodsHandler(e) {
        Ajax.post(AJAX_ROUTER.ADD_GOODS, { pid: e.id, id: e.pid });
    }
}
//# sourceMappingURL=GoodsListCommand.js.map