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
class ChangeGoodsNumRoute {
    exec(data, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var connect = yield SqlModel_1.default.instance.getConnect();
            if (connect) {
                var result = yield SqlModel_1.default.instance.selectGoodsList(connect, "shoppinglist");
                var item = result.find((t) => t.pid == data.id);
                if (!item) {
                    res.end(JSON.stringify({ errno: 1, result: "该商品不存在" }));
                    return;
                }
                result = (yield SqlModel_1.default.instance.changeGoodsNum(connect, data.id, data.num, item.price * data.num));
                res.end(JSON.stringify({ errno: null, result }));
            }
            else {
                res.end(JSON.stringify({ errno: 1, result: "当前数据库连接失败" }));
            }
        });
    }
}
exports.default = ChangeGoodsNumRoute;
//# sourceMappingURL=ChangeGoodsNumRoute.js.map