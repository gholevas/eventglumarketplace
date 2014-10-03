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

  $('.budget-slider').slider({
    range: true,
    min: 0,
    max: 5000,
    values: [1000, 2000],
    slide: function( event, ui ) {
      $(".bg-text").text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });

  $('.bg-text').text( "$" + $('.budget-slider').slider( "values", 0 ) + " - $" + $('.budget-slider').slider( "values", 1 ) );

  $('.guests-slider-aside').slider({
    range: "min",
    min: 1,
    max: 100,
    value: 10,
    slide: function(event, ui) {
      $('.guests-text').text(ui.value + ' People');
    }
  });

  $('.guests-text').text($('.guests-slider-aside').slider('value') + ' People');

  $('.long-slider').slider({
    range: "min",
    min: 1,
    max: 5,
    value: 2,
    slide: function(event, ui) {
      $('.long-text').text(ui.value + ' Hours');
    }
  });

  $('.long-text').text($('.long-slider').slider('value') + ' Hours');
});