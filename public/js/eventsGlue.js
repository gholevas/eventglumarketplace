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
  };

  footerBgRotating(8000);
});