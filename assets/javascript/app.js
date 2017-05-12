var correctAnswer = 0;
var inCorrectAnswer = 0;
var unAnswered = 0;
var intervalId;
var number = 20;

var answers = ["Brazil", "Lionel Messi", "Because they could not play barefoot"];

$("#start").click(function(){
	$("#main-container").show();
	$("#hidden").hide();
	$("#start").hide();
	// setTimeout(finish, 20000);
	run();
});


$("#done").click(finish);
	

function finish (){

	$("#main-container").hide();
	$("#hidden").show();
	var playerAnswer = [$('input:radio[name="National Team"]:checked').val(), $('input:radio[name="Player"]:checked').val(), $('input:radio[name="Reason"]:checked').val()];
		console.log(playerAnswer);
	
	for (var i = 0; i < 3; i++) {
		if(playerAnswer[i] === undefined) {
			unAnswered++;
		}

		else if(playerAnswer[i] === answers[i]) {
			correctAnswer++;
			
		} 

		else if(playerAnswer[i] !== answers[i]) {
			inCorrectAnswer++;
			
		} 
		
	}

	stop();

	$("#correct-answer").append(correctAnswer);
	$("#incorrect-answer").append(inCorrectAnswer);
	$("#unanswered").append(unAnswered);

}

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {  
    number -= 1;
	console.log(number);
    $("#counter").text(number);

    if (number === 0) {
       stop();
       finish(); 
    }
}

function stop() {

    clearInterval(intervalId);
}


    







