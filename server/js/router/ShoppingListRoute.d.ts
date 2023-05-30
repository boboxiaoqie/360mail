/// <reference types="node" />
import { ServerResponse } from "http";
import { IRouterCommand } from "../vo/RouterVo";
export default class ShoppingListRoute implements IRouterCommand {
    exec(data: any, res: ServerResponse): Promise<void>;
}
//# sourceMappingURL=ShoppingListRoute.d.ts.map