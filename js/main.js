$(document).ready(function () {
  
	$("#responsive-icon").on("click",function(){
		$("#responsive-nav ul").toggleClass("active")
		$(this).toggleClass("glyphicon-menu-hamburger")
	})

});
	
