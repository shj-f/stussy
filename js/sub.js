$(function(){
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
	
	$('.pagenation li').on('click',function(){
		var index=$(this).index();
		console.log(index);
		$('.sub_list').eq(index).show();
		$('.sub_list').eq(index).siblings().hide();
		$(this).stop().addClass('on');
		$(this).siblings().stop().removeClass('on');
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