var oMenu = document.getElementsByClassName("menu")[0];
    oMenuList = oMenu.getElementsByTagName("li"),
    oCont =document.getElementsByTagName("section");
    
for (var i = 0; i<oMenuList.length; i++){
    oMenuList[i].onclick= showstyle;
    
}
function showstyle(){
    for(var i = 0; i<oMenuList.length; i++){
        if(oMenuList[i]==this){
            oCont[i].className = "active";
        
        }else{
            oCont[i].className = 'content'+(i+1);
        }    
    }
}

