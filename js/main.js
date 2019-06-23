$(document).ready(function () {
    $('.card').mouseover(function () { 
        $(this).addClass('card-hover');
        $(this).find('h3').css('background-color','#e94f37');
    });
    $('.card').mouseout(function () { 
        $(this).removeClass('card-hover');
        $(this).find('h3').css('background-color','#3f88c5');
    });
});