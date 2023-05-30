import ICommand from "../interface/ICommand.js";
import IGoods from "../interface/IGoods";
import IShopItem from "../interface/IShopItem";
import { CommandType } from "../vo/CommandVo.js";

export default class MainContorller{
    private static _instance:MainContorller;
    private commandList:{[key:string]:Set<{new():ICommand}>}={}
    private constructor(){

    }
    public static get instance():MainContorller{
        return MainContorller._instance || (MainContorller._instance=new MainContorller());
    }

    public addCommand<T extends ICommand>(type:CommandType,Command:{new():T}){
        if(!this.commandList[type])this.commandList[type]=new Set();
        this.commandList[type].add(Command);
    }
    public removeCommand<T extends ICommand>(type:CommandType,Command:{new():T}){
        if(!this.commandList[type])return;
        if(this.commandList[type].has(Command)) this.commandList[type].delete(Command);

    }
    public dispatch(type:CommandType,data:Array<IGoods>|Array<IShopItem>){
        if(!this.commandList[type])return;
        this.commandList[type].forEach((Command:{new():ICommand})=>new Command().exec(data));
    }
}