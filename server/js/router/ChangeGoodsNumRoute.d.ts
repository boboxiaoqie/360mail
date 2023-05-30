/// <reference types="node" />
import { ServerResponse } from "http";
import { IRouterCommand } from "../vo/RouterVo";
export default class ChangeGoodsNumRoute implements IRouterCommand {
    exec(data: any, res: ServerResponse): Promise<void>;
}
//# sourceMappingURL=ChangeGoodsNumRoute.d.ts.map