import { ServerResponse } from "http";
import { IRouterCommand } from "../vo/RouterVo";
import { PoolConnection } from "mysql";
import SqlModel from "../model/SqlModel"; 

export default class ShoppingListRoute implements IRouterCommand{
    
    public async exec(data: any,res:ServerResponse): Promise<void> {
        var connect:PoolConnection=await SqlModel.instance.getConnect() as PoolConnection;
        if(connect){
            var result:Array<{[key:string]:any}>=await SqlModel.instance.selectGoodsList(connect,"shoppinglist") as Array<{[key:string]:any}>
            res.end(JSON.stringify({errno:null,result:result}));
        }else{
            res.end(JSON.stringify({errno:1,result:"当前数据库连接失败"}))
        }
    }
}