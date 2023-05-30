/// <reference types="node" />
import { ServerResponse } from "http";
import { IRouterCommand } from "../vo/RouterVo";
export default class AddGoodsRoute implements IRouterCommand {
    exec(data: any, res: ServerResponse): Promise<void>;
    private changeGoodsNum;
    private addNewGoods;
    private createGoods;
}
//# sourceMappingURL=AddGoodsRoute.d.ts.map