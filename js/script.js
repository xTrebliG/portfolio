$('#downarrow').hide();

$(document).ready(function(){

    $('#fullpage').fullpage({
        scrollingSpeed: 500,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage']

    });

    nameSlideRight();
    arrowFadeIn();
    //addBgColor();

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




    })

}

function addBgColor(){
        $('#sec1h1').delay(5000).css('background-color', "rgba(255, 239, 213, .7)")

}

function arrowFadeIn(){
    $(window).load(function(){
        $('#downarrow').fadeIn(8000)

    })

}