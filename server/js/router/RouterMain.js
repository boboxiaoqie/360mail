"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RouterMain {
    constructor() {
        this.list = {};
    }
    static get instance() {
        return RouterMain._instance || (RouterMain._instance = new RouterMain());
    }
    addRouter(type, Command) {
        this.list[type] = Command;
    }
    router(res, type, data) {
        if (!this.list[type]) {
            res.writeHead(404, {
                "Content-Type": "text/json;charset=utf-8",
            });
            res.end(JSON.stringify({ errno: 1, result: "错误的请求" }));
            return;
        }
        res.writeHead(200, {
            "Content-Type": "text/json;charset=utf-8",
        });
        new this.list[type]().exec(data, res);
    }
}
exports.default = RouterMain;
//# sourceMappingURL=RouterMain.js.map