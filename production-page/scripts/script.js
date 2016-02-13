
// Want to show the names on the icons if it's a phone (there's no hover)
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	$(".octagon h3").css('display', 'block');
	$(".octagon img").css('-webkit-filter', 'brightness(50%)');
	$(".octagon img").css('-moz-filter', 'brightness(50%)');
	$(".octagon img").css('filter', 'url(#brightness)');
	$(".octagon img").css('filter', 'brightness(50%)');
}