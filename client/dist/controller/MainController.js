export default class MainContorller {
    constructor() {
        this.commandList = {};
    }
    static get instance() {
        return MainContorller._instance || (MainContorller._instance = new MainContorller());
    }
    addCommand(type, Command) {
        if (!this.commandList[type])
            this.commandList[type] = new Set();
        this.commandList[type].add(Command);
    }
    removeCommand(type, Command) {
        if (!this.commandList[type])
            return;
        if (this.commandList[type].has(Command))
            this.commandList[type].delete(Command);
    }
    dispatch(type, data) {
        if (!this.commandList[type])
            return;
        this.commandList[type].forEach((Command) => new Command().exec(data));
    }
}
//# sourceMappingURL=MainController.js.map