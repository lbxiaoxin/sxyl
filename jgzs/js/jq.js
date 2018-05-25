$('.na_ a').click(function(){
	$(this).addClass('act').siblings().removeClass('act');
});


$('.shu li').click(function(){
	var index=$(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$(this).parents('.fenl').find('#box ul').eq(index).show().siblings().hide();
});



