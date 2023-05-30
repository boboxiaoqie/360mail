import ShoppingList from "../component/ShoppingList.js";
import GoodsView from "../view/GoodsView.js";
import ShoppingView from "../view/ShoppingView.js";
export default class ViewModel {
    private static _instance;
    goodsView?: GoodsView;
    shoppingView?: ShoppingView;
    tableView?: ShoppingList;
    private constructor();
    static get instance(): ViewModel;
}
//# sourceMappingURL=ViewModel.d.ts.map