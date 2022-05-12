$(function(){
    var i = 0;
    var artG2 = $('.cnt02 .artGroup');
    var artG4 = $('.cnt04 .artGroup');
    var bar4 = $('.cnt04 .bar');
    var ind = 0;
    
    //컨텐츠2 슬라이드
    $('.cnt02 .btnLeft').click(function(){
        i++;
        if(i>4){
            i=4;
        }
        artG2.css('marginLeft', i*-25+'%');
    });
    $('.cnt02 .btnRight').click(function(){
        i--;
        if(i<0){
            i=0;
        }
        artG2.css('marginLeft', i*-25+'%');
    });
    
    //컨텐츠4 무한루프
    var wd4 = $(window).width();
    var mv4 = 0;

    if(wd4 > 420){
        mv4 = -27+'%';
    }else if(wd4 <= 420){
        mv4 = -20+'%';
    };

    artG4.find('.article:last').prependTo(artG4);
    artG4.css({marginLeft : mv4 });


    bar4.find('.btnLeft').click(function(){
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
        }
    });

    bar4.find('.btnRight').click(function(){
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
        }
    });

    //투탑
    $('.totop').click(function(){
        $('html,body').stop().animate({ scrollTop : 0 },500);
    });
   

    
  
});