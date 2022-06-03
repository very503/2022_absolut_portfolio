$(function(){
    var i = 0;
    var wd = $(window).width();
    //cnt02 슬라이드
    var cnt02artG = $('.cnt02 .artGroup');
    var cnt02art = $('.cnt02 .article');
    var cnt02btnL = $('.cnt02 .btnLeft');
    var cnt02btnR = $('.cnt02 .btnRight');
    //cnt04 무한루프
    var ind = 0;
    var mv4 = 0;
    var artG4 = $('.cnt04 .artGroup');
    var bar4 = $('.cnt04 .bar');


    //tab이상 디바이스 크기 & 모바일 디바이스 크기
    if(wd > 420){
        mv4 = -27 +'%';
        //cnt02
        cnt02btnL.click(leftmov);
        cnt02btnR.click(rightmov);
        //cnt04
        artG4.find('.article:last').prependTo(artG4);
        artG4.css({marginLeft : mv4 });
        bar4.find('.btnLeft').click(infmovL);
        bar4.find('.btnRight').click(infmovR);
        //totop
        $('.totop').click(ttop);
    }else if(wd <= 420){
        mv4 = -20 +'%';
        //cnt02
        cnt02art.swipeleft(mobleftmov);
        cnt02art.swiperight(mobrightmov);
        //cnt04
        artG4.find('.article:last').prependTo(artG4);
        artG4.css({marginLeft : mv4 });
        bar4.find('.btnLeft').click(infmovL);
        bar4.find('.btnRight').click(infmovR);
    };

    //cnt02 슬라이드
    function leftmov(){
        i++;
        if(i>4){
            i=4;
        };
        cnt02artG.css('marginLeft', i*-25+'%');
    };

    function rightmov(){
        i--;
        if(i<0){
            i=0;
        };
        cnt02artG.css('marginLeft', i*-25+'%');
    };

    //cnt02 mob슬라이드
    function mobleftmov(){
        i++;
        if(i>=4){
            i=4;
        };
        cnt02artG.css('marginLeft',i*-33.3+'%');
    };
    
    function mobrightmov(){
        i--;
        if(i<=0){
            i=0;
        };
        cnt02artG.css('marginLeft',i*-33.3+'%');
    };

    
    //cnt04 무한루프
    function infmovL(){
        //무한루프
        artG4.stop().animate({
            marginLeft : '0%'
        },500,function(){
            artG4.find('.article:last').prependTo(artG4);
            artG4.css({marginLeft : mv4 });
        });
    
        ind =  artG4.find('.article:eq(0)').attr('data-num');
    
        //바
        bar4.find('.per .perbg').css({
            width : ind*16.66+'%',
            height : '10px',
            backgroundColor : '#0056a4',
            transition : 'all 0.5s'
        });
        if(ind == 6){
            bar4.find('.per .perbg').css({display:'none'});
            setTimeout(function(){
                bar4.find('.per .perbg').css({display:'block'})
            },200);
        };
    };
   
    function infmovR(){
        // 무한루프
        artG4.stop().animate({
            marginLeft : '-54%'
        },500,function(){
            artG4.find('.article:first').appendTo(artG4);
            artG4.css({marginLeft : mv4 });
        });

        ind =  artG4.find('.article:eq(2)').attr('data-num');

        // 바
        bar4.find('.per .perbg').css({
            width : ind*16.66+'%',
            height : '10px',
            backgroundColor : '#0056a4',
            transition : 'all 0.5s'
        });
        if(ind == 0){
            bar4.find('.per .perbg').css({display:'none'});
            setTimeout(function(){
                bar4.find('.per .perbg').css({display:'block'});
            },200);
        };
    };


    //totop
    function ttop(){
        $('html,body').stop().animate({ scrollTop : 0 },500);
    };
  
});