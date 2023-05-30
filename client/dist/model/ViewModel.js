export default class ViewModel {
    constructor() {
    }
    static get instance() {
        return this._instance || (this._instance = new ViewModel());
    }
}
//# sourceMappingURL=ViewModel.js.map