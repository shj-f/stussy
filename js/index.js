$(document).ready(function(){
	/*gnb*/
	$('.dep1>a').on('mouseenter',function(){
		$('.gnb_bg').stop().slideDown();
		$('header').addClass('on')
		$('.logo').css({background:'url(image/main_logo_hover.png)','background-size':'100% auto'})
		$('.search').css({background:'url(image/util/search_hover.png)','background-size':'100% auto'})
		$('.login').css({background:'url(image/util/login_hover.png)','background-size':'100% auto'})
		$('.shopping_bag').css({background:'url(image/util/shopping-bag_hover.png)','background-size':'100% auto'})
	})
	
	$('.mens').on('mouseenter',function(){
		$(this).addClass('on');
		$(this).siblings('.dep2').find('.dep2_title').stop().slideDown();
		$(this).siblings('.dep2').find('.dep2_title').eq(0).addClass('on');
		$(this).siblings('.dep2').find('.dep3').children('h3').stop().slideDown();
		$(this).siblings('.dep2').find('.dep3').eq(0).stop().slideDown();
		$(this).parent('li').siblings().find('.dep1').removeClass('on');
		$(this).parent('li').siblings().find('.dep2_title,.dep3').stop().hide();
	})
	
	$('.womens').on('mouseenter',function(){
		$(this).addClass('on');
		$(this).siblings('.dep2').find('.dep2_title').stop().slideDown();
		$(this).siblings('.dep2').find('.dep2_title').eq(0).addClass('on');
		$(this).siblings('.dep2').find('.dep3').children('h3').stop().slideDown();
		$(this).siblings('.dep2').find('.dep3').eq(0).stop().slideDown();
		$(this).parents('li').siblings().find('.dep1').removeClass('on');
		$(this).parent('li').siblings().find('.dep2_title,.dep3').stop().hide();
	})
	
	$('.accessories').on('mouseenter',function(){
		$(this).addClass('on');
		$(this).siblings('.dep2').find('.dep2_title').stop().slideDown();
		$(this).siblings('.dep2').find('.dep2_title').eq(0).addClass('on');
		$(this).siblings('.dep2').find('.dep3').children('h3').stop().slideDown();
		$(this).siblings('.dep2').find('.dep3').eq(0).stop().slideDown();
		$(this).parents('li').siblings().find('.dep1').removeClass('on');
		$(this).parent('li').siblings().find('.dep2_title,.dep3').stop().hide();
	})
	
	$('.collections').on('mouseenter',function(){
		$(this).addClass('on');
		$(this).siblings('.dep2').find('.dep2_title').stop().slideDown();
		$(this).siblings('.dep2').find('.dep2_title').eq(0).addClass('on');
		$(this).siblings('.dep2').find('.dep3').children('h3').stop().slideDown();
		$(this).siblings('.dep2').find('.dep3').eq(0).stop().slideDown();
		$(this).parents('li').siblings().find('.dep1').removeClass('on');
		$(this).parent('li').siblings().find('.dep2_title,.dep3').stop().hide();
	})
	
	$('.dep2_title').on('mouseenter',function(){
		$(this).siblings('.dep3').stop().show();
		$(this).addClass('on')
		$(this).parent('li').siblings().children('.dep2_title').removeClass('on');
		$(this).parent('li').siblings().find('.dep3').stop().hide();
	})
	
	$('.nation').on('click',function(){
		$(this).children('li').stop().toggleClass('on');
	})
	
	/*본문*/
	$('section').on('mouseenter',function(){
		$('.gnb_bg').stop().slideUp();
		$('.dep1').removeClass('on');
		$('.dep2_title,.dep3').stop().hide();
		$('header').removeClass('on')
		$('.logo').css({background:'url(image/main_logo.png)','background-size':'100% auto'})
		$('.search').css({background:'url(image/util/search.png)','background-size':'100% auto'})
		$('.login').css({background:'url(image/util/login.png)','background-size':'100% auto'})
		$('.shopping_bag').css({background:'url(image/util/shopping-bag.png)','background-size':'100% auto'})
	})
	
	$('.bxslider').bxSlider({
		auto: true,
		speed: 800,
	});
	
	
	/*새제품*/
	
	$('.new_arrivals_list div').on('mouseenter',function(){
		$(this).removeClass('off')
		$(this).addClass('on');
		$(this).children('p').stop().animate({'font-size':'2.135vw'})
	})
	
	$('.new_arrivals_list div').on('mouseleave',function(){
		$(this).removeClass('on');
		$(this).addClass('off');
		$(this).children('p').stop().animate({'font-size':'1.77vw'})
	})
	
	$(window).on('scroll',function(){
		var newScroll = $(window).scrollTop();
		
		if(newScroll >= 1100){
			$('.new_mens').animate({opacity:1});
			$('.new_womens').delay(500).animate({opacity:1});
			$('.new_accessories').delay(1000).animate({opacity:1});
		}
	})
	
	/*모바일*/
	$('.tm_dep1>li>a').on('mouseenter',function(){
		$(this).siblings('.tm_dep2').stop().slideDown();
		$(this).stop().addClass('on');
	})
	$('.tm_dep1>li').on('mouseleave',function(){
		$(this).children('a').siblings('.tm_dep2').stop().slideUp();
		$(this).children('a').stop().removeClass('on');
	})
	
	$('.tm_nation').on('click',function(){
		$(this).children('li').toggleClass('on');
	})
	
	$('.tm_menu').on('click',function(){
		$('.tm_gnb').animate({right:0});
	})
	
	$('section').on('click',function(){
		$('.tm_gnb').animate({right:'-25.51vw'})
	})
})

var clickTimes=0;
function wp_more(){
		clickTimes++;
	switch(clickTimes){
			case 1:
			$('.wp_list li:lt(8)').show();
			$('.world_tour .more p').text('더보기(2/3)');
			break;
			case 2:
			$('.wp_list li:lt(9)').show();
			$('.world_tour .more').hide();
			break;
		}
}

var clickTime=0;
function tp_more(){
		clickTime++;
	switch(clickTime){
			case 1:
			$('.tp_list li:lt(12)').show();
			$('.tie_dye .more p').text('더보기(2/3)');
			break;
			case 2:
			$('.tp_list li:lt(13)').show();
			$('.tie_dye .more').hide();
			break;
		}
}