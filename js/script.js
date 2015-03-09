hideMeNow();

$(document).ready(function(){

    $('#fullpage').fullpage({
        scrollingSpeed: 500,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage']

    });


    onHover();
    //nameSlideRight();
    //arrowFadeIn();
    //addBgColor();

});

function hideMeNow(){

    $('#downarrow').hide();
    $('#skills_ul').hide();
    $('#connect_ul').hide();
    $('#more_ul').hide();

}

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


function onHover(){
    $('#skills').hover(
    function() {
        $(this).children('p:nth-child(3)').fadeOut(500).hide();

        $('#s2h1').animate({
            marginTop: '-5%'
        }).append('<hr>');

        $(this).children('p:nth-child(2)').animate({
            marginTop: '-10%',
            opacity: 0
        });

        $('#skills_ul').fadeIn(1000);

    },
    function(){
        $('#skills_ul').fadeOut(300);
        $(this).children('p:nth-child(3)').fadeIn(1000);
        $(this).children('p:nth-child(2)').fadeIn(1200);
        $(this).css('white-space', 'pre-line');
        $('#s2h1').animate({
            marginTop: '5%'
        }).children('hr').fadeOut(300);
    });
}