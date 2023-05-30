import { ServerResponse } from "http";
import { IRouterCommand } from "../vo/RouterVo";
import { PoolConnection } from "mysql";
import SqlModel from "../model/SqlModel";

export default class GoodsListRoute implements IRouterCommand{
    
    public async exec(data: any,res:ServerResponse): Promise<void> {
        var connect:PoolConnection=await SqlModel.instance.getConnect() as PoolConnection;
        if(connect){
            var result:Array<{[key:string]:any}>=await SqlModel.instance.selectGoodsList(connect,"goodslist") as Array<{[key:string]:any}>
            result.forEach((item:{[key:string]:any})=>{
                item.list=JSON.parse(item.list);
                item.arguments=JSON.parse(item.arguments);
                item.icons=JSON.parse(item.icons);
            })
            res.end(JSON.stringify({errno:null,result:result}));
        }else{
            res.end(JSON.stringify({errno:1,result:"当前数据库连接失败"}))
        }
    }
}