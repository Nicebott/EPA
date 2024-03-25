$(function() {

  var menuIcon = $(".menu-icon i");
  var verticalNav = $(".portfolio-vertical-nav");
  
  $(".menu-icon").on('click', function() {
    $(verticalNav).toggleClass("show-hide");
    if ($(menuIcon).hasClass("ion-navicon-round")) {
      $(menuIcon).removeClass("ion-navicon-round");
      $(menuIcon).addClass("ion-close-round");
    } else if ($(menuIcon).hasClass("ion-close-round")) {
      $(menuIcon).removeClass("ion-close-round");
      $(menuIcon).addClass("ion-navicon-round");
    }
  });

  $("figure").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

  $(".me").addClass("show");

  $(document).click(function() {
    $(verticalNav).removeClass("show-hide");
    $(menuIcon).removeClass("ion-close-round");
    $(menuIcon).addClass("ion-navicon-round");
  });

  $(".menu-icon, .portfolio-vertical-nav").click(function(e) {
    e.stopPropagation();
  });

  $(window).scroll(function() {
    var bottomOfWindow = $(window).scrollTop() + $(window).height();
    var experience = $('.experience');
    $(experience).each(function(i) {
      var bottomOfObject = $(this).offset().top + $(this).outerHeight();

      if (bottomOfWindow > bottomOfObject) {
        $(this).addClass("show-experience");
      }
    });
    var skillBar = $('.skills');
    $(skillBar).each(function(j) {
      var bottomOfSkill = $(this).offset().top + $(this).outerHeight() / 2;
      if (bottomOfWindow > bottomOfSkill) {
        function progress(percent, $element) {
          var progressBarWidth = percent * $element.width() / 100;
          $element.find('div').animate({
            width: progressBarWidth
          }, 1200).html(percent / 10);
        }

        progress(80, $('#html-bar-progress'));
        progress(60, $('#css-bar-progress'));
        progress(40, $('#js-bar-progress'));
        progress(50, $('#jquery-bar-progress'));
        progress(10, $('#angular-bar-progress'));
        progress(40, $('#bootstrap-bar-progress'));
        progress(50, $('#susy-bar-progress'));
        progress(30, $('#git-bar-progress'));
      }
    });
  });
  
  $(".about-main-menu").on('click', function() {
    $(".portfolio-about-me").animatescroll({padding:75});    
  });
   
  $(".exp-main-menu").on('click', function() {
    $(".portfolio-experience").animatescroll({padding:75});    
  });
  
  $(".skills-main-menu").on('click', function() {
    $(".portfolio-skills").animatescroll({padding:75});    
  });
  
  $(".projects-main-menu").on('click', function() {
    $(".portfolio-projects").animatescroll({padding:75});    
  });
  
  $(".testimonials-main-menu").on('click', function() {
    $(".portfolio-testimonials").animatescroll({padding:75});    
  });
  
  $(".contact-main-menu").on('click', function() {
    $(".contact-me").animatescroll({padding:75});    
  });
});