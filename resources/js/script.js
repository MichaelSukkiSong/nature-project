
var waypoints = $('.js--intro').waypoint(function(direction) {
    if (direction == 'down') {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}, {
  offset: '25%'
})

