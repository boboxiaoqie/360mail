"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServerMain_1 = __importDefault(require("./utils/ServerMain"));
new ServerMain_1.default().port(Number(process.env.PORT) || 4000);
// init();
// async function init(){
//    var connect:PoolConnection=await SqlModel.instance.getConnect() as PoolConnection;
//    if(connect){
//         // var result:Array<{[key:string]:any}>=await SqlModel.instance.selectGoodsList(connect,"goodslist") as Array<{[key:string]:any}>
//         // console.log(result)
//         // var result:any=await SqlModel.instance.addGoods(connect,[101204,0,"./img/4.jpg","Iphone 14Pro Max","256G",9899,1,9899,0]);
//         // console.log(result);
//    }
// }
//# sourceMappingURL=Main.js.map