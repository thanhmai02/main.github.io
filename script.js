$(document).ready(function () {
     showMenuMobile();
     fixedCheckAvailability();

     $('.slide1').slick({
          slidesToShow: 3,
          infinite: true,
          dots: true,
          arrows: false,
          responsive: [
               {
                    breakpoint: 991,
                    settings: {
                         slidesToShow: 3,
                         slidesToScroll: 1,
                    },
               },
               {
                    breakpoint: 767,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                    },
               },
               {
                    breakpoint: 575,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                    },
               },
          ],
     });

     $('.slide0').slick({
          slidesToShow: 6,
          infinite: true,
          dots: false,
          arrows: false,
          responsive: [
               {
                    breakpoint: 991,
                    settings: {
                         slidesToShow: 5,
                         slidesToScroll: 1,
                    },
               },
               {
                    breakpoint: 767,
                    settings: {
                         slidesToShow: 4,
                         slidesToScroll: 1,
                    },
               },
               {
                    breakpoint: 575,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                    },
               },
          ],
     });

     $('.main-infor').slick({
          slidesToShow: 3,
          infinite: true,
          dots: true,
          arrows: false,
          responsive: [
               {
                    breakpoint: 991,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                    },
               },
               {
                    breakpoint: 767,
                    settings: {
                         infinite: false,
                         slidesToShow: 1.3,
                         slidesToScroll: 1,
                    },
               },
               {
                    breakpoint: 575,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                    },
               },
          ],
     });
     $('.natural').slick({
          slidesToShow: 3,
          infinite: true,
          dots: true,
          arrows: false,
          responsive: [
               {
                    breakpoint: 991,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                    },
               },
               {
                    breakpoint: 767,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                    },
               },
          ],
     });

     //scroll header
     $(window).scroll(function () {
          const windowScrollTop = $(this).scrollTop();
          if (windowScrollTop > 0) {
               $('header').addClass('header-scroll');
          } else {
               $('header').removeClass('header-scroll');
          }
     });

     function showMenuMobile() {
          $('.navigation-menu-toggle').click(function () {
               $('html').addClass('no-scroll');
               $('.menu-mobile-wrapper').addClass('menu-mobile-show');
          });
          $('.menu-mobile-overlay').click(function () {
               $('.menu-mobile-wrapper').removeClass('menu-mobile-show');
               setTimeout(function () {
                    $('html').removeClass('no-scroll');
               }, 500);
          });
          $('.menu-mobile-close').click(function () {
               $('.menu-mobile-wrapper').removeClass('menu-mobile-show');
               setTimeout(function () {
                    $('html').removeClass('no-scroll');
               }, 500);
          });
          $(window).resize(function () {
               if ($('.menu-mobile-wrapper').hasClass('menu-mobile-show')) {
                    $('.menu-mobile-wrapper').removeClass('menu-mobile-show');
                    $('html').removeClass('no-scroll');
               }
          });
     }

     function fixedCheckAvailability() {
          $(window).scroll(function () {
               var bottomWindow = window.pageYOffset + window.innerHeight;
               var topFooter = $('footer').offset().top;
               var homeCheckavailability = $('.calen');
               if (bottomWindow >= topFooter) {
                    homeCheckavailability.addClass('d-none');
               } else if (homeCheckavailability.hasClass('d-none')) {
                    homeCheckavailability.removeClass('d-none');
               }
          });
     }


     AOS.init({disable: 'mobile'});
});
