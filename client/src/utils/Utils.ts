export default class Utils{
    public static setCss(str:string):void
    {
        if(document.styleSheets.length===0){
            var style:HTMLStyleElement=document.createElement("style");
            style.innerHTML=str;
            document.head.appendChild(style);
            return
        }
        var styleSheet:CSSStyleSheet=document.styleSheets[document.styleSheets.length-1];
        var arr=str.replace(/\n\r/g,"").split(/(?<=\})/);
        arr.forEach((item:string)=>{
            if(item.trim().length==0) return;
            styleSheet.insertRule(item,styleSheet.cssRules.length);
        })
    }
}