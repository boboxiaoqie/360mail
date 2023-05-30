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
const mysql_1 = __importDefault(require("mysql"));
const MySqlVo_1 = __importDefault(require("../vo/MySqlVo"));
class Mysql {
    constructor() {
        this.pool = this.createPool();
    }
    getConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.pool.getConnection((err, connect) => {
                    if (err)
                        resolve(null);
                    else
                        resolve(connect);
                });
            });
        });
    }
    static get instance() {
        return Mysql._instance || (Mysql._instance = new Mysql());
    }
    createPool() {
        return mysql_1.default.createPool({
            port: MySqlVo_1.default.PORT,
            database: MySqlVo_1.default.DATABASE,
            user: MySqlVo_1.default.USER,
            password: MySqlVo_1.default.PASSWORD
        });
    }
    selectGoodsList(connect, tableName) {
        return new Promise((resolve, reject) => {
            connect.query("SELECT * FROM `" + tableName + "` WHERE 1", (err, results) => {
                if (err)
                    resolve(null);
                else
                    resolve(results);
            });
        });
    }
    searchGoods(connect, tableName, pid) {
        return new Promise((resolve, reject) => {
            connect.query("SELECT * FROM `" + tableName + "` WHERE `pid`=" + pid, (err, results) => {
                if (err)
                    resolve(null);
                else
                    resolve(results);
            });
        });
    }
    addGoods(connect, resultArr) {
        return new Promise((resolve, reject) => {
            connect.query("INSERT INTO `shoppinglist`(`pid`, `selected`, `img`, `info`, `arguments`, `price`, `num`, `total`, `deleted`) VALUES (?,?,?,?,?,?,?,?,?)", resultArr, (err, result) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    resolve(null);
                else {
                    var results = yield this.selectGoodsList(connect, "shoppinglist");
                    resolve(results);
                }
            }));
        });
    }
    removeGoods(connect, id) {
        return new Promise((resolve, reject) => {
            connect.query("DELETE FROM `shoppinglist` WHERE `pid`=" + id, (err, result) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    resolve(null);
                else {
                    var results = yield this.selectGoodsList(connect, "shoppinglist");
                    resolve(results);
                }
            }));
        });
    }
    changeGoodsNum(connect, id, num, total) {
        return new Promise((resolve, reject) => {
            connect.query("UPDATE `shoppinglist` SET `num`=" + num + ",`total`=" + total + " WHERE `pid`=" + id, (err, result) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    resolve(null);
                else {
                    var results = yield this.selectGoodsList(connect, "shoppinglist");
                    resolve(results);
                }
            }));
        });
    }
    changeGoodsSelected(connect, ids, selected) {
        return new Promise((resolve, reject) => {
            var str = ids.map((t) => "`pid`=" + t, "").join(" OR ");
            connect.query("UPDATE `shoppinglist` SET `selected`=" + selected + " WHERE " + str, (err, result) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    resolve(null);
                else {
                    var results = yield this.selectGoodsList(connect, "shoppinglist");
                    resolve(results);
                }
            }));
        });
    }
}
exports.default = Mysql;
//# sourceMappingURL=SqlModel.js.map