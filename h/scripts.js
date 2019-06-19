// Globals
var bpMobileActive = false,
	bpTabletActive = false,
	bpMobile = '(max-width: 480px)',
	bpTablet = '(max-width: 768px)';

// Main
$(document).ready(function () {
	// Responsive handling
	responsiveDetect();

	$(window).resize(function () {
		responsiveDetect();
	});

	// Responsive nav toggle
	$('.btn-icon').click(function (e) {
		e.preventDefault();

		var thisButton = $(this),
			target = thisButton.data('target');

		if (thisButton.hasClass('active')) {
			thisButton.removeClass('active');
			$('.' + target).hide();
		} else {
			$('.btn-icon').removeClass('active');
			$('.nav-pane').hide();
			thisButton.addClass('active');
			$('.' + target).show();
		}
	});

	// Newsletter Sticky Reset
	handleNewsletterNav();

	$(window).scroll(function () {
		handleNewsletterNav();
	});

	// Active Arrow
	$('.top-level').hover(function () {
		$(this).addClass('primary-active');
	},
	function () {
		$(this).removeClass('primary-active');
	});

	$('.sub-nav').hover(function () {
		$(this).prev('.top-level').addClass('primary-active');
	},
	function () {
		$(this).prev('.top-level').removeClass('primary-active');
	});

	// Tag buttons act like anchor tags
	$('https://www.freshbooks.com/blog/wp-content/themes/freshtheme/assets/js/button.tag').click(function (e) {
		e.preventDefault();

		var url = $(this).data('href');
		window.location.href= url;

	});

	// Search on Enter (Nav)
	$(document).keypress(function(e) {
		if(e.which == 13) {
			if ($('.search-field').is(":focus")) {
				handleSearchQuery('.search-field');
			}
		}
	});

	// Search on Enter (Body)
	$(document).keypress(function(e) {
		if(e.which == 13) {
			if ($('.input-page-search').is(":focus")) {
				handleSearchQuery('.input-page-search');
			}
		}
	});

	// Search on Click (Body)
	$('.btn-page-search').click(function(e) {
		handleSearchQuery('.input-page-search');
	});

	// Desktop Nav search
	$('.search-form.search-wrap').submit(function(e) {
		e.preventDefault();
		handleSearchQuery('.search-form.search-wrap .search-field');
	});

	// Mobile Nav search
	$('.mobile-search form').submit(function(e) {
		e.preventDefault();
		handleSearchQuery('.input-mobile-search');
	});

	// Search Window Toggle
	$('.search-nav-item .btn-search').click(function (e) {
		e.preventDefault();
		$('.search-nav-item .sub-nav').show();
		$(this).addClass('active');
	});

	// Close search
	$('.btn-close-search').click(function (e) {
		e.preventDefault();
		$('.search-nav-item .sub-nav').hide();
		$('.search-nav-item .btn-search').removeClass('active');
	});


	//// Ad Unit
	$('.ad-unit').click(function(e) {
		e.preventDefault();
		var adURL = $(this).children('.ad').data('url');

		window.open(adURL, '_blank');
	});


	//// Social Sharing
	// FaceBook Article Pullquote Share
	$('.pull-fb').click(function(e) {
		e.preventDefault();
		var text = '"' + $(this).parent('.pull-quote').text() + '"';

		FB.ui({
			method: 'share',
			href: window.location.href,
			quote: text,
			hashtag: '#FreshBooks'
		}, function(response){});
	});

	// Twitter Article Pullquote Share
	$('.pull-tw').click(function(e) {
		e.preventDefault();

		var text = $(this).parent('.pull-quote').text(),
			url = encodeURIComponent(window.location.href);

		if (text.length > 98) {
			text = encodeURIComponent('"' + text.substring(0, 95) + '...' + '"');
		} else {
			text = encodeURIComponent('"' + $(this).parent('.pull-quote').text() + '"');
		}

		var shareURL = 'https://twitter.com/intent/tweet?text=' + text +'&url=' + url + '&via=freshbooks';

		popupCenter(shareURL, 'blank', 575, 300);



		console.log(shareURL);

		popupCenter(shareURL, 'blank', 575, 300);
	});

	// Generic Social
	$('.generic-fb').click(function(e) {
		e.preventDefault();

		FB.ui({
			method: 'share',
			href: window.location.href,
			hashtag: '#FreshBooks'
		}, function(response){});
	});

	$('.generic-tw').click(function(e) {
		e.preventDefault();

		var text = $('h1').text();
			url = encodeURIComponent(window.location.href);

		if (text.length > 100) {
			text = encodeURIComponent(text.substring(0, 97) + '...');
		} else {
			text = encodeURIComponent($('h1').text());
		}

		var shareURL = 'https://twitter.com/intent/tweet?text=' + text +'&url=' + url + '&via=freshbooks';

		popupCenter(shareURL, 'blank', 575, 300);
	});

	$('.generic-li').click(function(e) {
		e.preventDefault();

		var url = encodeURIComponent(window.location.href),
			shareURL = 'https://www.linkedin.com/cws/share?url=' + url;

		popupCenter(shareURL, 'blank', 575, 300);
	});

	$('.generic-g').click(function(e) {
		e.preventDefault();

		var url = encodeURIComponent(window.location.href),
			shareURL = 'https://plus.google.com/share?url=' + url;

		popupCenter(shareURL, 'blank', 400, 500);
	});

	$('.generic-fl').click(function (e) {
		e.preventDefault();

		var url = encodeURIComponent(window.location.href),
			title = encodeURIComponent($(this).data('title')),
			shareURL = 'http://profitquery.com/add-to/flipboard/?url=' + url + '&title=' + title;

		popupCenter(shareURL, 'blank', 575, 600);
	});
});

