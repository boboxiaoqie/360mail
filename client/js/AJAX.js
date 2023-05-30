export default class AJAX {
    static URL = "http://localhost";
    static PORT = "4001";
    static LOGIN = "/login";
    static REG= "/reg";
    static POST = "POST";
    static GET = "GET";
    static getXHR(methods = "GET", router, data) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open(methods, AJAX.URL+":"+ AJAX.PORT + router);
            if (data) xhr.send(JSON.stringify(data));
            else xhr.send();
            xhr.onload=function(){
                resolve(xhr.response);
            }
        })
    }

    static async get(router) {
       var response=await  AJAX.getXHR(AJAX.GET, router)
       return response;
    }
    static async post(data, router) {
        var response=await AJAX.getXHR(AJAX.POST, router, data);
        return response;
    }
}