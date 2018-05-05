$(document).ready(()=>{

	$(".header").click(function() {
		//if any content element is visible
		if($(".content").is(':visible')){
			if($(this.nextElementSibling).is(':visible')){
				$(this.nextElementSibling).slideUp(300);
			}
			else{	
				$(".content").slideUp(300);	
				$(this.nextElementSibling).slideToggle(300);	
			}
		}
		else{
			$(this.nextElementSibling).slideToggle(300);	
		}
	});

});