$(document).on("ready",function(){var a=$(document).width();$(".debug").text(a);var b=$("#showmenu");b.find(".menu").on("click",function(a){a.preventDefault(),b.addClass("show")}),b.find(".hide").on("click",function(a){a.preventDefault(),b.removeClass("show")}),$(".social .email a").each(function(){var a=$(this).text().split("[")[0];$(this).text(a+"@actuatedfutures.com"),$(this).attr("href","mailto:"+a+"@actuatedfutures.com")})});