var oWrap = document.getElementsByClassName("wrap")[0],
    oList = document.getElementsByClassName("list")[0],
    oPrev = document.getElementById("prev"),
    oNext = document.getElementById("next"),
    oDots = document.getElementsByClassName("dots")[0],
    // oLi = oDots.getElementsByTagName("li"),
    oLi = document.getElementsByTagName("li"),
    index=0;
    flag = true;
function moveList (dis){
    var timer = 500;//一大步需要的时间
    var eachtimer = 20;//一小步需要的时间
    var eachDis = dis/(timer/eachtimer);//每一小步需要移动的距离
    var newLeft = oList.offsetLeft + dis;
    flag = false;
    function eachMove(){
        if(dis < 0 && oList.offsetLeft >= newLeft || dis > 0 && oList.offsetLeft  <= newLeft){
            oList.style.left = oList.offsetLeft + eachDis +"px";
        } else{
            flag = true;
            clearInterval(timer1);
            oList.style.left = newLeft +"px";
            if(oList.offsetLeft==0){
                oList.style.left = -2600 +"px";
            }
             if(oList.offsetLeft=='-3120'){
                oList.style.left = -520 +"px";
                console.log(oList.offsetLeft);
            }
            
        }
        
     }
     timer1 = setInterval(eachMove,eachtimer); 
              
} 
//左右按钮
oPrev.onclick = function (){
    if(!flag) {
        return;
    }
    moveList(520);
    if(index==0){
        index = 4;
    }else{
        index--;
    }
    dotsStyle();
}
oNext.onclick = function (){
    if(!flag) {
        return;
    }
    moveList(-520);
    if(index==4){
        index = 0;
        
    }else{
        index++;
    }
    dotsStyle();
};


for(var i = 0; i < oLi.length; i++){
    (function(j){
         oLi[j].onclick = function(){
             // if(this.className == "active"){
             //     this.className = "";
             // }else{
             //     this.className = "active";
             // }
             moveList((index - j)*520 );
             index = j;
             dotsStyle(j);
         }
    })(i);   
 }
 
//先设定圆点的样式
function dotsStyle(){
    for(var i = 0; i <oLi.length; i++){
        if(oLi[i].className=="active"){
            oLi[i].className = "";
            break;
        }
    }
    oLi[index].className = "active";
}
//自动轮播


timer2 = setInterval(oNext.onclick, 2000);
oWrap.onmouseout = function(){
    timer2 = setInterval(oNext.onclick, 2000);
};
oWrap.onmouseover = function(){
    clearInterval(timer2);
};