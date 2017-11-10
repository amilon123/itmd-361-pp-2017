$.noConflict();

(function($) {

  var doorbell = new Audio('media/doorbell.mp3');

  $('html').removeClass('no-js').addClass('js');

  $('#doorbell').on('click', function() {
    doorbell.play();
  });

  $(document).on('keypress', function(event) {
    if(event.key === 'd') {
      doorbell.play();
    }
  });
})(jQuery);
