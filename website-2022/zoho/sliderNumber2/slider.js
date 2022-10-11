$(document).ready(function() {
    var slickOpts = {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      easing: 'swing',
      speed: 900,
      dots: true,
      arrows:true,
      customPaging: function(slick, index) {
        return '<a>' + (index + 1) + '</a>';
      }
    };

    $('#carousel').slick(slickOpts);
  });
  