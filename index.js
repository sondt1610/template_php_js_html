$(function () {
    // $("#target").click(function () {
    //     alert("Handler for .click() called.");
    // });
    var docao = $(window).height();
    //console.log(docao);
    $('.top1').css({'height':docao});
    $(window).resize(function () {
        var docao = $(window).height();
        $('.top1').css({ 'height': docao });
    });
    $('.navbar-nav li:nth-child(2) a').click(function(){
        // alert('fsd');
        $('html, body').animate({
            scrollTop: 700
        }, 700);
        return false;
    });
    $('.nutmenu').click(function () {
        $('.menuphai').addClass('ra');
        return false;
    });
    $('.tat').click(function () {
        $('.menuphai').removeClass('ra');
        return false;
    });
    $('.top1 .btn-default').click(function () {
        $('html, body').animate({
            scrollTop: $('.top2').offset().top
        }, $('.top2').offset().top);
        return false;
    });
})