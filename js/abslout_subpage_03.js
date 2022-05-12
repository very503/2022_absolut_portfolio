$(function(){
    //컨텐츠1번 변수
    var artG1 = $('.content.cnt01 .artGroup');
    var btn1 = $('.content.cnt01 .btns');
    var bar1 = $('.content.cnt01 .bar');

    //컨텐츠2번 변수
    var artl = $('.content.cnt02 .artLeft .article.a2 .imgGroup');
    var artr = $('.content.cnt02 .artRight .article.a2 .imgGroup');
    var bar2 = $('.content.cnt02 .bar');
    var btn2 = $('.content.cnt02 .artRight .article.a2');
    var artLen = artl.children().length;

    //컨텐츠4번 변수
    var artG4 = $('.content.cnt04 .artRight .artGroup2');
    var btn4 = $('.content.cnt04 .btns');
    var i = 0;
    var wd4 = $(window).width();
    var mv4 = 0;



    //컨텐츠1 무한루프
    //초기셋팅
    artG1.find('.article:last').prependTo(artG1);
    artG1.css({ marginLeft : '-34.14%'});

    //Left 버튼 눌렀을때
    btn1.find('.btnLeft').click(function(){
        //무한루프
        artG1.stop().animate({
            marginLeft : '0%'
        },500,function(){
            artG1.find('.article:last').prependTo(artG1);
            artG1.css({ marginLeft : '-34.14%'});
        });

        ind = artG1.find('.article:eq(0)').attr('data-num');

        //바
        bar1.find('.per').css({
            width : ind*25+'%',
            height : '7px',
            backgroundColor : '#0056a4',
            transition : 'all 0.5s'
        });
        if(ind == 4){
            bar1.find('.per').css({ display : 'none'});
            setTimeout(function(){
                bar1.find('.per').css({display : 'block'});
            },200);
        }

    });

    //Right 버튼 눌렀을때
    btn1.find('.btnRight').click(function(){
        //무한루프
        artG1.stop().animate({
            marginLeft : '-68.28%'
        },500,function(){
            artG1.find('.article:first').appendTo(artG1);
            artG1.css({ marginLeft : '-34.14%'});
        });

        ind = artG1.find('.article:eq(2)').attr('data-num');

        //바
        bar1.find('.per').css({
            width : ind*25+'%',
            height : '7px',
            backgroundColor : '#0056a4',
            transition : 'all 0.5s'
        });
        if(ind == 0){
            bar1.find('.per').css({ display : 'none'});
            setTimeout(function(){
                bar1.find('.per').css({display : 'block'});
            },200);
        }

    });


    //컨텐츠2 무한루프
    //초기셋팅
    artl.find('.img:last').prependTo(artl);
    artl.css({ marginLeft : '-100%'});

    artr.find('.image:last').prependTo(artr);
    artr.css({ marginLeft : '-33.33%'});

    
    //Left버튼 클릭시
    btn2.find('.btns>.btn:eq(0)').click(function(){
        i++;
        i = i%artLen;

        //좌측 큰 이미지 무한루프
        artl.stop().animate({
            marginLeft : '-200%'
        },500,function(){
            artl.find('.img:first').appendTo(artl);
            artl.css({ marginLeft : '-100%'});
            //페이지 숫자
            $('.txt').find('span:eq(0)').text(i+1);
        });

        //우측 작은이미지 무한루프
        artr.stop().animate({
            marginLeft : '-66.66%'
        },500,function(){
            artr.find('.image:first').appendTo(artr);
            artr.css({ marginLeft : '-33.33%'});
        });

        ind2 = artr.find('.image:eq(2)').attr('data-num');

        //바
        bar2.find('.per').css({
            width : ind2*25+'%',
            height : '7px',
            backgroundColor : '#0056a4',
            transition : 'all 0.5s'
        });
        if(ind2==0){
            bar2.find('.per').css({display : 'none'});
            setTimeout(function(){
                bar2.find('.per').css({display : 'block'});
            },200);
        }
    });

    //Right버튼 클릭시
    btn2.find('.btns>.btn:eq(1)').click(function(){
        i--;
        i = (artLen+i)%artLen;

        //좌측 큰 이미지 무한루프
        artl.stop().animate({
            marginLeft : '0%'
        },500,function(){
            artl.find('.img:last').prependTo(artl);
            artl.css({ marginLeft : '-100%'});
            //페이지 숫자
            $('.txt').find('span:eq(0)').text(i+1);
        });

        //우측 작은이미지 무한루프
        artr.stop().animate({
            marginLeft : '0%'
        },500,function(){
            artr.find('.image:last').prependTo(artr);
            artr.css({ marginLeft : '-33.33%'});
        });

        ind2 = artr.find('.image:eq(0)').attr('data-num');

        //바
        bar2.find('.per').css({
            width : ind2*25+'%',
            height : '7px',
            backgroundColor : '#0056a4',
            transition : 'all 0.5s'
        });
        if(ind2==4){
            bar2.find('.per').css({display : 'none'});
            setTimeout(function(){
                bar2.find('.per').css({display : 'block'});
            },200);
        }
        // var artl = $('.content.cnt02 .artLeft .article.a2 .imgGroup');
        // var artLen = artl.children().length;

    });

    
    //컨텐츠4 슬라이드
    
    if(wd4 > 1024){
        mv4 = -66;
    }else if(wd4 <= 1024 && wd4 > 420){
        mv4 = -73;
    }else{
        mv4 = -100;
    };
    
    //초기셋팅
    artG4.find('.article:last').prependTo(artG4);
    artG4.css({ marginLeft : mv4+'%' });

    //Left버튼 클릭시
    btn4.find('.btnLeft').click(function(){
        //무한루프
        artG4.stop().animate({
            marginLeft : '0%'
        },500,function(){
            artG4.find('.article:last').prependTo(artG4);
            artG4.css({ marginLeft : mv4+'%' });
        })
    });

    //Right버튼 클릭시
    btn4.find('.btnRight').click(function(){
        //무한루프
        artG4.stop().animate({
            marginLeft : 2*mv4+'%'
        },500,function(){
            artG4.find('.article:first').appendTo(artG4);
            artG4.css({ marginLeft : mv4+'%' });
        })
    });
    

    //컨텐츠4 동영상 재생
    //동영상 썸네일 클릭시 영상 재생
    artG4.find('.article>.image>.videoBox>video').css({ opacity : '0'});
    
    artG4.find('.article').click(function(){

        $(this).find('.videoBox>video').css({
            opacity : '1',
            zIndex : '1'
        });
          
    });

    //버튼클릭시 영상 멈춤
    btn4.click(function(){

        artG4.find('.article>.image>.videoBox>video').css({
            opacity : '0'
        });
          
    });


    //투탑
    $('.totop').click(function(){
        $('html,body').stop().animate({ scrollTop : 0 },500);
    });

});