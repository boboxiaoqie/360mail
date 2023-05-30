export default interface IGoods {
    pid: number;
    list: Array<IGoodsItem>;
    info: string;
    arguments: Array<string>;
    judge: number;
    shop: string;
    icons: IICons;
    double11: boolean;
    schedule?: ISchedule | null;
    jp?: boolean;
}
export interface IGoodsItem {
    id: number;
    img: string;
    price: number;
}
export interface IICons {
    icon1?: Array<string>;
    icon2?: Array<string>;
    icon3?: Array<string>;
    icon4?: Array<string>;
}
export interface ISchedule {
    img: string | null;
    info: string | null;
}
export type IIConsType = "icon1" | "icon2" | "icon3" | "icon4";
//# sourceMappingURL=IGoods.d.ts.map