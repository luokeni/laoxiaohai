var oIcon = document.getElementsByClassName("iconclick")[0],
    oIconHide = document.getElementsByClassName("header-first")[0]; 
    console.log(oIconHide.className);
    oIcon.onclick = function(){
        if(oIconHide.className == "header-first header-first-active"){  
            oIconHide.className ="header-first";
            console.log(oIconHide.className);
        }else{
            oIconHide.className = "header-first header-first-active"
        }
    };
   

    