//图片文字实现动画效果
function move(el, e){
    var oItem = document.querySelectorAll(el);
    oItem.forEach(function(ele,index){
        ele.onmouseenter = function(e){
            var dir = getDirection(e, ele)
            var oTxt = ele.getElementsByClassName('content')[0];
                    //防止class类名叠加
            oTxt.className = 'content';
            //判断dir从哪个方向进入
            switch(dir){
                case 0: oTxt.classList.add('intop');
                break;
                case 1: oTxt.classList.add('inright');
                break;
                case 2: oTxt.classList.add('inbottom');
                break;
                case 3: oTxt.classList.add('inleft');
                    }
        }
        ele.onmouseleave = function(e){
            var dir = getDirection(e, ele)
            var oTxt = ele.getElementsByClassName('content')[0];
            //判断dir从哪个方向进入
            switch(dir){
                case 0: oTxt.classList.add('outtop');
                break;
                case 1: oTxt.classList.add('outright');
                break;
                case 2: oTxt.classList.add('outbottom');
                break;
                case 3: oTxt.classList.add('outleft');
                    }
        }
    })
}
//判断鼠标进入的方向
function getDirection(e,ele){
    var w = ele.offsetWidth;
    var h = ele.offsetHeight;
    var x = (e.offsetX - w/2)*(w > h ? h/w : 1);//前部分是使这个图形的中心移动到坐标轴的中心位点，这样才得以使用公式。判断宽是否大于高，若大于就乘以宽高之比。压缩成正方形
    var y = (e.offsetY - h/2)*(h > w ? w/h : 1);
    var d = (Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90 + 3))%4;
    return d;
} 
move('.item')