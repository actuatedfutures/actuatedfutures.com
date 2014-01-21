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
});