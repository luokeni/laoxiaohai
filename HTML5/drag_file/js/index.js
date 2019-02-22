var oFileBox = document.getElementsByClassName("file-box")[0];
var oProActive = document.getElementsByClassName("progress-active")[0];
var oTime = document.getElementsByClassName("time")[0];

oFileBox.addEventListener("dragover",function(e){
    e.preventDefault();
});
//文件在目标元素后离开事件
oFileBox.addEventListener("drop",function(e){
    e.preventDefault();
    file = e.dataTransfer.files[0];
    var reader = new FileLoader(file,events);
});
var events = {
    progressIng:function(per){
        oProActive.style.width = per*350 +"px";
        oTime.innerHTML = Math.round(per*100) +"%"; 
    },
    stepLoad:function(loaded){
        console.log("上传了"+loaded+"部分");
    },
    finishLoad:function(){
        console.log("上传完成");
    }
}
