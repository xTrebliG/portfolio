$('#downarrow').hide();

$(document).ready(function(){

    $('#fullpage').fullpage(function(){
    });

    nameSlideRight();
    arrowFadeIn();

});

function nameSlideRight(){
    $(window).load(function(){
        $('#one').animate({
            opacity: 1,
            marginLeft: '80%'
        }, 1400);

        $('#two').animate({
            opacity: 1,
            marginLeft: '85%'
        }, 1500);

        //$('#webdev').css('margin-left', '95px')


    })

}


function arrowFadeIn(){
    $(window).load(function(){
        $('#downarrow').fadeIn(8000)

    })

}