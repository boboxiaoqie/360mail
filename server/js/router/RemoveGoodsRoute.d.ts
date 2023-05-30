/// <reference types="node" />
import { ServerResponse } from "http";
import { IRouterCommand } from "../vo/RouterVo";
export default class RemoveGoodsRoute implements IRouterCommand {
    exec(data: any, res: ServerResponse): Promise<void>;
}
//# sourceMappingURL=RemoveGoodsRoute.d.ts.map