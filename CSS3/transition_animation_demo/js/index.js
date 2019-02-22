var oUl = document.getElementsByTagName('ul')[0];
window.onload = function(){
        oUl.className = "ulbg";
}
var oLi = document.getElementsByTagName('li');
var len = oLi.length;
for(var i = 0; i < len; i++){
    console.log(i);
    oLi[i].onmouseenter = function(e){
        console.log(i);
        var dir = getDirection(e,this);
        var oTxt = this.getElementsByClassName('content')[0];
        //防止class类名叠加
        oTxt.className = 'content';
        //判断dir从哪个方向进入
        switch(dir){
                    case 0: oTxt.classList.add('inup');
                    break;
                    case 1: oTxt.classList.add('inright');
                    break;
                    case 2: oTxt.classList.add('inbottom');
                    break;
                    case 3: oTxt.classList.add('inleft');
                }
    }
    oLi[i].onmouseleave = function(e){
        var dir = getDirection(e,this);
        var oTxt = this.getElementsByClassName('content')[0];
        //判断dir从哪个方向出
        switch(dir){
                    case 0: oTxt.classList.add('outup');
                    break;
                    case 1: oTxt.classList.add('outright');
                    break;
                    case 2: oTxt.classList.add('outbottom');
                    break;
                    case 3: oTxt.classList.add('outleft');
                }
        } 
}
function getDirection(e,ele){
    var w = ele.offsetWidth;
    var h = ele.offsetHeight;
    var x = (e.offsetX - w/2)*(w > h ? h/w : 1);//前部分是使这个图形的中心移动到坐标轴的中心位点，这样才得以使用公式。判断宽是否大于高，若大于就乘以宽高之比。压缩成正方形
    var y = (e.offsetY - h/2)*(h > w ? w/h : 1);
    var d = (Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90 + 3))%4;
    return d;
} 
