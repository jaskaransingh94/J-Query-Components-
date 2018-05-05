$(document).ready(()=>{

	$('.dropdown').click(()=>{
     	
         $('.dropdown-content').slideToggle();
         $('.dropdown-content').css({
	    	"background-color":"white"});;
     });

	// close drop down when clicked anywhre outside
	$(window).click(function(e) {
		if(e.target.className == ''){
			$('.dropdown-content').slideUp();
		} 
	});

});
// ope drop down in small screens
function dropToogle() {
			var x = document.getElementById("myTopnav");
	    	if (x.className === "topnav") {
	    		x.className += " responsive";
	    	} else {
	    		x.className = "topnav";
	    	}
	     }