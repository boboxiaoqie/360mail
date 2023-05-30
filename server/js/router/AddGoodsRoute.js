"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SqlModel_1 = __importDefault(require("../model/SqlModel"));
class AddGoodsRoute {
    exec(data, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var connect = yield SqlModel_1.default.instance.getConnect();
            if (connect) {
                if (yield this.changeGoodsNum(connect, data, res))
                    return;
                yield this.addNewGoods(connect, data, res);
            }
            else {
                res.end(JSON.stringify({ errno: 1, result: "当前数据库连接失败" }));
            }
        });
    }
    changeGoodsNum(connect, data, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = yield SqlModel_1.default.instance.selectGoodsList(connect, "shoppinglist");
            var item = result.find((t) => t.pid == data.id);
            if (!item)
                return false;
            result = (yield SqlModel_1.default.instance.changeGoodsNum(connect, data.id, item.num + 1, item.price * (item.num + 1)));
            res.end(JSON.stringify({ errno: null, result }));
            return true;
        });
    }
    addNewGoods(connect, data, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = yield SqlModel_1.default.instance.searchGoods(connect, "goodslist", data.pid);
            if (result && result.length > 0) {
                var arr = this.createGoods(result[0], data);
                if (!arr) {
                    res.end(JSON.stringify({ errno: 1, result: "错误的商品id" }));
                    return;
                }
                result = (yield SqlModel_1.default.instance.addGoods(connect, arr));
                if (result) {
                    res.end(JSON.stringify({ errno: null, result: result }));
                }
                else {
                    res.end(JSON.stringify({ errno: 1, result: "添加商品失败" }));
                }
            }
        });
    }
    createGoods(result, data) {
        var list = JSON.parse(result.list);
        var item = list.find((t) => t.id == data.id);
        if (!item) {
            return null;
        }
        var arr = [data.id, 0, item.img, result.info, JSON.parse(result.arguments).join(","), item.price, 1, item.price, 0];
        return arr;
    }
}
exports.default = AddGoodsRoute;
//# sourceMappingURL=AddGoodsRoute.js.map