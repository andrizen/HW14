function preloader(){
	$(() => {

	setInterval(() => {

	let p = $('.preloader');
	p.css ('opacity', 0);

	setInterval(
		() => p.remove(),
		parseInt(p.css('--duration')) * 100
		);
 	}, 100);
});
}

preloader();