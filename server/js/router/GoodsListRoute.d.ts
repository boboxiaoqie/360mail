/// <reference types="node" />
import { ServerResponse } from "http";
import { IRouterCommand } from "../vo/RouterVo";
export default class GoodsListRoute implements IRouterCommand {
    exec(data: any, res: ServerResponse): Promise<void>;
}
//# sourceMappingURL=GoodsListRoute.d.ts.map