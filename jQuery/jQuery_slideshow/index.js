
var index = 0,
    num = 5,
    itemWidth = 400,
    time = undefined;
selfmove();
//移动函数
function move(dir) {
    clearTimeout(time);
    $('.box').stop(false.true);
    if(dir == 'pre'){
        index--;
        if(index < 0){
            $('.box').css('left','-2000px');
            index = 4;
        }
    
        console.log(index);
    }else if(dir == 'next'){
        index++;
        if(index > num){
            $('.box').css('left',0);
            index = 1;
        }

    }
    $('.box').animate({
        left: index*-itemWidth
    },function(){
        selfmove();
    })
    circle($('.item').eq(index == 5? 0:index));
    console.log(index);
}

//设置向右滑动的按键
$('.preBtn').click(
    function(){
        move('pre');
    }
);
//设置向左滑动的按键
$('.nextBtn').click(
    function(){
        move('next')
    }
)
//自动轮播
// function selfmove(canshu){
//     time = setTimeout(move('next'),3000);
// }
function selfmove(){
    time = setTimeout(function(){
        move('next');
    },3000);
}
//小圆点
function circle(dom){
    $('.active').removeClass('active');
    console.log(dom);
    dom.addClass('active');
}
//设置圆点的移动
$('.item').click(function(){
    index = $(this).index();
    move('');
})


