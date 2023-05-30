import IGoods from "../interface/IGoods.js";
import Component from "./Component.js";
export default class Goods extends Component {
    private prev?;
    private _data?;
    private ids;
    constructor(data?: IGoods);
    private clickHandler;
    set data(value: IGoods | undefined);
    get data(): IGoods | undefined;
    private mouseHandler;
    private getJudge;
    setCss(): void;
}
//# sourceMappingURL=Goods.d.ts.map