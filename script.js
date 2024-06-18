$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.navbar-mobile').css('display','flex'); // Toggle visibility with a sliding animation
        $('.hamburger').hide();
        $('.cross').show();
    });
    $('.cross').click(function(){
        $('.navbar-mobile').css('display','none'); // Toggle visibility with a sliding animation
        $('.hamburger').show();
        $('.cross').hide();
    });

    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });

      $('.clk').click(function() {
        e.preventDefault();
        $(this).closest('.Products').css({'height':'500px', 'background-color': '#ffbbbb'} );
        $(this).hide();
        e.preventDefault();
      });

      $(document).ready(function(){
        $('.blog').slick({
            infinite: true,
            slidesToShow: 1, 
            slidesToScroll: 1,
            dots: true, 
            speed: 500,
            autoplay: true,
            arrows: false, 
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
});




