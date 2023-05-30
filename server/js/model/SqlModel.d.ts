import { PoolConnection } from "mysql";
import { IShoppingItemType } from "../vo/MySqlVo";
export default class Mysql {
    private static _instance;
    private pool;
    private constructor();
    getConnect(): Promise<PoolConnection | null>;
    static get instance(): Mysql;
    private createPool;
    selectGoodsList(connect: PoolConnection, tableName: string): Promise<Array<{
        [key: string]: any;
    }> | null>;
    searchGoods(connect: PoolConnection, tableName: string, pid: number): Promise<Array<{
        [key: string]: any;
    }> | null>;
    addGoods(connect: PoolConnection, resultArr: IShoppingItemType): Promise<{
        [key: string]: any;
    } | null>;
    removeGoods(connect: PoolConnection, id: number): Promise<{
        [key: string]: any;
    } | null>;
    changeGoodsNum(connect: PoolConnection, id: number, num: number, total: number): Promise<{
        [key: string]: any;
    } | null>;
    changeGoodsSelected(connect: PoolConnection, ids: Array<number>, selected: number): Promise<{
        [key: string]: any;
    } | null>;
}
//# sourceMappingURL=SqlModel.d.ts.map