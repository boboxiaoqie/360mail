export default class Utils {
    static setCss(str) {
        if (document.styleSheets.length === 0) {
            var style = document.createElement("style");
            style.innerHTML = str;
            document.head.appendChild(style);
            return;
        }
        var styleSheet = document.styleSheets[document.styleSheets.length - 1];
        var arr = str.replace(/\n\r/g, "").split(/(?<=\})/);
        arr.forEach((item) => {
            if (item.trim().length == 0)
                return;
            styleSheet.insertRule(item, styleSheet.cssRules.length);
        });
    }
}
//# sourceMappingURL=Utils.js.map