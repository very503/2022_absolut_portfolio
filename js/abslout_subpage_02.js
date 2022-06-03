$(function(){
    var i = 0;
    var wd = $(window).width();
    //cnt03
    var imgG = $('.imgGroup');
    var imgG2 = $('.imgGroup2');
    //cnt04
    var cnt04artG = $('.cnt04 .artGroup');
    var cnt04art = $('.cnt04 .article');
    var bar04 = $('.cnt04 .bar');
    var ind = 0;

    
    //tab이상 디바이스 크기 & 모바일 디바이스 크기
    if(wd > 420){
        //cnt03 무한루프
        //초기셋팅
        imgG.find('.image:last').prependTo(imgG);
        imgG.css({ marginLeft : '-100%'});
        //초기셋팅
        imgG2.find('.image:last').prependTo(imgG2);
        imgG2.css({ marginLeft : '-33.37%'});
        //무한루프
        imgG2.find('.image').click(infmov);

        //cnt04 무한루프
        //초기셋팅
        cnt04artG.find('.article:last').prependTo(cnt04artG);
        cnt04artG.css({ marginLeft : '-28%'});
        //무한루프
        bar04.find('.btnLeft').click(leftmov);
        bar04.find('.btnRight').click(rightmov);
        //totop
        $('.totop').click(ttop);

    }else if(wd <= 420){
        //cnt04 mob스와이프
        cnt04art.swipeleft(mobleftmov);
        cnt04art.swiperight(mobrightmov);
    };


    //cnt03 무한루프
    function infmov(){
        //무한루프 Left
        imgG.animate({
            marginLeft : '-200%'
        },500,function(){
            imgG.find('.image:first').appendTo(imgG);
            imgG.css({ marginLeft : '-100%'});
        });
        //무한루프 Right
        imgG2.animate({
            marginLeft : '-66.74%'
        },500,function(){
            imgG2.find('.image:first').appendTo(imgG2);
            imgG2.css({ marginLeft : '-33.37%'});
        });
    }

    
    //cnt04 무한루프
    //Left 버튼 클릭시
    function leftmov(){
        //무한루프
        cnt04artG.stop().animate({
            marginLeft : '0%'
        },500,function(){
            cnt04artG.find('.article:last').prependTo(cnt04artG);
            cnt04artG.css({marginLeft : '-28%'});
        });
    
        ind =  cnt04artG.find('.article:eq(0)').attr('data-num');
    
        //바
        bar04.find('.per .perbg').css({
            width : ind*20+'%',
            height : '10px',
            backgroundColor : '#0056a4',
            transition : 'all 0.5s'
        });
        if(ind == 5){
            bar04.find('.per .perbg').css({display : 'none'});
            setTimeout(function(){
                bar04.find('.per .perbg').css({display:'block'})
            },200);
        }
    };
    
    //Right 버튼 클릭시
    function rightmov(){
        cnt04artG.stop().animate({
            marginLeft : '-56%'
        },500,function(){
            cnt04artG.find('.article:first').appendTo(cnt04artG);
            cnt04artG.css({marginLeft : '-28%'});
        });

        ind =  cnt04artG.find('.article:eq(2)').attr('data-num');

        //바
        bar04.find('.per .perbg').css({
            width : ind*20+'%',
            height : '10px',
            backgroundColor : '#0056a4',
            transition : 'all 0.5s'
        });
        if(ind == 0){
            bar04.find('.per .perbg').css({display : 'none'});
            setTimeout(function(){
                bar04.find('.per .perbg').css({display:'block'})
            },200);
        };
    };


    //cnt04 mob스와이프
    function mobleftmov(){
        i++;
        if(i>=1){
            i=1;
        };
        cnt04artG.css('marginLeft',i*-100+'%');
    };
    
    function mobrightmov(){
        i--;
        if(i<=0){
            i=0;
        };
        cnt04artG.css('marginLeft',i*-100+'%');
    };


    //totop
    function ttop(){
        $('html,body').stop().animate({ scrollTop : 0 },500);
    };
    
});