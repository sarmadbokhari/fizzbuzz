$(document).ready(function(){

$('#submit').click(submit);
var $output = $('#fizzbuzzed')

	function submit() {
		$output.empty();
		fizz($("#guess").val());
	};

	function fizz(fb) {
	for (i = 1; i <= fb; i++){
	    if ((i % 3 == 0) && (i % 5 == 0)){
	        $output.append("<div>FizzBuzz</div>");
	    } else if (i % 3 == 0){
	        $output.append("<div>Fizz</div>");
	    } else if (i % 5 == 0){
	        $output.append("<div>Buzz</div>");
	    } else {
	    $output.append('<div>' + i + '<div>');
	    }
	}
	}
});