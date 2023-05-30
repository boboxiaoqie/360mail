import { IAjaxOption } from "../interface/IAjax.js";
import IGoods from "../interface/IGoods.js";
import IShopItem from "../interface/IShopItem";
import MainModel from "../model/MainModel.js";
import { AJAX_ROUTER, AjaxDataType, BASE_URL, PORT } from "../vo/AjaxVo.js";


export default class Ajax {
  constructor(
    rotuer: AJAX_ROUTER = AJAX_ROUTER.ROOT,
    option: IAjaxOption = { method: "get" },
    url: string = BASE_URL + ":" + PORT
  ) {
    var xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", (e: Event) =>
      this.readystatechange(e)
    );
    xhr.open(option.method, url + rotuer);
    for (var key in option.header) {
      xhr.setRequestHeader(key, option.header[key]);
    }
    if (option.body) xhr.send(option.body);
    else xhr.send();
  }
  private readystatechange(e: Event): void {
    var xhr: XMLHttpRequest = e.currentTarget as XMLHttpRequest;
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data: { errno: null | number; result: any } = JSON.parse(
        xhr.response
      );
      var router: AJAX_ROUTER = xhr.responseURL.replace(
        BASE_URL + ":" + PORT,
        ""
      ) as AJAX_ROUTER;
      if (data.errno) {
        alert(data.result);
        return;
      }
      switch (router) {
        case AJAX_ROUTER.GOODS_LIST:
          MainModel.instance.goodsList = data.result as Array<IGoods>;
          break;
        case AJAX_ROUTER.ADD_GOODS:
          location.href = "./shoppingList.html";
          break;
        case AJAX_ROUTER.CHANGE_GOODS_NUM:
        case AJAX_ROUTER.CHANGE_GOODS_SELECTED:
        case AJAX_ROUTER.REMOVE_GOODS:
        case AJAX_ROUTER.SHOPPING_LIST:
          MainModel.instance.shoppingList = data.result as Array<IShopItem>;
          break;
      }
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      console.log("错误");
    }
  }

  public static get(router: AJAX_ROUTER) {
    console.log(router);
    new Ajax(router);
  }
  public static post(
    rotuer: AJAX_ROUTER,
    data: AjaxDataType,
    header: { [key: string]: string } = {}
  ) {
    new Ajax(rotuer, { method: "post", body: JSON.stringify(data), header });
  }
}
