import ICommand from "../interface/ICommand.js";
import IGoods from "../interface/IGoods";
import IShopItem from "../interface/IShopItem";
import { CommandType } from "../vo/CommandVo.js";
export default class MainContorller {
    private static _instance;
    private commandList;
    private constructor();
    static get instance(): MainContorller;
    addCommand<T extends ICommand>(type: CommandType, Command: {
        new (): T;
    }): void;
    removeCommand<T extends ICommand>(type: CommandType, Command: {
        new (): T;
    }): void;
    dispatch(type: CommandType, data: Array<IGoods> | Array<IShopItem>): void;
}
//# sourceMappingURL=MainController.d.ts.map