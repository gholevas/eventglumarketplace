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
  $('#calendar-5').datepicker();
  $('#calendar-aside').datepicker();
  $('#calendar-filter').datepicker();

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


  var $bgs = $('.bgs');

  function setFooterBackground(bgNumber) {
    var prev = $bgs.find('.bg');

    setTimeout(function () {
      prev.remove();
    }, 4100);

    var el = document.createElement('div');
    el.className += 'bg bg' + bgNumber;

    $bgs.append(el);

    setTimeout(function () {
      el.className += ' show';
    }, 20);
  }

  function footerBgRotating(interval) {
    var current = 1;

    setInterval(function () {
      setFooterBackground((current % 5) + 1);
      current++;
    }, interval);
  }

  footerBgRotating(8000);

  $('.widget-trigger').on('click', function() {
    $(this).parent().siblings().find('.widget-trigger').addClass('collapsed');
    var $el = $($(this).attr('data-target'));
    $el.siblings().removeClass('in');
  });
});