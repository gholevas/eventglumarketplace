myapp.directive('swapBgs', [function() {
  return {
    restrict: 'EA',

    link: function(scope, element, attrs) {
      function setFooterBackground(bgNumber) {
        var prev = element.find('.bg');

        setTimeout(function () {
          prev.remove();
        }, 4100);

        var el = document.createElement('div');
        el.className += 'bg bg' + bgNumber;

        element.append(el);

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
    }
  };
}]);

myapp.directive('widgetTrigger', [function() {
  return {
    restrict: 'EA',

    link: function(scope, element, attrs) {
      element.on('click', function() {
        element.parent().siblings().find('.widget-trigger').addClass('collapsed');
        var $el = $(element.attr('data-target'));
        $el.siblings().removeClass('in');
      });
    }
  };
}]);

myapp.directive('uiCalendar', [function() {
  return {
    restrict: 'EA',

    link: function(scope, element, attrs) {
      var $calendar = element.find('.cal');
      var $trigger = element.find('.calendar-trigger');
      
      $calendar.datepicker();

      $trigger.on('click', function() {
        $.datepicker._showDatepicker($calendar[0]);
      });
    }
  };
}]);