// ---------------

// Misc Functions

// Responsive Task Relay
// Essentially a set of "main" functions, use this to bind/unbind (or conventionally, "init"
// or "terminate") any responsive functionality, in the case you need it to span across multiple
// breakpoints.
// Eg: Init on desktop (Switch case 'desktop'), but terminate upon entering the mobile breakpoint
// (Switch case 'mobile-start'). Or, init only on entering the tablet breakpoint ('tablet-start'),
// but terminate in mobile (Switch case 'mobile-start'), as well as when on desktop ('desktop-start').
function responsiveTask(task) {
	switch(task) {
		case 'mobile-start':
			accordionNavHandler('init');
			break;
		case 'mobile-end':
			accordionNavHandler('terminate');
			break;
		case 'tablet-start':
			accordionFooterHandler('init');
			break;
		case 'tablet-end':
			accordionFooterHandler('terminate');
			break;
	}
}

// Breakpoint Handler
// Sets breakpoint booleans in order to trigger their respective responsive tasks
// only the first time the window enters the breakpoints range, resetting only when
// the window leaves the breakpoint.
function responsiveDetect() {
	// If in mobile breakpoint
	if (window.matchMedia(bpMobile).matches) {
		if (bpMobileActive == false) {
			bpMobileActive = true;
			responsiveTask('mobile-start');
		}
	} else {
		if (bpMobileActive == true) {
			bpMobileActive = false;
			responsiveTask('mobile-end');
		}
	}

	// If in tablet breakpoint
	if (window.matchMedia(bpTablet).matches) {
		if (bpTabletActive == false) {
			bpTabletActive = true;
			responsiveTask('tablet-start');
		}
	} else {
		if (bpTabletActive == true) {
			bpTabletActive = false;
			responsiveTask('tablet-end');
		}
	}
}

// Accordion Navigation Handler
// Takes care of the binding/unbinding of events when the nav accordion is triggered
// in the mobile breakpoint, as well as setting/resetting default states for when the
// accordion is in or out of commission.
// Accepts two states, 'init' and 'terminate'
function accordionNavHandler(phase) {
	switch(phase) {
		case 'init':
			spawnAccordion('.nav-pane', '.top-level', '.sub-categories');
			$('nav .sub-categories').hide();
			$('nav .category:first-child .sub-categories').show();
			$('nav .category:first-child .top-level').addClass('active');
			break;

		case 'terminate':
			$('.nav-pane').removeClass('accordion');
			$('nav .top-level').off();
			$('nav .top-level').removeClass('active');
			$('nav .sub-categories').show();
			break;
	}
}

// Accordion Footer Handler
// Somehwat same as above, just different functionality – thus requiring its own function :)
function accordionFooterHandler(phase) {
	switch(phase) {
		case 'init':
			spawnAccordion('.footer-categories', '.title', '.sub-categories');
			$('footer .sub-categories').hide();
			break;

		case 'terminate':
			$('.footer-categories').removeClass('accordion');
			$('.footer-categories .title').off();
			$('.footer-categories .title').removeClass('active');
			$('.footer-categories .sub-categories').show();
			// on second thought, I am going to condense these terminate tasks/hiding toggled
			// content into an unbind flag within spawnAccordion(). Lalala redundancy!
			break;
	}
}

// Accordion Spawner
// General accordion component
function spawnAccordion(wrapper, triggerClass, toggledClass) {
	$(wrapper).addClass('accordion');

	$(wrapper + '.accordion ' + triggerClass).click(function (e) {
		e.preventDefault();

		// Selector caching
		var thisAccordion = $(this),
			targetName = thisAccordion.data('target'),
			targetElement = $(wrapper + '.accordion ' + toggledClass + '[data-name="' + targetName + '"]');

		if (targetName == 'case-studies') {
			window.location.href = thisAccordion.attr("href");
			return true;
		}

		if (thisAccordion.hasClass('active')) {
			thisAccordion.removeClass('active');
			targetElement.hide();
		} else {
			thisAccordion.addClass('active');
			targetElement.show();
		}
	});
}


