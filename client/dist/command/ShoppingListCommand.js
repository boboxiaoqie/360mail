import ViewModel from "../model/ViewModel.js";
export default class ShoppingListCommand {
    constructor() {
    }
    exec(data) {
        // console.log(data);
        ViewModel.instance.tableView.data = data;
    }
}
//# sourceMappingURL=ShoppingListCommand.js.map