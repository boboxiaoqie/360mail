import { ServerResponse } from "http";
import { IRouterCommand } from "../vo/RouterVo";
import { PoolConnection } from "mysql";
import SqlModel from "../model/SqlModel";
import {IShopping} from "../interfaces/IGoods";

export default class ChangeGoodsNumRoute implements IRouterCommand{
    
    public async exec(data: any,res:ServerResponse): Promise<void> {
        var connect:PoolConnection=await SqlModel.instance.getConnect() as PoolConnection;
        if(connect){
            var result:Array<IShopping>=await SqlModel.instance.selectGoodsList(connect,"shoppinglist") as Array<IShopping>
            var item:IShopping=result.find((t:IShopping)=>t.pid==data.id) as IShopping;
            if(!item){
                res.end(JSON.stringify({errno:1,result:"该商品不存在"}))
                return;
            }
            result=await SqlModel.instance.changeGoodsNum(connect,data.id,data.num,item.price*data.num) as  Array<IShopping>;
            res.end(JSON.stringify({errno:null,result}));
        }else{
            res.end(JSON.stringify({errno:1,result:"当前数据库连接失败"}))
        }
    }
}