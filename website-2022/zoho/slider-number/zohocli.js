$(document).ready(function () {

  $('.content-slider').slick({
    customPaging: function (slider, i) {
      var slidernav = $(slider.$slides[i]).data('slidernav');
      return '<a>' + slidernav + '</a>';
    },
    dots: true,
    speed: 5000,
    infinite: false,
    adaptiveHeight: true,
    pauseOnHover:false
  });

});


$('.toggle-button').click(function () {
  $('.toggle-content').toggle();
})