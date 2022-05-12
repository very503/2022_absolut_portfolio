$(function(){
   var prd1 = $('.cnt01 .artTop .article');
   var prdBtm1 = $('.artBtm .artGroup');
   var prd3  = $('.cnt03 .artBtm .article');
   var prdTop3 = $('.artTop .texts');
   var prd4  = $('.cnt04 .article');
   var prdMid = $('.artMid .texts');
   
   //컨텐츠1

   var wd = $(window).width();
   var mv = 0;

   if(wd > 1024){
       mv=400;
   
   }else if(wd > 420 && wd <= 1024){
       mv=280;
   }else{
       mv=220;
   };

   prd1.click(function(){
       var ind = $(this).index();
       prdBtm1.css('margin-top',ind*-mv+'px');

   });
   
   //컨텐츠3
   prd3.click(function(){
       var title3 = $(this).find('.image').text();
       var note3 = $(this).find('.texts').text();
       prdTop3.find('h3').text(title3);
       prdTop3.find('p').text(note3);
   });

   prd4.click(function(){
       var title4 = $(this).find('.image').text();
       var note4 = $(this).find('.texts').text();
       prdMid.find('h3').text(title4);
       prdMid.find('p').text(note4);
   });

   
   //투탑
   $('.totop').click(function(){
   $('html,body').stop().animate({ scrollTop : 0 },500);
});
   


});