var header=document.getElementById('header');
var nav_color=document.getElementsByClassName('text-a-header');
var changelogo=document.getElementById("imagelogo");
var boderpaddding = document.getElementById('boder-right-padding-right');
//hieu ung scroll
$(document).ready(function() {
	$(window).scroll(function(event) {
		var pos_body = $('html,body').scrollTop();
		

		// console.log(pos_body);
		if(pos_body>1000){
			$('.back-to-top').addClass('show_btt');
		}
		else{
			$('.back-to-top').removeClass('show_btt');
		}

		//header change background
		if(pos_body>50){
			headerr.style.backgroundColor="rgba(0, 0, 0, 0.6)";
			nav_color[0].style.color="#fff";
			nav_color[1].style.color="#fff";
			nav_color[2].style.color="#fff";
			nav_color[3].style.color="#fff";
			nav_color[4].style.color="#fff";
			changelogo.src = "imgs/logo/logo-white.png"
			boderpaddding.style.borderColor="#fff";
		}
		else{
			headerr.style.backgroundColor="rgba(0, 0, 0, 0)";
			nav_color[0].style.color="#000";
			nav_color[1].style.color="#000";
			nav_color[2].style.color="#000";
			nav_color[3].style.color="#000";
			nav_color[4].style.color="#000";
			boderpaddding.style.borderColor="#000";
			changelogo.src = "imgs/logo/logo-black.svg"
		}

	});

	$('.back-to-top').click(function(event) {
		$('html,body').animate({
			scrollTop: 0},
			1400);
	});
});