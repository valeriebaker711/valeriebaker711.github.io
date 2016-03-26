// var austin;
// var la;
// var nyc;
// var sf;
// var sydney;

$('document').ready(function(){

	$('#submit-btn').click(function(){
		
		var city = $('#city-type').val();
		city = city.toLowerCase().trim();
		console.log(city.toLowerCase());

		if (city === "new york" || city === "new york city" || city === "nyc"){
				$('body').attr('class', 'nyc');
		}else if
			(city === "la" || city === "los angeles"){
				$('body').attr('class', 'la');
		}else if
			(city === "austin"){
				$('body').attr('class', 'austin');
		}else if
			(city === "san francisco"){
				$('body').attr('class', 'sf');
		}else if
			(city === "sydney"){
				$('body').attr('class', 'sydney');
		}else if
			(city === ""){
				alert("Please enter a city name");
		}else{
				alert("Please enter a valid city name");
		}

		return false;

	});		
			
});


// .css('background-image', 'url(../homework_starter/images/nyc.jpg)');

// else{
		// if ($('#city-type').val() === ""){
		// 	alert("Please enter a valid city name");
		// 	}
		// }


// });


// $('document').ready(function(){
// 	// console.log("ready");

// 	$('#submit').click(function(){


// if($('#words').val() === ""){
// 			alert('please enter text');
// 		}else{