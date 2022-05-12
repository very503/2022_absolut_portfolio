$(function(){
    var imgG = $('.imgGroup');
    var imgG2 = $('.imgGroup2');
    var artGroup4 = $('.cnt04 .artGroup');
    var bar04 = $('.cnt04 .bar');
    var ind = 0;


    //컨텐츠3 무한루프
    imgG.find('.image:last').prependTo(imgG);
    imgG.css({ marginLeft : '-100%'});

    imgG2.find('.image:last').prependTo(imgG2);
    imgG2.css({ marginLeft : '-33.37%'});
    
    imgG2.find('.image').click(function(){
        //무한루프
        imgG.animate({
            marginLeft : '-200%'
        },500,function(){
            imgG.find('.image:first').appendTo(imgG);
            imgG.css({ marginLeft : '-100%'});
        });

        imgG2.animate({
            marginLeft : '-66.74%'
        },500,function(){
            imgG2.find('.image:first').appendTo(imgG2);
            imgG2.css({ marginLeft : '-33.37%'});
        });
    });

    
    //컨텐츠4 무한루프
    artGroup4.find('.article:last').prependTo(artGroup4);
    artGroup4.css({ marginLeft : '-28%'});


    //Left 버튼 눌렀을때
    bar04.find('.btnLeft').click(function(){
        //무한루프
        artGroup4.stop().animate({
            marginLeft : '0%'
        },500,function(){
            artGroup4.find('.article:last').prependTo(artGroup4);
            artGroup4.css({marginLeft : '-28%'});
        });
    
        ind =  artGroup4.find('.article:eq(0)').attr('data-num');
    
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
    });
    

    //Right 버튼 눌렀을때
    bar04.find('.btnRight').click(function(){
        //무한루프
        artGroup4.stop().animate({
            marginLeft : '-56%'
        },500,function(){
            artGroup4.find('.article:first').appendTo(artGroup4);
            artGroup4.css({marginLeft : '-28%'});
        });

        ind =  artGroup4.find('.article:eq(2)').attr('data-num');

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
        }
    });


    //투탑
    $('.totop').click(function(){
        $('html,body').stop().animate({ scrollTop : 0 },500);
    });
  
});