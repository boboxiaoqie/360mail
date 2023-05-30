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
class ServerMain {
    constructor(_port) {
        this.router = "";
        this.server = http_1.default.createServer((req, res) => this.serverHandler(req, res));
        if (_port)
            this.port(_port);
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
        });
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