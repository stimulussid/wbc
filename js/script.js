(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 1) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
		$('.mobile-menu').append('<div class="close-btn"><span class="icon flaticon-cancel-music"></span></div>');
		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	//Shedule Block
	if ($('.schedule-block').length) {
		$('.schedule-block.active').find('.lower-content').slideDown();

		$('.schedule-block .toggle-btn').on('click', function() {
			$(this).parents('.schedule-block').toggleClass('active');
			$(this).parents('.schedule-block').find('.lower-content').slideToggle(400);
			$(this).parents('.schedule-block').siblings().find('.lower-content').slideUp(400);
			$(this).parents('.schedule-block').siblings().removeClass('active');
		});
	}

	//Last Date
	if ($('.date-btn').length) {
		var last_date = $('.date-btn').attr('data-last-date');
		$('.date-btn').on('click', function() {
			$(this).html(last_date);
		});
	}

	
	
	//Search Popup
	if($('#search-popup').length){
		
		//Show Popup
		$('.search-box-btn').on('click', function() {
			$('#search-popup').addClass('popup-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
	            $('#search-popup').removeClass('popup-visible');
	        }
	    });
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function() {
			$('#search-popup').removeClass('popup-visible');
		});
	}
	
	
	
		// Banner Carousel / Owl Carousel 
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			animateOut: 'fadeOut',
		    animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout:5000,
			navText: [ '<span class="fa fa-angle-left">', '<span class="fa fa-angle-right">' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		}); 
	}

	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}

	// Gallery  Carousel
	if ($('.gallery-carousel').length) {
		$('.gallery-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				767:{
					items:3
				},
				800:{
					items:4
				},
				1200:{
					items:5
				}
			}
		});    		
	}

	//Clients Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			lazyLoad: true,
			smartSpeed: 700,
			autoplay: true,
			navText: [ '<span class="la la-angle-left"></span>', '<span class="la la-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				768:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:5
				}
			}
		});    		
	}

	//Parallax Scene for Icons
	if($('.parallax-scene-1').length){
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-2').length){
		var scene = $('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-3').length){
		var scene = $('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-4').length){
		var scene = $('.parallax-scene-4').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-5').length){
		var scene = $('.parallax-scene-5').get(0);
		var parallaxInstance = new Parallax(scene);
	}

	//Masonary
	function enableMasonry() {
		if($('.masonry-items-container').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-items-container');
	
			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth :1
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.on('resize', function(){

				$container.isotope({ 
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}
	
	enableMasonry();
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}

	//Event Countdown Timer
	if($('.time-countdown').length){  
		$('.time-countdown').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Second</div>'));
		});
	 });
	}

	if($('.cs-countdown').length){
	   $(function(){
		    $('[data-countdown]').each(function() {
		   var $this = $(this), finalDate = $(this).data('countdown');
		   $this.countdown(finalDate, function(event) {
		     $this.html(event.strftime('%D days %H:%M:%S'));
		   });
		 });
		});

	   $('.cs-countdown').countdown('').on('update.countdown', function(event) {
		  var $this = $(this).html(event.strftime('<div><span>%m</span><h6>Months</h6></div> <div><span>%D</span><h6>days</h6></div> <div><span>%H</span><h6>Hours</h6></div> <div><span>%M</span><h6>Minutes</h6></div> <div><span>%S</span><h6>Seconds</h6></div>'));
		});
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
	});	

})(window.jQuery);

(function () {
	"use strict";
  
	var carousels = function () {
	  $(".owl-carousel1").owlCarousel({
		loop: true,
		center: true,
		margin: 0,
		responsiveClass: true,
		nav: false,
		responsive: {
		  0: {
			items: 1,
			nav: false
		  },
		  680: {
			items: 2,
			nav: false,
			loop: false
		  },
		  1000: {
			items: 3,
			nav: true
		  }
		}
	  });
	};
  
	(function ($) {
	  carousels();
	})(jQuery);
})(window.jQuery);
  

