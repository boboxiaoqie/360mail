/// <reference types="node" />
import { ServerResponse } from "http";
import RouterVo, { IRouterCommand } from "../vo/RouterVo";
export default class RouterMain {
    private static _instance;
    private list;
    private constructor();
    static get instance(): RouterMain;
    addRouter<T extends IRouterCommand>(type: RouterVo, Command: {
        new (): T;
    }): void;
    router(res: ServerResponse, type: RouterVo, data: any): void;
}
//# sourceMappingURL=RouterMain.d.ts.map