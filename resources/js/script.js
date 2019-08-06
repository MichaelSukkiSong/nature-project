
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
            src: 'https://ipt.imgix.net/196438/x/0/black-sands-meet-the-powerful-atlantic-ocean-on-iceland-s-south-coast.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-2.3.0&w=750',
            title: 'Black Sand Beaches'
          },
          {
            src: 'https://ipt.imgix.net/196440/x/0/mount-vestrahorn-rises-up-over-the-stokksnes-peninsula-here-you-can-see-it-reflected-in-the-shiny-black-sands.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-2.3.0&w=750',
            title: 'Vestrahorn Mountain'
          },
          {
            src: 'https://ipt.imgix.net/196441/x/0/the-chunks-of-ice-at-iceland-s-diamon-beach-are-guaranteed-to-impress-whatever-the-time-of-day.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-2.3.0&w=750',
            title: 'Jokulsarlon Glacier Lagoon & Diamond Beach'
          },
          {
            src: 'https://ipt.imgix.net/196439/x/0/the-diamond-beach-is-a-haven-for-landscape-photographers.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-2.3.0&w=750',
            title: 'Vatnajokull National Park'
          },
          {
            src: 'https://ipt.imgix.net/196436/x/0/the-glorious-colours-of-midnight-sun-in-iceland-here-captured-in-reykjavik.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-2.3.0&w=750',
            title: 'Arrival'
          },
          {
            src: 'https://ipt.imgix.net/199435/x/0/the-mighty-dettifoss-waterfall-is-often-considered-the-most-powerful-in-the-whole-of-europe.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-2.3.0&w=750',
            title: 'Dettifoss Waterfall'
          },
          {
            src: 'https://ipt.imgix.net/196444/x/0/the-most-remote-region-in-the-whole-of-iceland-is-arguably-the-highlands.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-2.3.0&w=750',
            title: 'To Reykjavik Through the Highlands'
          },
          {
            src: 'https://ipt.imgix.net/196437/x/0/there-is-a-large-cavern-behind-seljalandsfoss-waterfall-allowing-visitors-to-walk-the-whole-way-around-it.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-2.3.0&w=750',
            title: 'South Coast Waterfalls'
          }
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is a default type
    });




});



