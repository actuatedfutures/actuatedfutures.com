/*!	 the main js file */
$(document).on('ready', function()
{
	var w = $(document).width();
	$('.debug').text(w);

	var menu = $('#showmenu');
	menu.find('.menu').on("click",function(e)
	{
		e.preventDefault();
		menu.addClass('show');
	});
	menu.find('.hide').on("click",function(e)
	{
		e.preventDefault();
		menu.removeClass('show');
	});

	$('.social .email a').each(function(i)
	{
		var name = $(this).text().split('[')[0];
		$(this).text(name+'@actuatedfutures.com');
		$(this).attr('href','mailto:'+name+'@actuatedfutures.com');
	});
});