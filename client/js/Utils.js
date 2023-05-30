export default class Utils{
   static addFormListener(form,callback){
        form.callback=callback;
        form.addEventListener("input",Utils.inputHandler);
        form.addEventListener("submit",Utils.submitHandler);
    }
    static inputHandler(e){
        if(e.target.type==="radio" || e.target.nodeName!=="INPUT") return
        if(Utils.judgeInput(e.target.name,e.target)){
            e.target.nextElementSibling.className="glyphicon glyphicon-ok form-control-feedback";
            e.target.parentElement.className="form-group has-feedback has-success"
        }else{
            e.target.nextElementSibling.className="glyphicon glyphicon-remove form-control-feedback";
            e.target.parentElement.className="form-group has-feedback has-error"
        }
    }
    static submitHandler(e){
        e.preventDefault();
        var fd=new FormData(e.target);
        var arr=[];
        for(var [key,value] of fd){
            if(key!=="tel" && ! Utils.judgeInput(key,document.getElementById(key))) return;
            if(key==="password") arr.push(Number(value));
            else arr.push(value);
        }
        e.target.callback(arr);
    }
    static judgeInput(name,input){
        switch(name){
            // case "user":
            //     return /^\w{8,24}$/.test(input.value);
            case "password":
                return /^\w{8,16}$/.test(input.value);
            // case "name":
            //     return /^[\u4e00-\u9fd5]{2,4}$/.test(input.value);
            // case "age":
            //     return /^[1-9]$|^[1-9]\d$|^1[0-2]\d$/.test(input.value);
            case "tel":
                return /^1[3-9]\d{9}$/.test(input.value);
            case "email":
                return /^\w+\@\w+\.\w+(\.\w+)?$/.test(input.value);
        }
    }
}