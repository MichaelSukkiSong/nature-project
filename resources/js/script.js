
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
    })



    // click button and scroll to dest
    $('.js--scroll-to-photos').click(function() {
        $('html, body').animate({scrollTop: $('.js--photos').offset().top}, 1000);
    });

});






