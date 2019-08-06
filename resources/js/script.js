
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



    // magnific popup
    $('#open-popup').magnificPopup({
        items: [
          {
            src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Peter_%26_Paul_fortress_in_SPB_03.jpg/800px-Peter_%26_Paul_fortress_in_SPB_03.jpg',
            title: 'Peter & Paul fortress in SPB'
          },
          {
            src: 'https://vimeo.com/123123',
            type: 'iframe' // this overrides default type
          },
          {
            src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
            type: 'inline'
          },
          {
            src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
            type: 'inline'
          },
          {
            src: '#my-popup', // CSS selector of an element on page that should be used as a popup
            type: 'inline'
          }
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is a default type
    });




});



