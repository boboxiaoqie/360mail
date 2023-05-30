import mysql, { MysqlError, Pool, PoolConnection } from "mysql";
import MySQLVo, { IShoppingItemType } from "../vo/MySqlVo";

export default class Mysql{
    private static _instance:Mysql;
    private pool:Pool;

    private constructor(){
      this.pool=this.createPool();
    }
    public async getConnect():Promise<PoolConnection|null>
    {
        return new Promise((resolve:(connect:PoolConnection|null)=>void,reject:()=>void)=>{
            this.pool.getConnection((err:MysqlError,connect:PoolConnection)=>{
                if(err) resolve(null);
                else resolve(connect);
            })
        })
    }
    
    public static get instance():Mysql
    {
        return Mysql._instance || (Mysql._instance=new Mysql())
    }

    private createPool():Pool
    {
        return mysql.createPool({
            port:MySQLVo.PORT,
            database:MySQLVo.DATABASE,
            user:MySQLVo.USER,
            password:MySQLVo.PASSWORD
        })
    }

    public selectGoodsList(connect:PoolConnection,tableName:string):Promise<Array<{[key:string]:any}>|null>
    {
        return new Promise((resolve:(result:Array<{[key:string]:any}>|null)=>void,reject:()=>void)=>{
            connect.query("SELECT * FROM `"+tableName+"` WHERE 1",(err:MysqlError,results:Array<{[key:string]:any}>)=>{
                if(err) resolve(null);
                else resolve(results);
            })
        })
    }
    public searchGoods(connect:PoolConnection,tableName:string,pid:number):Promise<Array<{[key:string]:any}>|null>
    {
        return new Promise((resolve:(result:Array<{[key:string]:any}>|null)=>void,reject:()=>void)=>{
            connect.query("SELECT * FROM `"+tableName+"` WHERE `pid`="+pid,(err:MysqlError,results:Array<{[key:string]:any}>)=>{
                if(err) resolve(null);
                else resolve(results);
            })
        })
    }

    public addGoods(connect:PoolConnection,resultArr:IShoppingItemType):Promise<{[key:string]:any}|null>
    {
        return new Promise((resolve:((results:any)=>void),reject:()=>void)=>{
            connect.query("INSERT INTO `shoppinglist`(`pid`, `selected`, `img`, `info`, `arguments`, `price`, `num`, `total`, `deleted`) VALUES (?,?,?,?,?,?,?,?,?)",resultArr,async (err:MysqlError|null,result:any)=>{
                if(err) resolve(null);
                else {
                    var results:Array<{[key:string]:any}>=await this.selectGoodsList(connect,"shoppinglist") as Array<{[key:string]:any}>;
                    resolve(results);
                }
            })
        })
    }

    public removeGoods(connect:PoolConnection,id:number):Promise<{[key:string]:any}|null>
    {
        return new Promise((resolve:((results:any)=>void),reject:()=>void)=>{
            connect.query("DELETE FROM `shoppinglist` WHERE `pid`="+id, async (err:MysqlError|null,result:any)=>{
                if(err) resolve(null);
                else{
                    var results:Array<{[key:string]:any}>=await this.selectGoodsList(connect,"shoppinglist") as Array<{[key:string]:any}>;
                    resolve(results);
                }
            })
        })
    }

    public changeGoodsNum(connect:PoolConnection,id:number,num:number,total:number):Promise<{[key:string]:any}|null>
    {
        return new Promise((resolve:((results:any)=>void),reject:()=>void)=>{
            connect.query("UPDATE `shoppinglist` SET `num`="+num+",`total`="+total+" WHERE `pid`="+id,async (err:MysqlError|null,result:any)=>{
                if(err) resolve(null);
                else{
                    var results:Array<{[key:string]:any}>=await this.selectGoodsList(connect,"shoppinglist") as Array<{[key:string]:any}>;
                    resolve(results);
                }  
            })
        })
    }

    public changeGoodsSelected(connect:PoolConnection,ids:Array<number>,selected:number):Promise<{[key:string]:any}|null>
    {
        return new Promise((resolve:((results:any)=>void),reject:()=>void)=>{
            var str=ids.map((t:number)=>"`pid`="+t,"").join(" OR ");
            connect.query("UPDATE `shoppinglist` SET `selected`="+selected+" WHERE "+str,async (err:MysqlError|null,result:any)=>{
                if(err) resolve(null);
                else{
                    var results:Array<{[key:string]:any}>=await this.selectGoodsList(connect,"shoppinglist") as Array<{[key:string]:any}>;
                    resolve(results);
                }  
            })
        })
    }
}