$(function() {
  $('.guests-slider .ui-slider').slider({
    range: "min",
    min: 1,
    max: 100,
    slide: function(event, ui) {
      $('.guests-slider .guests').text(ui.value + ' People');
    }
  });

  $('.how-long-slider .ui-slider').slider({
    range: "min",
    min: 1,
    max: 5,
    slide: function(event, ui) {
      $('.how-long-slider .long').text(ui.value + ' Hours');
    }
  });

  $('#calendar-1').datepicker();
  $('#calendar-2').datepicker();
  $('#calendar-3').datepicker();
  $('#calendar-4').datepicker();
});