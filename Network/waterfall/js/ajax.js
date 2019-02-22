// （1） web浏览器
// （2） ajax对象       
// （3） 初始化 HTTP 请求参数(请求方式, 地址, 同步异步)
// （4） 发送请求
// （5） 监控数据        
// （6） 检查数据 使用



// （1） web浏览器用

function ajax( method, data, callback, url, flag){
    //xml的兼容写法,ajax对象
    var xml = null;
    if(window.XMLHttpRequest){
        var xml = new XMLHttpRequest();//谷歌，火狐，IE7及以上的浏览器
    }else{
        var xml = new ActiveXObject(Microsoft.XMLHttp);//IE6及以下浏览器
    }
    method = method.toUpperCase();//兼容小写的post，get
    if(method == 'GET'){
        var date = new Date();
        timer = date.getTime();
        xml.open(method, url +'?'+data +'&timer='+timer, flag);//大写的形式
        xml.send();

    }else if( method == 'POST'){
        // （3） 初始化 HTTP 请求参数(请求方式, 地址, 同步异步)
        xml.open( method, url, flag);//大写的形式
        //post请求的数据，在此处传，且要告诉服务器传的类型是什么样子的
        xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // （4） 发送请求
        xml.send(data);

    }

    // （5） 监控数据   
    xml.onreadystatechange = function (){//状态变化的时候才会触发
        if(xml.readyState == 4){
            if(xml.status == 200){
                callback(xml.responseText);//返回回来的字符串
              
            }

        }

    }




    
    // function callback(val){
    //     var data = JSON.parse(val);
    //     var str = '';
    //     var oList = document.getElementsByClassName('list')[0];
    //     data.forEach(function(ele, index){
    //         console.log(ele)
    //         str += '<li>'+ ele.title+ ele.date+'</li>';
            
    //     })
    //     oList.innerHTML = str;
    // }


}
//POST是传数据用的，