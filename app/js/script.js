$(document).ready(function(){
    $('.product').mouseover(function(){
        $(this).find('.btn').show();
    });

    $('.product').mouseleave(function(){
        $(this).find('.btn').hide();
    });

});