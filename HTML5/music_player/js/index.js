var oAudio = document.getElementById("audio"),
    oBtn = document.getElementsByClassName("btn")[0],
    oPlay = document.getElementsByClassName("iconfont icon-bofang")[0],
    oCurrentTime = document.getElementsByClassName("current-time")[0],
    oAllTime = document.getElementsByClassName("all-time")[0],
    oProActive = document.getElementsByClassName("pro-active")[0],
    oProBox = document.getElementsByClassName("pro-box")[0],
    oRadiobox =document.getElementsByClassName("radio-box")[0],
    oVolBox = document.getElementsByClassName("vol-pro-box")[0],
    oVol = document.getElementsByClassName("iconfont icon-jingyin")[0],
    oVolActive = document.getElementsByClassName("vol-pro-active")[0],
    oVolRadioBox = document.getElementsByClassName("vol-radio-box")[0],
    oProSong = document.getElementsByClassName("prosong")[0],
    oNextSong = document.getElementsByClassName("nextsong")[0],
    oMainList = document.getElementsByClassName("main");
var timer1,duration,newWidth,currtime;

oAudio.oncanplay=function(){
    oAllTime.innerHTML = getcurrenttime(this.duration); 
    duration = this.duration;
    
} 

function getcurrenttime (time){
    minute = parseInt(time/60);
    second = parseInt(time%60);
    mi=minute>=10?minute+":":"0"+minute+":";
    se=second>=10?second:"0"+second;
    return mi+se;
}
oBtn.onmouseup = function(){
    if(oAudio.paused){
        musicplay();
    }else{
        musicpause();
    }
};
function musicplay(){
    clearInterval(timer1);
    oAudio.play();
    if(oVolActive.style.width<=8){
        oAudio.volume = 0;
        
    }
    oPlay.className = "iconfont icon-zanting";
   
    timer1 = setInterval(promove,200);
}
function musicpause(){
    oAudio.pause();
    clearInterval(timer1);
    oPlay.className = "iconfont icon-bofang";
}
oProBox.onmousedown = function(){
    clearInterval(timer1);
    var currtime=oAudio.currentTime;
    document.body.onmousemove=function(e){
        var newWidth=e.clientX - oProBox.getBoundingClientRect().left ;
        if(newWidth<8){
            newWidth=8; 
        }else if(newWidth>190){
            newWidth=190;
        }
        oProActive.style.width = newWidth+'px';
        oRadiobox.style.left = newWidth-8+'px';
        currtime= newWidth/190*duration; 
        
    };
    document.body.onmouseup = function(){
        document.body.onmousemove = null;
        document.body.onmouseup = null; 
         musicplay();           
        oAudio.currentTime = currtime;
        oCurrentTime.innerHTML =getcurrenttime(currtime);      
    }
}
function promove(){
    var c = oAudio.currentTime;
    oCurrentTime.innerHTML =getcurrenttime(c) ;
    oProActive.style.width = c/duration*182+8+'px';
    oRadiobox.style.left = c/duration*182+'px'; 
}
var i=1,
    songs = ["song0","song1","song2"];
oProSong.onclick = function(){
    clearInterval(timer1);
    i= i<=0?2:i-1;
    oAudio.src = "./source/"+songs[i]+".mp3";
    oAudio.load();
    musicplay();
};
oNextSong.onclick = function(){
    clearInterval(timer1);
    i = i>=2?0:i+1;
    oAudio.src = "./source/"+songs[i]+".mp3";
    oAudio.load();
    musicplay();
};

oAudio.onended = function(){
    oNextSong.onclick();
    console.log(i);
    oProActive.style.width = 8+'px';
    oRadiobox.style.left = 0; 
    musicplay();
};
//音量加减
oVolBox.onmousedown = function(){
    document.body.onmousemove = function(e){
       newvolWidth = e.clientX - oVolBox.getBoundingClientRect().left;
       if(oAudio.volume>=0 && oAudio.volume<=1){
        if(newvolWidth<=8){       
            oAudio.volume = 0;
            console.log(newvolWidth);
            oVol.className = "iconfont icon-jingyin";
            newvolWidth=8;
        }else if(newvolWidth>105){
            newvolWidth=105;
            oAudio.volume =1;
        }else{
            oVol.className = "iconfont icon-laba-xianxing";
        }  
        oVolActive.style.width = newvolWidth+"px";
        oVolRadioBox.style.left =newvolWidth-8+'px';
        oAudio.volume =parseInt(1/(105-8)*newvolWidth*10)/10;  
     }
       }
       
    document.body.onmouseup = function(){
        document.body.onmousemove =null;
        document.body.onmouseup = null;
    }
};
function move(){
    oAudio.src ="./source/song"+i+".mp3";
    oAudio.load();
    musicplay();
}
