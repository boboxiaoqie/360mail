import { ServerResponse } from "http";
import RouterVo, { IRouterCommand } from "../vo/RouterVo";
export default class RouterMain{
    private static _instance:RouterMain;
    private list:{[key:string]:{new ():IRouterCommand}}={}
    private constructor(){

    }
    public static get instance():RouterMain
    {                                   
        return RouterMain._instance || (RouterMain._instance=new RouterMain());
    }
    public addRouter<T extends IRouterCommand>(type:RouterVo,Command:{new():T}){
        this.list[type]=Command;
    }

    public router(res:ServerResponse,type:RouterVo,data:any){
        if(!this.list[type]) {
            res.writeHead(404,{
                "Content-Type":"text/json;charset=utf-8",
            })
            res.end(JSON.stringify({errno:1,result:"错误的请求"}))
            return
        }
        res.writeHead(200,{
            "Content-Type":"text/json;charset=utf-8",
        })
        new this.list[type]().exec(data,res);
    }
}