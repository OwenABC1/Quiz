$(document).ready(function() {
	

	$(".Correct").click(function() {
		$(".Correct").addClass("btn-success");
		$(".Correct").removeClass("btn-primary");
	});
	
	$(".Incorrect").click(function() {
		$(".Correct").addClass("btn-success");
		$(".Correct").removeClass("btn-primary");
		$(".Incorrect").addClass("btn-danger");
		$(".Incorrect").removeClass("btn-primary");
		$(".alert").removeClass("helper");
		$(".alert").addClass("Helping");
	});
	
});