var oWrapper = document.getElementsByClassName("header")[0];
window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop||document.bodyscrollTop||window.pageYOffset||0;
    if(scrollTop >= 10){
        oWrapper.className = "header fix";
    }else{
        oWrapper.className = "header";
    }
}
var OBtnLeft = document.getElementsByClassName("btn-left")[0],
   OBtnLeft = document.getElementsByClassName("btn-right")[0];
