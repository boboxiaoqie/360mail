/// <reference types="node" />
import { ServerResponse } from "http";
import { IRouterCommand } from "../vo/RouterVo";
export default class ChangeGoodsSelectRoute implements IRouterCommand {
    exec(data: any, res: ServerResponse): Promise<void>;
}
//# sourceMappingURL=ChangeGoodsSelectRoute.d.ts.map