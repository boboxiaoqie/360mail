export default class MySQLVo{
    static readonly PORT:number=3306;
    static readonly DATABASE:string="game";
    static readonly USER:string="root";
    static readonly PASSWORD:string="root";
}
export interface IShoppingItemType{
    [0]:number;
    [1]:number;
    [2]:string;
    [3]:string;
    [4]:string;
    [5]:number;
    [6]:number;
    [7]:number;
    [8]:number;
}