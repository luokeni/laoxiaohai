var myCanvas = document.getElementById("mycanvas");
var ctx = myCanvas.getContext("2d");
var w = myCanvas.width;
var h = myCanvas.height;
function init(){
    var img = new Image();
    var random= Math.random();
    if(random > 0 && random <= 0.9){
        img.src = "images/1.jpg";
    }else{
        img.src = "images/2.jpg";
    }

    img.onload = function(){
        myCanvas.style.backgroundImage = "url("+img.src+")";
        myCanvas.addEventListener("mousedown",downFun);   
    }
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0,w,h); 
    ctx.globalCompositeOperation = "destination-out";
}
init();
var lastx,lasty;
function downFun(e){
    lastx =  e.clientX - myCanvas.offsetLeft;
    lasty =  e.clientY - myCanvas.offsetTop;
    ctx.beginPath();
    ctx.arc(lastx,lasty,30,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
    myCanvas.addEventListener("mousemove",moveFun);
    myCanvas.addEventListener("mouseup",upFun);
}
function moveFun(e){
    var x = e.clientX - myCanvas.offsetLeft;
    var y = e.clientY - myCanvas.offsetTop;
    ctx.beginPath();
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(x,y);
    ctx.lineWidth = 60;
    ctx.lineCap ="round";
    ctx.stroke();
    // ctx.beginPath();
    // ctx.arc(x,y,30,0,Math.PI*2);
    // ctx.closePath();
    // ctx.fill();
    lastx = x;
    lasty = y;
}
function upFun(){
    myCanvas.removeEventListener("mousemove",moveFun);
    myCanvas.removeEventListener("mouseup",upFun);
    clearRect();
}

        // myCanvas.onmousemove = function(e){   
        //     var x = e.clientX -this.offsetLeft;
        //     var y = e.clientY -this.offsetTop; 
        //     ctx.beginPath();
        //     ctx.arc(x,y,30,0,Math.PI*2);
        //     ctx.closePath();
        //     ctx.fill();  } 
function clearRect(){
    var imageData = ctx.getImageData(0,0,w,h);
    var sum=0;
    for(var i = 0; i < imageData.data.length; i+=4){
        if(imageData.data[i]==0){
        sum ++;
        }
    }  
    console.log(sum);
    if(sum > w*h*0.7){
        ctx.clearRect(0,0,400,400);
    }     
 }  
            
    
    //     myCanvas.onmouseup = function(e){
    //         myCanvas.onmousemove = null;
    //         myCanvas.onmouseup = null;

    //     }; 
    

