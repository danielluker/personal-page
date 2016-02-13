
// Want to show the names on the icons if it's a phone (there's no hover)
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	$(".octagon h3").css('display', 'block');
	$(".octagon h3").css('filter','brightness(100%)');
	$(".octagon img").css('-webkit-filter', 'brightness(40%)');
	$(".octagon img").css('-moz-filter', 'brightness(40%)');
	$(".octagon img").css('filter', 'brightness(40%)');
}