var oBtn = document.getElementsByClassName("btn")[0],
    oInput = document.getElementsByClassName("input")[0],
    oMain = document.getElementsByClassName("main")[0],
    oMainW = oMain.offsetWidth;
    
    function send () {
        if(oInput.value.length <= 0 || (/^\s+$/).test(oInput.value)){
            alert("内容不能为空");
            return;
        }
        createSpan(oInput.value);
         oInput.value = "";
    }
    oBtn.onclick = send;
    oInput.onkeydown = function (e) {
        if(e.keyCode == 13){
            send();
        }
    };
 
   function random(star,end) {
       return Math.floor(Math.random()*(end-star)+star);
   }
//创建span元素的
 
 function createSpan(text){
     var oSpan = document.createElement('span');
         oSpan.innerText = text;
         oSpan.style.left = oMainW +'px';
         oMain.appendChild(oSpan);
         spanStyle(oSpan);
         // timing(速率)  color top fontsize
 }
 //dom样式
 function spanStyle(dom){
    dom.style.top = random(0,150) +'px';
    dom.style.color = 'rgb(' + random(0, 255) +', '+ random(0,255)+', '+ random(0,255)+' )';
    dom.style.fontSize = random(12,25) + 'px';
    var speed = [0,1,2][random(0,1)];
    dom.timer = setInterval(function () {
        switch (speed) {
            case 0:
                dom.style.left = dom.offsetLeft - 2 + 'px';
                break;
            case 1:
                dom.style.left = dom.offsetLeft -4 + 'px';
                break;
            case 2:
                dom.style.left = dom.offsetLeft -6 +'px';
        }
        if (dom.offsetLeft <= -dom.offsetWidth){
            clearInterval(dom.timer);
            oMain.removeChild(dom);
        }
    } ,20) 
    }
    

