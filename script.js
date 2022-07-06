$(document).ready(function () {
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
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 575,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
      ]
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
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 575,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
      ]

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
            }
         },
         {
            breakpoint: 767,
            settings: {
               infinite: false,
               slidesToShow: 1.3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 575,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
      ]
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
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
      ]
   });
});