// Bind social icons to pullquotes
function appendSocialHTML() {
	$('.pull-quote').each(function() {
		var pullquoteSocialHTML = '<a href="#" class="pull-fb"></a><a href="#" class="pull-tw" target="blank"></a>';
		$(this).append(pullquoteSocialHTML);
	});
}

// Transplant author title from bio to name/image column
function appendAuthorTitle() {
	$('.name').append($('.author-title'));
	$('.hero-image').append($('.author-title'));
	$('.name .author-title').wrap('<p />').contents().unwrap();
}

// remove wrapping p tags in images
function unwrapArticleIMG() {
	var articleIMG = $('.article-content__related img');
	if (articleIMG.parent().is('p')) {
		articleIMG.unwrap();
	}
}

function unwrapArticleBodyIMG() {
	$('.article-content__image img').each(function() {
		if ($(this).parent().is('p')) {
			$(this).unwrap();
		}
	});
}

// Open a new window in center of screen
function popupCenter(url, title, w, h) {
	// Fixes dual-screen position
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
	var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

	var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	var top = ((height / 2) - (h / 2)) + dualScreenTop;
	var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

	// Puts focus on the newWindow
	if (window.focus) {
		newWindow.focus();
	}
}

function noAuthor(image) {
	image.onerror = "";
	image.src = "author-no-image-1.jpg"/*tpa=https://www.freshbooks.com/assets/img/authors/author-no-image.jpg*/;

	console.log(image);
	return true;
}

function handleNewsletterNav() {
	var scrollBottom = $(window).scrollTop() + $(window).height();
	var navHeight = $('.sign-up').outerHeight();
	var footerTop = $('footer').offset().top;

	if (scrollBottom <= (footerTop - navHeight)) {
		$('.sign-up').addClass('sticky');
	} else {
		$('.sign-up').removeClass('sticky');
	}
}

function appendRelatedIMG() {
	$('.article-content__related').each(function () {




		var links = $(this).find("a");

		links.each(function() {
			var thisElement = $(this),
			relatedHref = thisElement.attr('href'),
			slashIndex = relatedHref.lastIndexOf('/'),
			hrefLength = relatedHref.length,
			slug = relatedHref.substring(slashIndex + 1, hrefLength);

			$.ajax({
				type: 'get',
				url: '/blog/related',
				data: 'slug=' + slug,
				success: function(data) {
					loadRelatedIMG(thisElement, data);
				}
			});
		});


	});

	function loadRelatedIMG(element, fullFilePath) {

		var fileName = fullFilePath.replace(/\.[^/.]+$/, "");
		var fileExt = fullFilePath.split('.').pop();

		var thumbnailPath = fileName + "-144x96." + fileExt;

		console.log(element);


		// If thumbnail image size is available, load it
		// instead of loading full size image
		$.ajax({
			type: 'HEAD',
			url: thumbnailPath,
			success: function(){
				imgHTML = '<img src="' + thumbnailPath + '" />';
				element.prepend(imgHTML);

			},
			error: function(){
				imgHTML = '<img src="' + fullFilePath + '" />';
				element.find('.article-content__related-fill .text p').prepend(imgHTML);
			}
		});
	}
}

function handleSearchQuery(input) {
	//var query = ($(input).val()).replace(/\W/g, '');
	var query = escape($(input).val());
	if (query != '') {
		window.location.href = 'https://www.freshbooks.com/blog/search/' + query;
	}
}

function br_bp_match_height() {

	//select and loop the container element of the elements to equalize
	$(".match-table").each(function() {

		//cache the highest box which is 0 for starters
		var br_bp_highest_box = {};

		//select and loop the elements to equalise
		$(".match-cell", this).each(function() {
			//if this box is higher than the cached highest then store it

        //check for data-attribute
        var current_id = $(this).data("matchheight-id");
        if (br_bp_highest_box[current_id]) {
          if ( $(this).height() > br_bp_highest_box[current_id] ) {
            br_bp_highest_box[$(this).data("matchheight-id")] = $(this).height();
    			}
        }
        else {
          br_bp_highest_box[$(this).data("matchheight-id")] = $(this).height();
        }
				//br_bp_highest_box = $(this).height();
        //console.log(br_bp_highest_box)
		});

		//set the height of all those children to whichever value had the highest
    for (var key in br_bp_highest_box) {
      $(".match-cell[data-matchheight-id='" + key + "']", this).height(br_bp_highest_box[key]);
    }
		//$(".match-cell[matchheight-id='']", this).height(br_bp_highest_box[$(this).data("matchheight-id")]);
	});
};
//br_bp_match_height();

//re-match height on resize
$(window).on('resize', function () {
	setTimeout(function(){
		$(".match-table").each(function() {
			$(".match-cell", this).css('height', 'auto');
		});
	}, 100);

	setTimeout(function(){
		br_bp_match_height();
	}, 200);

});

$(window).on('load', function() {
  br_bp_match_height();
});
