$(function () {

    let ht = $(window).height();
    $("section").height(ht);


    $(window).on('resize', function () {
        ht = $(window).height();
        $("section").height(ht);
    });


    $("section").on("mousewheel",function(e,delta){
        if(delta>0){
            var prev =$(this).prev().offset().top;
            $("html,body").stop().animate({"scrollTop":prev},500);

        }else if(delta<0){
            var next= $(this).next().offset().top;
             $("html,body").stop().animate({"scrollTop":next},500);
        }
    });



    $(".menubar").click(function(e){
        e.preventDefault();
        $(".menu, .close").fadeIn();
        $(this).fadeOut();
    });


    $(".close").click(function(e){
        e.preventDefault();
        $(".menu, .close").fadeOut();
        $(".menubar").fadeIn();
    });

    $('.wrap3').bxSlider({
        auto: true,
        pagerCustom: '.pager',
        pager: true,
        touchEnabled : (navigator.maxTouchPoints > 0)
    });

    $(".wrap4 .right .phone").click(function(){
            var i = $(this).index();
           /*  console.log(i); */
           $(".modal").fadeIn().find(".modal_inner").eq(i).show();
    });

    $(".modal .modal_inner button").click(function(){
       $(".modal").fadeOut()
});

});