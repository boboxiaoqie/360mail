import { ServerResponse } from "http";
import { IRouterCommand } from "../vo/RouterVo";
import { PoolConnection } from "mysql";
import SqlModel from "../model/SqlModel";
import {IShopping} from "../interfaces/IGoods";

export default class ChangeGoodsSelectRoute implements IRouterCommand{
    
    public async exec(data: any,res:ServerResponse): Promise<void> {
        var connect:PoolConnection=await SqlModel.instance.getConnect() as PoolConnection;
        if(connect){
            var result:Array<IShopping>=await SqlModel.instance.changeGoodsSelected(connect,data.ids,data.selected) as Array<IShopping>;
            if(!result){
                res.end(JSON.stringify({errno:1,result:"当前修改错误"}))
                return;
            }
            res.end(JSON.stringify({errno:null,result}));
        }else{
            res.end(JSON.stringify({errno:1,result:"当前数据库连接失败"}))
        }
    }
}