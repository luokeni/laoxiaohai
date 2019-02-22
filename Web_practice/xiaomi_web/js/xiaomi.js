var tabs = document.getElementById("seckill-tabs").getElementsByTagName("li");
var goodstabs = document.getElementById("seckill-goods-tabs").getElementsByTagName("ul");

for(var i = 0; i < tabs.length; i++){
    tabs[i].onclick = showthis;
}
function showthis(){
    for(var i = 0; i < tabs.length; i++){
        if(tabs[i]===this){
            tabs[i].className = "active";
            goodstabs[i].className = "active";
        }else{
            tabs[i].className = "";
            goodstabs[i].className = "";
        }
    }
}
var seckillnavs = document.getElementById("seckillnav");
window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop||document.bodyscrollTop||window.pageYOffset||0;
    if(scrollTop >= 260){
        seckillnavs.className = "seckill-nav scrolls";
    }else{
        seckillnavs.className = "seckill-nav";
    }
}


