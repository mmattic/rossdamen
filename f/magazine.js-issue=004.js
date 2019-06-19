  // Need to refactor this for mobile device file sizes.
  var issueImgs = {
    "issue04":  [
      "https://uncrate.com/img/magazine/04/04-ronin-rezvani.jpg",   
      "https://uncrate.com/img/magazine/04/04-gucci.jpg",
      "https://uncrate.com/img/magazine/04/04-rezvani-tank.jpg",    
      "https://uncrate.com/img/magazine/04/04-amangari.jpg",   
      "https://uncrate.com/img/magazine/04/04-steak.jpg",
      "https://uncrate.com/img/magazine/04/04-folly.jpg",
      "https://uncrate.com/img/magazine/04/04-tudor.jpg",     
      "https://uncrate.com/img/magazine/04/04-hauly-bikes.jpg",     
       
    ],
    "issue03":  [
      "https://uncrate.com/img/magazine/03/03-b-1.jpg",
      "https://uncrate.com/img/magazine/03/03-b-2.jpg",
      "https://uncrate.com/img/magazine/03/03-b-3.jpg",      
      "https://uncrate.com/img/magazine/03/03-b-4.jpg",
      "https://uncrate.com/img/magazine/03/03-b-5.jpg",      
      "https://uncrate.com/img/magazine/03/03-b-6.jpg",  
      "https://uncrate.com/img/magazine/03/03-b-7.jpg",      
      "https://uncrate.com/img/magazine/03/03-b-8.jpg", 
    ],
    "issue02":  [
      "https://uncrate.com/img/magazine/02/02-cigars-b.jpg",
      "https://uncrate.com/img/magazine/02/02-cuba-b.jpg",
      "https://uncrate.com/img/magazine/02/02-jfk-b.jpg",
      "https://uncrate.com/img/magazine/02/02-rum-b.jpg",
      "https://uncrate.com/img/magazine/02/02-mercedes-1-b.jpg",
      "https://uncrate.com/img/magazine/02/02-mercedes-2-b.jpg",
      "https://uncrate.com/img/magazine/02/02-newman-b.jpg",
      "https://uncrate.com/img/magazine/02/02-shoe-b.jpg",
      "https://uncrate.com/img/magazine/02/02-golf-b.jpg",
      "https://uncrate.com/img/magazine/02/02-dunes-b.jpg",
      "https://uncrate.com/img/magazine/02/02-machetes-b.jpg",
    ],
    "issue01":  [
      "https://uncrate.com/img/magazine/m1b.jpg",
      "https://uncrate.com/img/magazine/m2b.jpg",
      "https://uncrate.com/img/magazine/m3b.jpg",
      "https://uncrate.com/img/magazine/m4b.jpg",
      "https://uncrate.com/img/magazine/m5b.jpg",
      "https://uncrate.com/img/magazine/m6b.jpg",
      "https://uncrate.com/img/magazine/m7b.jpg",
      "https://uncrate.com/img/magazine/m8b.jpg",
      "https://uncrate.com/img/magazine/m12b.jpg",
      "https://uncrate.com/img/magazine/m16b.jpg",
      "https://uncrate.com/img/magazine/m19b.jpg"
    ],
    "issue00":  [
      "https://uncrate.com/img/magazine/m16b.jpg",
      "https://uncrate.com/img/magazine/m17b.jpg",
      "https://uncrate.com/img/magazine/m18b.jpg",
      "https://uncrate.com/img/magazine/m19b.jpg"
    ]
  }

  function preloadImages(imageArray){
    $.each(issueImgs, function( index, value ) {
      $.each(value, function( i, v ) {
        var magImg = new Image();
        //console.log(v);
        magImg.src = v;      
      });
    }); 
  }

  preloadImages(issueImgs);

  $(document).ready(function () {
    var currentIssueId = "04";
    
    // Setup our spinner for use.
    $.fn.spin.presets.spinner = {
      lines: 0, // The number of lines to draw
      length: 0, // The length of each line
      width: 2, // The line thickness
      radius: 12, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      speed: 1.2, // Rounds per second
      trail: 84, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      top: '32%',
      className: 'smooth-spinner' // The CSS class to assign to the spinner
    }

  $('#magazine-swiper-wrapper').spin('spinner', '#ffffff');

  var swiper = new Swiper ('.swiper-container', {
    // centeredSlides: true,
    paginationClickable: false,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    keyboardControl: true,
    spaceBetween: 300,
    slidesPerView: 1,
    loop: true,
    onSlideChangeEnd: function(){
      var upcomingSlide = $('.swiper-slide-next').next(),
      upcomingSlideSrc = $(upcomingSlide).find('img').data('src');
      if ($(upcomingSlide).hasClass('swiper-preload')){
        $('img', upcomingSlide).attr('src', upcomingSlideSrc).addClass('preloaded');
      }
    }
  });

  var appendNumber = 4;
  setTimeout(function(){
    swiper.onResize();
  
    // $('#fixed-header').addClass('fadeInDown fixed-header-shown');
    $('.swiper-container').addClass('fadeIn');
    $('#magazine-swiper-wrapper').spin(false);
  }, 1200);

  // Switch between previews
  $(".view-issue-details").click(function(e) {
    e.preventDefault();
    var issueId = $(this).data("issue-number");


    if (issueId != currentIssueId) {
      $(".intro-copy").hide();
      $('#intro-copy-' + issueId).fadeIn();
      $('#magazine-swiper-wrapper').attr("data-slider-number",issueId);
      
      
      swiper.removeAllSlides();
    
      $.each(issueImgs["issue"+issueId], function(index,value) {
        swiper.appendSlide([
            '<div class="swiper-slide"><img src="' + value + '" class="magazine-slide-image"></div>',
        ]);
      });
      swiper.slideTo(1);
      
      currentIssueId = issueId;    
    }

  })
});