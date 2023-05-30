import { IAjaxOption } from "../interface/IAjax.js";
import { AJAX_ROUTER, AjaxDataType } from "../vo/AjaxVo.js";
export default class Ajax {
    constructor(rotuer?: AJAX_ROUTER, option?: IAjaxOption, url?: string);
    private readystatechange;
    static get(router: AJAX_ROUTER): void;
    static post(rotuer: AJAX_ROUTER, data: AjaxDataType, header?: {
        [key: string]: string;
    }): void;
}
//# sourceMappingURL=Ajax.d.ts.map