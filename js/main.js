$(document).ready(function () {
  
	$("#responsive-icon").on("click",function(){
		$("#responsive-nav ul").toggleClass("active")
		$(this).toggleClass("glyphicon-menu-hamburger")
	})
	//Se llama la funcion para cada descripcion de platillo
	toggleFood(0)
	toggleFood(1)
	toggleFood(2)
	toggleFood(3)
	toggleFood(4)
	toggleFood(5)
	toggleFood(6)
	toggleFood(7)
});
//Funcion para cada descripcion del platillo
function toggleFood(id) {

	$("#plate_"+id).on("click",function(){
		$("#id_"+id).animate({
			top: "11%"
		}, "slow")
		//$("#id_0").toggleClass("hidden")
	})
	$("#close_"+id).on("click",function(event){
		$("#id_"+id).animate({
			top: "100%"
		}, "slow")
		//$("#id_0").toggleClass("hidden")
	})
}