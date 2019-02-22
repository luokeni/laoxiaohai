
(function(){
    function FileLoader(){
        this.reader = new FileReader();
        this.file = file;
        this.totalSize = file.size;
        this.loaded = 0;
        this.step = 1024*1024; 
        this.events = events;
        this.readerBlob(this.reader,0,this.step);
        this.binEvent();
    }
    //将文件使用slice方法截取，并读成文本数据
    FileLoader.prototype.readerBlob = function(reader, start, step){
        var file = this.file;
        var reader = this.reader;
         //slice的兼容性
        if(file.slice){
            var blob = file.slice(start,start+step);
        }else{
            var blob = file;
        }
        reader.readAsText(blob);
       
    }
    
    //绑定上传过程事件，以及上传完成事件
    FileLoader.prototype.binEvent = function(){
        var reader = this.reader;
        var _this = this;
        reader.onprogress = function(e){
            _this.onProgress(e.loaded);
        };
        reader.onload = function(e){
            _this.onLoad();
        };  
    }
    FileLoader.prototype.onProgress = function(num){
        this.loaded += num;
        var per = this.loaded/this.totalSize;
        if(per > 1){  //e.loaded 可能会多读（即使失败了也会读）
            per = 1;
        }
        this.events.progressIng(per);
    }
    FileLoader.prototype.onLoad=function(){
        var result = this.reader.result;
        this.events.stepLoad(this.loaded);
        if(this.loaded < this.totalSize){
          this.readerBlob(this.reader, this.loaded,this.step);
        }else{
           this.events.finishLoad();
        }
    }
    window.FileLoader = FileLoader;
})();