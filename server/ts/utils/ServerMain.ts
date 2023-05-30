import http, { IncomingMessage, Server, ServerResponse } from "http";
import querystring from "querystring";
import RouterMain from "../router/RouterMain";
import RouterVo from "../vo/RouterVo";
import GoodsListRoute from "../router/GoodsListRoute";
import ShoppingListRoute from "../router/ShoppingListRoute";
import AddGoodsRoute from "../router/AddGoodsRoute";
import RemoveGoodsRoute from "../router/RemoveGoodsRoute";
import ChangeGoodsNumRoute from "../router/ChangeGoodsNumRoute";
import ChangeGoodsSelectRoute from "../router/ChangeGoodsSelectRoute";
import RouterType from "../vo/RouterVo";
export type BodyType=string|{[key:string]:any};
export default class ServerMain{
    server:Server;
    router:string="";
    parmes?:{[key:string]:any};
    body?:BodyType;
    constructor(_port?:number){
        this.server=http.createServer((req:IncomingMessage,res:ServerResponse)=>this.serverHandler(req,res));
        if(_port)this.port(_port);
        this.registerRouter();
    }
    public port(_port:number):ServerMain
    {
        this.server.listen(_port);
        return this;
    }
    private async serverHandler(req:IncomingMessage,res:ServerResponse):Promise<void>
    {
        var arr:Array<string>=req.url?.split("?") as Array<string>;
        this.router=arr[0];
        this.parmes=arr[1] ? querystring.parse(arr[1]) : {};
        this.body=await this.getBody(req);
        res.setHeader("Access-Control-Allow-Origin","*")
        RouterMain.instance.router(res,this.router as RouterType,this.body);
    }

    private registerRouter(){
        RouterMain.instance.addRouter(RouterVo.GOODS_LIST,GoodsListRoute);
        RouterMain.instance.addRouter(RouterVo.SHOPPING_LIST,ShoppingListRoute);
        RouterMain.instance.addRouter(RouterVo.ADD_GOODS,AddGoodsRoute);
        RouterMain.instance.addRouter(RouterVo.REMOVE_GOODS,RemoveGoodsRoute);
        RouterMain.instance.addRouter(RouterVo.CHANGE_GOODS_NUM,ChangeGoodsNumRoute);
        RouterMain.instance.addRouter(RouterVo.CHANGE_GOODS_SELECTED,ChangeGoodsSelectRoute);
    }

    private getBody(req:IncomingMessage):Promise<BodyType>
    {
        return new Promise((resolve:(data:BodyType)=>void,reject:()=>void)=>{
            var data:BodyType="";
            req.on("data",(_data:any)=>data+=_data);
            req.on("end",()=>{
                try{
                    data=JSON.parse(data as string);
                }catch(e){}
                resolve(data);
            })
        })
    }

}