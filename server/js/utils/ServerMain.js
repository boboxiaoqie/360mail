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
const http_1 = __importDefault(require("http"));
const querystring_1 = __importDefault(require("querystring"));
const RouterMain_1 = __importDefault(require("../router/RouterMain"));
const RouterVo_1 = __importDefault(require("../vo/RouterVo"));
const GoodsListRoute_1 = __importDefault(require("../router/GoodsListRoute"));
const ShoppingListRoute_1 = __importDefault(require("../router/ShoppingListRoute"));
const AddGoodsRoute_1 = __importDefault(require("../router/AddGoodsRoute"));
const RemoveGoodsRoute_1 = __importDefault(require("../router/RemoveGoodsRoute"));
const ChangeGoodsNumRoute_1 = __importDefault(require("../router/ChangeGoodsNumRoute"));
const ChangeGoodsSelectRoute_1 = __importDefault(require("../router/ChangeGoodsSelectRoute"));
class ServerMain {
    constructor(_port) {
        this.router = "";
        this.server = http_1.default.createServer((req, res) => this.serverHandler(req, res));
        if (_port)
            this.port(_port);
        this.registerRouter();
    }
    port(_port) {
        this.server.listen(_port);
        return this;
    }
    serverHandler(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            var arr = (_a = req.url) === null || _a === void 0 ? void 0 : _a.split("?");
            this.router = arr[0];
            this.parmes = arr[1] ? querystring_1.default.parse(arr[1]) : {};
            this.body = yield this.getBody(req);
            res.setHeader("Access-Control-Allow-Origin", "*");
            RouterMain_1.default.instance.router(res, this.router, this.body);
        });
    }
    registerRouter() {
        RouterMain_1.default.instance.addRouter(RouterVo_1.default.GOODS_LIST, GoodsListRoute_1.default);
        RouterMain_1.default.instance.addRouter(RouterVo_1.default.SHOPPING_LIST, ShoppingListRoute_1.default);
        RouterMain_1.default.instance.addRouter(RouterVo_1.default.ADD_GOODS, AddGoodsRoute_1.default);
        RouterMain_1.default.instance.addRouter(RouterVo_1.default.REMOVE_GOODS, RemoveGoodsRoute_1.default);
        RouterMain_1.default.instance.addRouter(RouterVo_1.default.CHANGE_GOODS_NUM, ChangeGoodsNumRoute_1.default);
        RouterMain_1.default.instance.addRouter(RouterVo_1.default.CHANGE_GOODS_SELECTED, ChangeGoodsSelectRoute_1.default);
    }
    getBody(req) {
        return new Promise((resolve, reject) => {
            var data = "";
            req.on("data", (_data) => data += _data);
            req.on("end", () => {
                try {
                    data = JSON.parse(data);
                }
                catch (e) { }
                resolve(data);
            });
        });
    }
}
exports.default = ServerMain;
//# sourceMappingURL=ServerMain.js.map