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

myapp.directive('imageGallery', [function() {
  return {
    restrict: 'EA',

    link: function(scope, element, attrs) {
      var $carousel = element.find('.carousel');
      var $imgs = element.find('.item img');
      var $caption = element.find('.caption');
      var $bigImage = element.find('.big-image');

      $carousel.on('slid.bs.carousel', function(e) {
        var direction = e.direction;
        var $currentItem = element.find('.active');
        $imgs.removeClass('current');

        var $newImgs = $currentItem.find('img');

        if (direction == 'left')
          position = 0;
        else
          position = $newImgs.length - 1;

        $($newImgs[position]).addClass('current');
        $caption.html($($newImgs[position]).attr('alt'));
      });

      $($imgs[0]).addClass('current');
      $caption.html($($imgs[0]).attr('alt'));
      var src = $($imgs[0]).attr('src');
      $bigImage.attr('src', src);

      $imgs.on('click', function() {
        $imgs.removeClass('current');
        $(this).addClass('current');
        
        var src = $(this).attr('src');
        var caption = $(this).attr('alt');
        
        $caption.html(caption);
        $bigImage.attr('src', src);
      });
    }
  };
}]);