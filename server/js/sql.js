var mysql=require("mysql");

var pool=mysql.createPool({
    port:3306,
    database:"game",
    user:"root",
    password:"root"
});
//获取sql
function getSql(){
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,sql){
             if(err){
                resolve(null);
             }else{
                resolve(sql);
             }
        })
    })
}

function insert(sql,arr){
    return new Promise(function(resolve,reject){
        sql.query("INSERT INTO `user`(`pid`, `tel`, `email`, `password`) VALUES (?,?,?,?)",arr,function(err,res){
            if(err){
                resolve(null);
            }else{
                resolve(res);
            }
        })
    })
}


function getUserAll(sql){
    return new Promise(function(resolve,reject){
        sql.query("SELECT * FROM `user` WHERE 1",function(err,result){
            if(err){
                resolve(null);
            }else resolve(result);
        })
    })
}

function selectUser(sql,arr){
    return new Promise(function(resolve,reject){
        sql.query("SELECT * FROM `user` WHERE `user`=? AND `password`=?",arr,function(err,result){
            if(err){
                resolve(null);
            }else resolve(result);
        })
    })
}
exports.getSql=getSql;
exports.insert=insert;
exports.getUserAll=getUserAll;
exports.selectUser=selectUser;