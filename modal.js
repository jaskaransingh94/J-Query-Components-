$(document).ready(()=>{

	$("button").click(function() {
		$("#modal").animate({top:"10vh",opacity:"1"},500);
	});

	//hide modal when clicked outside
	$(window).click(function(e) {
		if(e.target.className == 'container'){
			$("#modal").css({
				opacity: '0',
				top: '0vh'			
			});
		} 
	});
	//hide modal when clicked on close
	$("#closing").click(function() {
		$("#modal").css({
			opacity: '0',
			top: '0vh'			
		});
	});	
});

