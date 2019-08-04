
$(document).ready(function() {

    // stick navigation
    var waypoints = $('.js--intro').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '25%'
    });



    // click button and scroll to dest (jquery)
    $('.js--scroll-to-photos').click(function() {
        $('html, body').animate({scrollTop: $('.js--photos').offset().top}, 1000);
    });


    // animation when scrolling (waypoint + animate.css)
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInDown');
    }, {
        offset: '80%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '65%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '65%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '65%'
    });

    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '65%'
    });


});






