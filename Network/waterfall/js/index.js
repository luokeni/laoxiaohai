var oList = document.getElementsByTagName('li');
//ajax初始状态
var flag = false;
var num = 1;
function getFun(){
    if(!flag){
        //执行的，更改状态
        flag = true;
        ajax( 'GET', 'cpage='+num, getpic, 'http://localhost/waterfall/getPics.php', true);
        //请求的页面，每次请求+1
        num++;
    }
}
getFun();
function getpic(data){
    //处理返回来的数据时，表示ajax已经请求完，更改状态
    flag = false;
    //将获取的数据转换
    var data = JSON.parse(data);
    data.forEach(function(ele,index){
        var oItem = document.createElement('div');
        oItem.className = 'item';
        var oImg = new Image();
        oImg.src = ele.image;
        oImg.style.height = 320*ele.height/ele.width;
        oItem.appendChild(oImg);
        //给最短的那个栏，添加图片
        var index = min(oList);
        oList[index].appendChild(oItem);
    })
}
//找出最短的那个栏，返回index
function min(list){
    var len = list.length;
    var min = list[0].offsetHeight;
    var index = 0;
    for(var i = 0; i < len  ; i++){
        var h = list[i].offsetHeight;
        if(h < min){
            min = h;
            index = i ;
        }
    }
    return index;
}
//判断什么时候进行下一次数据请求
window.onscroll = function(){
    var index = min(oList);
    var h = oList[index].offsetHeight;
    //获取滚动条的高度，隐藏那部分的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //获取窗口可视区域的位置
    var clientTop = document.documentElement.clientHeight || document.body.clientHeight
    //当最短高度小于总高度时，就进行一次数据请求
    if(h < scrollTop + clientTop){
        getFun();
        console.log('hh') 
    }
}
