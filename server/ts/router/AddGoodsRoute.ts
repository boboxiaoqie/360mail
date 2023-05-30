import { ServerResponse } from "http";
import { IRouterCommand } from "../vo/RouterVo";
import { PoolConnection } from "mysql";
import SqlModel from "../model/SqlModel";
import { IShoppingItemType } from "../vo/MySqlVo";
import {IShopping} from "../interfaces/IGoods";

interface IGoodsItem{
    id:number;
    img:string;
    price:number;
}

export default class AddGoodsRoute implements IRouterCommand{
    
    public async exec(data: any,res:ServerResponse): Promise<void> {
        var connect:PoolConnection=await SqlModel.instance.getConnect() as PoolConnection;
        if(connect){
            if(await this.changeGoodsNum(connect,data,res)) return;
            await this.addNewGoods(connect,data,res);
        }else{
            res.end(JSON.stringify({errno:1,result:"当前数据库连接失败"}))
        }
    }

    private async changeGoodsNum(connect:PoolConnection,data:any,res:ServerResponse):Promise<boolean>
    {
        var result:Array<IShopping>=await SqlModel.instance.selectGoodsList(connect,"shoppinglist") as Array<IShopping>
        var item:IShopping=result.find((t:IShopping)=>t.pid==data.id) as IShopping;
        if(!item) return false;
        result=await SqlModel.instance.changeGoodsNum(connect,data.id,item.num+1,item.price*(item.num+1)) as  Array<IShopping>;
        res.end(JSON.stringify({errno:null,result}));
        return true;
    }

    private async addNewGoods(connect:PoolConnection,data:any,res:ServerResponse):Promise<void>{
        var result:Array<{[key:string]:any}>=await SqlModel.instance.searchGoods(connect,"goodslist",data.pid)  as Array<{[key:string]:any}>;
        if(result && result.length>0){
          var arr=this.createGoods(result[0],data);
          if(!arr){
            res.end(JSON.stringify({errno:1,result:"错误的商品id"}));
            return;
          }
          result=await SqlModel.instance.addGoods(connect,arr) as Array<{[key:string]:any}>;
          if(result){
            res.end(JSON.stringify({errno:null,result:result}));
          }else{
            res.end(JSON.stringify({errno:1,result:"添加商品失败"}))
          }
        }
    }

    private  createGoods(result:{[key:string]:any},data:any):IShoppingItemType|null{
        var list:Array<IGoodsItem>=JSON.parse(result.list);
        var item:IGoodsItem=list.find((t:IGoodsItem)=>t.id==data.id) as IGoodsItem;
        if(!item){
            return null;
        }
        var arr:IShoppingItemType=[data.id,0,item.img,result.info,JSON.parse(result.arguments).join(","),item.price,1,item.price,0];
        return arr;
    }
}