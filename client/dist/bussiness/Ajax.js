import MainModel from "../model/MainModel.js";
import { AJAX_ROUTER, BASE_URL, PORT } from "../vo/AjaxVo.js";
export default class Ajax {
    constructor(rotuer = AJAX_ROUTER.ROOT, option = { method: "get" }, url = BASE_URL + ":" + PORT) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", (e) => this.readystatechange(e));
        xhr.open(option.method, url + rotuer);
        for (var key in option.header) {
            xhr.setRequestHeader(key, option.header[key]);
        }
        if (option.body)
            xhr.send(option.body);
        else
            xhr.send();
    }
    readystatechange(e) {
        var xhr = e.currentTarget;
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.response);
            var router = xhr.responseURL.replace(BASE_URL + ":" + PORT, "");
            if (data.errno) {
                alert(data.result);
                return;
            }
            switch (router) {
                case AJAX_ROUTER.GOODS_LIST:
                    MainModel.instance.goodsList = data.result;
                    break;
                case AJAX_ROUTER.ADD_GOODS:
                    location.href = "./shoppingList.html";
                    break;
                case AJAX_ROUTER.CHANGE_GOODS_NUM:
                case AJAX_ROUTER.CHANGE_GOODS_SELECTED:
                case AJAX_ROUTER.REMOVE_GOODS:
                case AJAX_ROUTER.SHOPPING_LIST:
                    MainModel.instance.shoppingList = data.result;
                    break;
            }
        }
        else if (xhr.readyState === 4 && xhr.status !== 200) {
            console.log("错误");
        }
    }
    static get(router) {
        console.log(router);
        new Ajax(router);
    }
    static post(rotuer, data, header = {}) {
        new Ajax(rotuer, { method: "post", body: JSON.stringify(data), header });
    }
}
//# sourceMappingURL=Ajax.js.map