$(document).ready(function(){
	$('.btn-back-to-top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 500);
	})
	$('.fossil-navbar-mainmenu').click(function(){
		mainmenuObj();
	})
	$('.navbar-backdrop').click(function(){
		$('.navbar-backdrop').removeClass('in').fadeOut();
	})
	$('.fa-chevron-down').click(function(){
		revealObj($(this).attr('aria-controls'));
		return false;
	})
	$('.fossil-search').click(function(){
		searchObj();
		return false;
	})
	$('.language-switch').click(function() {
		var currentUrl = location.href;
		var allPrefix = $('.language-switch').map(function(){ return $(this).attr("data-replacement") }).get();
		var targetPrefix = $(this).attr('data-replacement');

		$.each(allPrefix, function(k, v) {
			currentUrl = currentUrl.replace(v, targetPrefix);
		});

		location.href = currentUrl;
		return false;
	});
	$('li a.navbar-menu-link').click(function(){
		if( $('li').hasClass('navbar-subview-open') ){
			$('.navbar-subview-open').removeClass('navbar-subview-open').addClass('navbar-subview');
			$(this).parents('li.col-xs-12').addClass('navbar-subview-open');
		}else{
			$('ul.navbar-menu').addClass('navbar-subview');
			$('li').removeClass('navbar-subview-open');
			$(this).parents('li').addClass('navbar-subview-open');
		}
		return false;
	})
	$('.navbar-back-button').click(function(){
		if( $('li').hasClass('navbar-subview-open') ){
			$('.navbar-subview').removeClass('navbar-subview');
			$(this).parents('li').removeClass('navbar-subview-open');
		}
		return false;
	})
	$('a','.fossil-sidebar-dropdown').click(function(){
		if( $('.fossil-sidebar-dropdown').hasClass('open') ){
			$('.fossil-sidebar-dropdown').removeClass('open');
		}else{
			$('.fossil-sidebar-dropdown').addClass('open');
		}
	})
	$('.btn-filter').click(function(){
		$('.modal-product-filter').fadeIn();
		$('.modal-product-filter').addClass('in');
		$('.navbar-backdrop').fadeIn().addClass('in');
		$('.navbar-backdrop').css('z-index','1035');

		$('body').css('overflow-y','hidden');
		if( $('.desktop-nav').is(":visible") ) {
			$('body').css('padding-right','17px');
		}
		$('.modal-product-filter').css('overflow-y','scroll');
		return false;
	})
	$('.btn-cancel').click(function(){
		$('.modal-product-filter').fadeOut();
		$('.modal-product-filter').removeClass('in');
		$('.navbar-backdrop').fadeOut();
		setTimeout(function() { $('.navbar-backdrop').removeClass('in').css('z-index','999') }, 400);

		$('.modal-product-filter').css('overflow-y','hidden');
		$('body').css('padding-right','0px');
		$('body').css('overflow-y','scroll');
		return false;
	})
	$('.btn-quicklook').click(function(){
		$('.modal-quicklook').fadeIn();
		$('.modal-quicklook').addClass('in');
		$('.navbar-backdrop').fadeIn().addClass('in');
		$('.navbar-backdrop').css('z-index','1035');

        $('body').css('overflow-y','hidden');
        if( $('.desktop-nav').is(":visible") ) {
            $('body').css('padding-right','17px');
        }
        $('.modal-quicklook').css('overflow-y','scroll');
		return false;
	})
	$('.close').click(function(){
		$('.modal-quicklook').fadeOut();
		$('.modal-quicklook').removeClass('in');
		$('.navbar-backdrop').fadeOut();
		setTimeout(function() { $('.navbar-backdrop').removeClass('in').css('z-index','999') }, 400);

		$('.modal-quicklook').css('overflow-y','hidden');
		$('body').css('padding-right','0px');
		$('body').css('overflow-y','scroll');
		return false;
	})
	$('.btn-toggle-grid').click(function(){
		$('.btn-toggle-grid').removeClass('active');
		$(this).addClass('active');
		$('.product-result').removeClass('col-sm-2').removeClass('col-sm-4').removeClass('col-xs-4').removeClass('col-xs-6').removeClass('col-xs-12');
		$('.product-result').addClass($(this).data("gridtoggle-classname"));
		return false;
	})
	$('.nav-tab').click(function(){
		$('.tab-pane').removeClass('in').removeClass('active');
		$($(this).attr('data-target')).addClass('in').addClass('active');
		$('.nav-tab').parents('li').removeClass('active');
		$(this).parents('li').addClass('active');
		return false;
	})
	// minor fix for fontawsome icon can't be binded
	$('.panel-productattrs .panel-heading[role=tab] .fa').click(function() {
		productPageMobileTabClicked($(this).closest('.panel-heading'));
	})
	$('.panel-productattrs .panel-heading[role=tab]').click(function() {
		productPageMobileTabClicked($(this));
	})
	// country selector
	$('select#select-default-country').change(function() {
		$('.selected-country').addClass('hidden');
		$('.selected-country-' + $('select#select-default-country').val()).removeClass('hidden');		
	});
	$('.btn-proceed-country-selection').click(function() {
		var destinationUrl = $('select#select-default-country option:selected').attr('data-destination');

		if( destinationUrl == '#' ) {
			$('.modal-country-selector').fadeOut().removeClass('in');

            if (!$('.modal-custom-content').hasClass('in')) {
                $('.navbar-backdrop').fadeOut();
                setTimeout(function() { $('.navbar-backdrop').removeClass('in').css('z-index','999') }, 400);
            }
		} else {
			location.href = destinationUrl;
		}
	});
    $('.btn-close-modal').click(function() {
        $('.modal-custom-content').fadeOut().removeClass('in');
        $('.navbar-backdrop').fadeOut();
        setTimeout(function() { $('.navbar-backdrop').removeClass('in').css('z-index','999') }, 400);
    });
	$('#select-default-country option').prop('selected', false);
	$('#select-default-country option[value='+$('#select-default-country option[data-selected=1]').val()+']').prop('selected', true);
});
$(window).resize(function (event) {
	resizeObj();
});
function productPageMobileTabClicked(k) {
	if( k.hasClass('panel-heading-active') ) {
		// collapse the tab
		k.removeClass('panel-heading-active');
		k.find('.btn-block').attr('aria-expanded', 'false');
		k.find('.btn-block span').removeClass('fa-chevron-up').addClass('fa-chevron-down');

		var label = k.attr('id');
		$('div[aria-labelledby="' + label + '"]').attr('aria-expanded', 'false');
		$('div[aria-labelledby="' + label + '"]').removeClass('in');

	} else {
		// expend the tab
		k.addClass('panel-heading-active');
		k.find('.btn-block').attr('aria-expanded', 'true');
		k.find('.btn-block span').removeClass('fa-chevron-down').addClass('fa-chevron-up');

		var label = k.attr('id');
		$('div[aria-labelledby="' + label + '"]').attr('aria-expanded', 'true');
		$('div[aria-labelledby="' + label + '"]').addClass('in');
	}
}
function mainmenuObj(){
	if ($('.mobile-nav').hasClass('in')) {
		$('.mobile-nav').removeClass('in');
	}else{
		$('.mobile-nav').addClass('in');
	}
}
function revealObj(target){
	var contentHeight = $('#'+target+' .text').actual('height', { clone: true });

	// fix
	$('#'+target+'.header-promo-reveal').css('height','1px');

	if( $('#'+target+'.header-promo-reveal').hasClass('in') ) {
		// fetch original height from data attr
		var containerNewHeight = $('#'+target+'-container.header-promo').attr('data-original-height')+'px';

		$('#'+target+'-container.header-promo').stop().animate({height:containerNewHeight}, 500, function () {
			$('#'+target+'.header-promo-reveal').removeClass('in');
		});

	}else{
		// store old height
		$('#'+target+'-container.header-promo').attr('data-original-height', $('#'+target+'-container.header-promo').height());

		var containerNewHeight = (contentHeight+10)+'px';
		$('#'+target+'-container.header-promo').stop().animate({height:containerNewHeight}, 500);
		$('#'+target+'.header-promo-reveal').addClass('in');
	}
}
function searchObj(){
	if ($('.fossil-navbar-search').hasClass('in')) {
		$('.fossil-navbar-search').stop().animate({height:'0px'}, 500, function () {
			$('.fossil-navbar-search').removeClass('in');
		});
	}else{
		$('.fossil-navbar-search').stop().animate({height:'54px'}, 500);
		$('.fossil-navbar-search').addClass('in');
	}
}
function resizeObj(){
}

$(window).on("scroll", onScroll);
function onScroll(event){
	var scrollPosition = $(window).scrollTop();
	
	if (scrollPosition > 100){
		$('.btn-back-to-top').addClass('in');
	}else{
		$('.btn-back-to-top').removeClass('in');
	}
	
	if (scrollPosition > $('header').height()+128){
		$('.container-filter-sort-xs').addClass('container-filter-sort-fixed');
	}else{
		$('.container-filter-sort-xs').removeClass('container-filter-sort-fixed');
	}
}