var mainFunction =
{
    elements: {
        container: ".container",
        containerInner: ".container-inner",
        videoPlayerContainer: ".video-player-container",
        videoContainer: ".video-container",
        playerContainer: ".player-container",
        mediaVideo: "#media-video",
        playControl: ".play-control",
        playButton: ".play-button",
        pauseButton: ".pause-button",
        volumeControl: ".volume-control",
        volumeButton: ".volume-button",
        volumeButtonMute: ".volume-button-mute",
        progress: ".progress",
        progressOver: ".progress-over",
        progressHidden: ".progress-hidden",
        progressBackground: ".progress-background",
        indicator: ".indicator",
        fullScreenButton: ".fullscreen-button"
    },

    isPlay: false,
    isVolume: true,
    isEnd: false,
    progressBarHeight: 100,

    init: function () {
        mainFunction.defaultSettings();
        mainFunction.clickSettings();
        mainFunction.playControlVideo();
        mainFunction.volumeControlVideo();
        mainFunction.progressControlVideo();
        mainFunction.mouseHideControl();
    },

    defaultSettings: function () {

        $(mainFunction.elements.mediaVideo)[0].controls = false;

        $(window).on("resize", onResize);

        function onResize() {
            $(mainFunction.elements.progress).width($(mainFunction.elements.playerContainer).width() - 223);
            $(mainFunction.elements.progressBackground).width($(mainFunction.elements.playerContainer).width() - 223 - 40);
            $(mainFunction.elements.progressHidden).width($(mainFunction.elements.playerContainer).width() - 223 - 40);
            mainFunction.progressBarHeight = $(mainFunction.elements.playerContainer).width() - 223 - 40;
            $(mainFunction.elements.progressOver).css("width", String((mainFunction.progressBarHeight / $(mainFunction.elements.mediaVideo)[0].duration) * $(mainFunction.elements.mediaVideo)[0].currentTime));
        }

        onResize();

    },

    clickSettings: function () {
        $(mainFunction.elements.playControl).on("click", mainFunction.playControlVideo);
        $(mainFunction.elements.volumeControl).on("click", mainFunction.volumeControlVideo);
        $(mainFunction.elements.mediaVideo).on("click", mainFunction.playControlVideo);
        $(mainFunction.elements.fullScreenButton).on("click", mainFunction.fullScreenControl);
        $("body").on("keyup", function (e) { if (e.which == 27) { mainFunction.exitFullScreen(); } });
    },

    fullScreenControl: function () {

        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
                mainFunction.onFullScreen();
            }
            else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
                mainFunction.onFullScreen();
            }
            else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
                mainFunction.onFullScreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                mainFunction.onFullScreen();
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                mainFunction.exitFullScreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
                mainFunction.exitFullScreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
                mainFunction.exitFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
                mainFunction.exitFullScreen();
            }
        }
    },

    onFullScreen: function () {

        $(mainFunction.elements.progressOver).css("width", String((mainFunction.progressBarHeight / $(mainFunction.elements.mediaVideo)[0].duration) * $(mainFunction.elements.mediaVideo)[0].currentTime));
        $(mainFunction.elements.container).css("display", "block");
        $(mainFunction.elements.videoPlayerContainer).width("100%");
        $(mainFunction.elements.videoPlayerContainer).height("100%");
        $(mainFunction.elements.videoContainer).height("calc(100% - 40px)");
        $(mainFunction.elements.progress).width($(mainFunction.elements.playerContainer).width() - 223);
        $(mainFunction.elements.progressBackground).width($(mainFunction.elements.playerContainer).width() - 223 - 40);
        $(mainFunction.elements.progressHidden).width($(mainFunction.elements.playerContainer).width() - 223 - 40);
        mainFunction.progressBarHeight = $(mainFunction.elements.playerContainer).width() - 223 - 40;
        $(".container-inner").css("display", "none");

    },

    exitFullScreen: function () {

        $(mainFunction.elements.container).css("display", "-webkit-box");
        $(mainFunction.elements.container).css("display", "-moz-box");
        $(mainFunction.elements.container).css("display", "-ms-flexbox");
        $(mainFunction.elements.container).css("display", "-webkit-flex");
        $(mainFunction.elements.container).css("display", "flex");
        $(mainFunction.elements.videoPlayerContainer).width("500");
        $(mainFunction.elements.videoPlayerContainer).height("350");
        $(mainFunction.elements.videoContainer).height("310");
        $(mainFunction.elements.progress).width($(mainFunction.elements.playerContainer).width() - 220);
        $(mainFunction.elements.progressBackground).width($(mainFunction.elements.playerContainer).width() - 220 - 40);
        $(mainFunction.elements.progressHidden).width($(mainFunction.elements.playerContainer).width() - 220 - 40);
        mainFunction.progressBarHeight = $(mainFunction.elements.playerContainer).width() - 220 - 40;
        $(mainFunction.elements.progressOver).css("width", String((mainFunction.progressBarHeight / $(mainFunction.elements.mediaVideo)[0].duration) * $(mainFunction.elements.mediaVideo)[0].currentTime));
        $(".container-inner").css("display", "inherit");

    },

    // mouseHideControl: function () {

    //     var mouseHide = setTimeout(onMouseHide, 3000);

    //     $(mainFunction.elements.containerInner).on("mousemove", function () {

    //         clearTimeout(mouseHide);

    //         onMouseShow();

    //     });

    //     $(mainFunction.elements.containerInner).on("mousemoveend", function () {

    //         clearTimeout(mouseHide);

    //         mouseHide = setTimeout(onMouseHide, 3000);

    //     });

    //     function onMouseHide() { $("body").css("cursor", "none"); }

    //     function onMouseShow() { $("body").css("cursor", "inherit"); }

    // },

    playControlVideo: function () {
        if (mainFunction.isPlay) { $(mainFunction.elements.mediaVideo)[0].play(); } else { $(mainFunction.elements.mediaVideo)[0].pause(); }
        $(mainFunction.elements.playButton).css("display", ((mainFunction.isPlay) ? "none" : "table-cell"));
        $(mainFunction.elements.pauseButton).css("display", ((!mainFunction.isPlay) ? "none" : "table-cell"));
        mainFunction.isPlay = !mainFunction.isPlay;
        mainFunction.isEnd = false;
    },

    volumeControlVideo: function () {
        $(mainFunction.elements.mediaVideo)[0].muted = !mainFunction.isVolume;
        $(mainFunction.elements.volumeButtonMute).css("display", ((mainFunction.isVolume) ? "none" : "table-cell"));
        $(mainFunction.elements.volumeButton).css("display", ((!mainFunction.isVolume) ? "none" : "table-cell"));
        mainFunction.isVolume = !mainFunction.isVolume;
    },

    progressControlVideo: function () {

        var mouseX = 0;
        var isDown = false;
        var currentMinute = 0;
        var currentSecond = 0;
        var mediaPlayer = $(mainFunction.elements.mediaVideo)[0];

        mediaPlayer.addEventListener("timeupdate", onProgressVideo, false);

        function onProgressVideo() {
            $(mainFunction.elements.progressOver).css("width", String((mainFunction.progressBarHeight / mediaPlayer.duration) * mediaPlayer.currentTime));
            videoEndControl();
            setIndicator(mediaPlayer.currentTime, mediaPlayer.duration);
        }

        function videoEndControl() {
            if (mediaPlayer.currentTime >= mediaPlayer.duration) {
                mainFunction.isPlay = false;
                mainFunction.playControlVideo();
                mainFunction.isEnd = true;
            }
        }

        function setIndicator(current, duration) {
            var durationMinute = Math.floor(duration / 60);
            var durationSecond = Math.floor(duration - durationMinute * 60);
            var durationLabel = durationMinute + ":" + durationSecond;
            currentSecond = Math.floor(current);
            currentMinute = Math.floor(currentSecond / 60);
            currentSecond = currentSecond - (currentMinute * 60);
            currentSecond = (String(currentSecond).length > 1) ? currentSecond : (String("0") + currentSecond);
            var currentLabel = currentMinute + ":" + currentSecond;
            var indicatorLabel = currentLabel + " / " + durationLabel;
            $(mainFunction.elements.indicator).text(indicatorLabel);
        }

        $(mainFunction.elements.progressHidden).on("mousemove", onProgressHiddenMouseMove);

        function onProgressHiddenMouseMove(e) {
            var parentOffset = $(this).parent().offset();
            mouseX = Math.floor(e.pageX - parentOffset.left - 20);
            if (isDown) { mediaPlayer.currentTime = (mediaPlayer.duration / mainFunction.progressBarHeight) * mouseX; }
        }

        $(mainFunction.elements.progressHidden).on("click", function () { if (!isDown) { mediaPlayer.currentTime = (mediaPlayer.duration / mainFunction.progressBarHeight) * mouseX; } });

        $(mainFunction.elements.progressHidden).on("mousedown", onProgressHiddenMouseDown);

        function onProgressHiddenMouseDown() {

            isDown = true;

            mediaPlayer.currentTime = (mediaPlayer.duration / mainFunction.progressBarHeight) * mouseX;

            $(mainFunction.elements.mediaVideo)[0].pause();
        }

        $(mainFunction.elements.progressHidden).on("mouseup", function () { isDown = false; if (!mainFunction.isEnd) { mainFunction.isPlay = true; mainFunction.playControlVideo(); } });

        $(mainFunction.elements.progressHidden).on("mouseout", function () { isDown = false; if (!mainFunction.isEnd) { mainFunction.isPlay = true; mainFunction.playControlVideo(); } });

    }
};

$(document).on("ready", mainFunction.init);

(function ($) {
    var timeout;
    $(document).on('mousemove', function (event) {
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
            $(event.target).trigger('mousemoveend');
        }, 100);
    });
}(jQuery));

$(document).on("ready", mainFunction.init);

(function($) {
    // Initialize Slick Carousel
	$(document).ready(function() {
        var owl = $('.speaker-carousel');

        owl.owlCarousel({
            items: 3,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 2000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 5
                }
            },
            afterAction: function(current) {
                // Remove center class from all items
                $('.owl-item').removeClass('center');

                // Add center class to the current center item
                $('.owl-item').eq(current).addClass('center');
            }
        });
    });
}(jQuery));


