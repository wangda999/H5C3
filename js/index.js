/*初始化fullPage*/
$(function ($) {
    $('.container').fullpage({
        verticalCentered: false,
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        /*右侧小图标*/
        navigation: true,
        /*页面滚到某一屏的回调函数*/
        afterLoad:function (link, index){
            $('.section').eq(index-1).addClass('now');
        },
        /*页面huad速度*/
        scrollingSpeed:1000,
        /*页面加载结构完成后注册事件*/
        afterRender: function () {
            $('.more').on('click', function () {
                $.fn.fullpage.moveSectionDown();
            });
            $('.screen04 .cart').on('transitionend',function(){
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });
            // 监听第四屏时间
        },
        /*页面离开事件 index => nextIndex都是序号数从1开始*/
        onLeave:function(index, nextIndex,direction ){
            // 设置第二屏到第三屏离开事件
            if(index == 2 && nextIndex ==3){
                $('.section').eq(index-1).addClass('leaved');
            };
            if(index == 3 && nextIndex ==4){
                $('.section').eq(index-1).addClass('leaved');
            };
            if(index == 5 && nextIndex ==6){
                $('.section').eq(index-1).addClass('leaved');
                $('.screen06 .box').addClass('show');
            }
        }
    });

});