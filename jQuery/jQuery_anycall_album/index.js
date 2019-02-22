var viewWidth = $(window).width();
var viewHeight = $(window).height();
var liWidth = (viewWidth - 12)/4;
var len = $('.item').length;
var total = len*viewWidth;
var viewRatio = viewHeight/viewWidth;
//初始化图片开始的样式
function init(){
    $('.item').css({
        width: liWidth,
        height: liWidth-30,
    }),
    $('.list').css({
        width: viewWidth,
        left: 0,
    })
    $('img').css({
        width: '100%',
        height: 'auto'
    })
}
init();
//监听事件
$('.list').on('tap','.item',function(){
    show();
    index = $(this).index();
    $('.list').css({
        left: -index * viewWidth + 'px',
    })

    $('.list').on('swipeLeft swipeRight','.item',function(e){
       if(e.type == 'swipeLeft'){
        move(1);
       }else{
        move(-1);
       }
       console.log(index);
    }).on('swipeDown',function(){//向下滑动，恢复相册原样式
        init();
        $('.list').off('swipeLeft swipeRight swipeDown')
    })
})
//设置点击小图片事件后的样式，图片展开的样式
function show(){
    $('.list').css({
        width: total,
    })
    $('.item').css({
        width:viewWidth,
        height:viewHeight,      
    })
    ratio();
}
//根据左滑动和右滑动改变其list的left
function move(num){
    index += num;
    if(index >= len -1){
        index = len -1;
    }else if(index <= 0){
        index = 0;

    }
    $('.list').css({
        left:-index*viewWidth,
    })
}
function ratio(){
    $('img').each(function(i,ele){
        imgRatio = $(ele).height()/$(ele).width();
        if(imgRatio > viewRatio){
            $(ele).css({
                height: '100%',
                width: 'auto'
            })
        }
    })
}