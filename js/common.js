$(function(){
    //헤더는 inc에서 따로 불러오므로 헤더안에 로딩되는것들은 콜백함수 안에 넣어야함.
    
    $('.hdr').load('./inc/header.html',function(){
        //헤더에서 발생될 이벤트들
    });

    $('.ftr').load('./inc/footer.html',function(){
           //푸터에서 발생될 이벤트들
    });
});