import Emitter from "../event/Emitter.js";
import { EmitterType } from "../vo/EmitterTypeVo.js";
import Component from "./Component.js";
export default class Goods extends Component {
    constructor(data) {
        super("div");
        this.ids = 0;
        this.elem.className = "goods";
        this.elem.addEventListener("mouseover", e => this.mouseHandler(e));
        this.elem.addEventListener("click", (e) => this.clickHandler(e));
        if (data)
            this.data = data;
        this.setCss();
    }
    clickHandler(e) {
        var _a;
        var evt = new Emitter(EmitterType.ADD_GOODS);
        evt.pid = this.ids;
        console.log(this.data);
        evt.id = (_a = this.data) === null || _a === void 0 ? void 0 : _a.pid;
        this.dispatchEvent(evt);
    }
    set data(value) {
        if (!value)
            return;
        this._data = value;
        this.elem.innerHTML = `
            <div class='iconImg'>
                <img src=''>
                ${!value.schedule ? "" : `
                <div class='iconPromote'>
                ${!value.schedule.img ? "" : ` <img src='${value.schedule.img}'>`}
                ${!value.schedule.info ? "" : `<span class='iconPromoteTxt'>${value.schedule.info}</span>`}
                </div>`}  
            </div>
            <div class='iconList clear'>
                ${value.list.reduce((v, t) => v + `<img class='icon' ids='${t.id}' src='${t.img}'>`, "")}
            </div>
            <div class='priceCon'>
                ￥<i></i>
            </div>
            <div class='titleCon'>
               
                <a href='javascript:void(0)'>${value.info}</a>
            </div>
            ${!value.arguments ? "" : ` <div class='info clear'>
                ${value.arguments.reduce((v, t) => v + `<span class='infoitem'>${t}</span>`, "")}
                </div>`}
            <div class='judgeCon'>
                <span class='judge'>${this.getJudge(value.judge)}</span>条评价
            </div>
            <div class='shoppingCon'>
                <div class='shopping'>${value.shop}</div>
                <img src='./img/chart.png'>
            <div>
            <div>
                ${!value.icons ? "" : Object.keys(value.icons).reduce((v, key) => {
            var items = value === null || value === void 0 ? void 0 : value.icons[key];
            if (!items)
                return v;
            return v + items.reduce((value, item) => {
                return value + `<span class='${key}'>${item}</span>`;
            }, "");
        }, '')}
            </div>
        `;
        this.ids = value.list[0].id;
        this.elem.querySelector(".icon").dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
    }
    get data() {
        return this._data;
    }
    mouseHandler(e) {
        var _a;
        if (e.target.className !== "icon")
            return;
        if (this.prev) {
            this.prev.style.borderColor = "#DDD";
        }
        this.prev = e.target;
        if (this.prev)
            this.prev.style.borderColor = "#e4393c";
        var ids = Number(this.prev.getAttribute("ids"));
        this.ids = ids;
        var item = (_a = this.data) === null || _a === void 0 ? void 0 : _a.list.find(item => item.id == ids);
        var img = this.elem.firstElementChild.firstElementChild;
        img.src = item.img;
        this.elem.querySelector(".priceCon>i").textContent = Number(item.price).toFixed(2);
    }
    getJudge(judge) {
        if (judge < 100)
            return String(judge);
        if (judge < 1000)
            return (~~judge / 100) + "00+";
        if (judge < 10000)
            return (~~judge / 1000) + "000+";
        return String(judge)[0] + Array(String(judge).length - 5).fill(0).join("") + "万+";
    }
    setCss() {
        Goods.setStyle(`.goods {
            width: 240px;
            height: 444px;
            padding: 12px 9px;
            font: 12px/150% tahoma, arial, Microsoft YaHei, Hiragino Sans GB, "\u5b8b\u4f53", sans-serif;
            color: #666;
            position: relative;
            float: left;
        }

        .goods:hover {
            box-shadow: 0px 0px 4px #999;
        }

        .goods>.iconImg {
            text-decoration: none;
            width: 100%;
            height: 220px;
            text-align: center;
            display: block;
            position: relative;
        }

        .goods>.iconImg>img {
            width: 220px;
            height: 220px;
        }

        .goods>.iconImg>.iconPromote {
            width: 220px;
            height: 25px;
            text-align: left;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.6);
        }

        .goods>.iconImg>.iconPromote>img {
            margin-left: 10px;
            vertical-align: middle;
        }

        .goods>.iconImg .iconPromoteTxt {
            line-height: 25px;
            color: white;
            margin-left: 10px;
        }

        .goods>.iconList {
            margin-left: 2px;
        }

        .goods>.iconList>img {
            float: left;
            /* #e4393c */
            border: 1px solid #ddd;
            padding: 1px;
            width: 25px;
            height: 25px;
            margin: 2px;
        }

        .clear::after {
            content: "";
            display: block;
            height: 0;
            overflow: hidden;
            clear: both;
            visibility: hidden;
        }

        .goods>.priceCon {
            font-size: 16px;
            color: #e4393c;
            margin: 0;
            margin-top: 8px;
        }

        .goods>.priceCon>i {
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            font-family: Verdana;
        }

        .goods>.titleCon {
            width: 220px;
            overflow: hidden;
            white-space: nowrap;
            margin: 0;
            margin-top: 8px;
            padding: 0;
        }

        .goods>.titleCon>.titleIcon {
            float: left;
            height: 16px;
            padding: 0 3px;
            margin-top: 2px;
            margin-right: 3px;
            overflow: hidden;
            color: #fff;
            font: 12px/16px "Helvetica Neue", "Hiragino Sans GB", SimSun, serif;
            background: #c81623;
            border-radius: 2px;

        }

        .goods>.titleCon>a {
            text-decoration: none;
            color: #666;
        }

        .goods>.titleCon>a:hover {
            color: #c81623;
        }

        .goods>.info {
            margin: 0;
            margin-top: 8px;
        }

        .goods>.info>.infoitem {
            float: left;
            height: 19px;
            line-height: 19px;
            padding: 0 6px;
            margin-right: 7px;
            color: #999;
            background: #f4f4f4;
            text-decoration: none;
        }

        .goods>.info>.infoitem:hover {
            color: #c81623;
        }

        .goods>.judgeCon {
            margin-top: 8px;
        }

        .goods>.judgeCon>.judge {
            color: #646fb0;
            font-family: verdana;
            font-weight: 700;
        }

        .goods>.shoppingCon {
            margin-top: 8px;
            margin-bottom: 10px;
        }

        .goods>.shoppingCon>.shopping {
            color: #999;
            text-decoration: none;
            display: inline-block;
            max-width: 122px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .goods>.shoppingCon>.shopping:hover {
            color: #c81623;
        }

        .icon1,
        .icon3,
        .icon2 {
            float: left;
            height: 16px;
            line-height: 16px;
            padding: 0 3px;
            margin-right: 3px;
            overflow: hidden;
            text-align: center;
            font-style: normal;
            font-size: 12px;
            font-family: "Helvetica Neue", "Hiragino Sans GB", SimSun, serif;
            background: #e23a3a;
            color: #FFF;
            cursor: default;
            border-radius: 2px;
        }

        .icon4 {
            float: left;
            height: 14px;
            line-height: 14px;
            padding: 0 3px;
            border: 1px solid #e23a3a;
            margin-right: 3px;
            overflow: hidden;
            text-align: center;
            font-style: normal;
            font-size: 12px;
            font-family: "Helvetica Neue", "Hiragino Sans GB", SimSun, serif;
            border-radius: 2px;
            color: #e23a3a;
        }

        .icon3 {
            background: #31c19e;
        }

        .icon2 {
            float: left;
            height: 14px;
            line-height: 14px;
            line-height: 16px;
            padding: 0 3px;
            margin-right: 3px;
            overflow: hidden;
            text-align: center;
            font-style: normal;
            font-size: 12px;
            font-family: "Helvetica Neue", "Hiragino Sans GB", SimSun, serif;
            border-radius: 2px;
            border: 1px solid #4d88ff;
            color: #4d88ff;
            background-color: white;
        }

        .double11 {
            position: absolute;
            right: 10px;
            top: 20px;
        }`);
    }
}
//# sourceMappingURL=Goods.js.map