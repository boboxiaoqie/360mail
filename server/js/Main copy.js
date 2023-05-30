var http = require("http");
var queryString = require("querystring")
var webToken=require("jsonwebtoken");
var { insert, getSql ,getUserAll,selectUser} = require("./sql");
http.createServer(async function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8",
        "Access-Control-Allow-Origin": "*"//CORS跨域
    })
    var sql=await getSql();
    var router=req.url.split("?")[0];
    var parmes = req.url.split("?")[1];
    if (parmes) {
        parmes = queryString.parse(queryString);
    }
    var data = await getData(req);
    try {
        data = JSON.parse(data);
    } catch (e) { }

    if (/favicon.ico/.test(req.url)) {
        res.end()
        return;
    }
    switch(router){
        case "/login":
           var result=await insert(sql,data);
           if(result){
            res.end(JSON.stringify({err:null,msg:"注册成功"}))
           }else{
            res.end(JSON.stringify({err:1,msg:"注册失败"}))
           }
            break;
        case "/reg":
            var result=await selectUser(sql,data);
             if(!result || result.length===0){
                res.end(JSON.stringify({err:1,msg:"登录失败"}))
             }else {
                var token=webToken.sign({user:data[0],password:data[1]},keys)
                res.end(JSON.stringify({err:null,msg:"登录成功",token}))
             }
            break;
        // case "/autho":
        //     data=webToken.verify(data.token,keys);//verify验证
        //     var result=await selectUser(sql,[data.user,data.password]);
        //     if(!result || result.length===0){
        //         res.end(JSON.stringify({err:1,msg:"登录已过期"}))
        //     }else{
        //         result=await getUserAll(sql);
        //         res.end(JSON.stringify({err:null,result}));
        //     }
        //     break;
      
    }
}).listen(4001);



function getData(req) {
    return new Promise(function (resolve, reject) {
        var data = "";
        req.on("data", function (_data) {
            data += _data;
        })
        req.on("end", function () {
            resolve(data);
        })
    })
}