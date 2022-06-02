$(function(){
    var i = 0;
    var wd = $(window).width();
    //cnt0 무한루프
    var imgG = $('.imgGroup');
    var imgG2 = $('.imgGroup2');
    //cnt04 무한루프
    var cnt04artG = $('.cnt04 .artGroup');
    var cnt04art = $('.cnt04 .article');
    var bar04 = $('.cnt04 .bar');
    var ind = 0;


    if(wd > 420){
        //cnt03 무한루프
        imgG.find('.image:last').prependTo(imgG);
        imgG.css({ marginLeft : '-100%'});
        imgG2.find('.image:last').prependTo(imgG2);
        imgG2.css({ marginLeft : '-33.37%'});
        imgG2.find('.image').click(infmov);
        //cnt04 무한루프
        artGroup4.find('.article:last').prependTo(artGroup4);
        artGroup4.css({ marginLeft : '-28%'});
        bar04.find('.btnLeft').click(leftmov);
        bar04.find('.btnRight').click(rightmov);
        //totop
        $('.totop').click(ttop);
    }else if(wd <= 420){
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
    //Left 버튼 눌렀을때
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
    
    //Right 버튼 눌렀을때
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


    //cnt04 mob무한루프
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