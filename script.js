
//Lesson 2

/*

function checkAnswers(){

		var correctAnswer1 = 'q1Option1';

		if(document.getElementById(correctAnswer1).checked == true){

				console.log("Question 1 Correct");

		} else{

				console.log("Question 1 Incorrect");

		}//end if statement

} //end function //

*/
var interval;

var i=0;

interval = setInterval(function(){

	i=i+1;
	console.log(i);

})

function checkAnswers(){

				var correctAnswer = [1, 2, 4, 2];

				var counter = 0;

		for(var i=0;i<4;i++){//loop for each question
				console.log('q'+(i+1)+'Option'+correctAnswer[i]);
				if(document.getElementById('q'+(i+1)+'Option'+correctAnswer[i]).checked ==true){

					counter = counter + 1;

					document.getElementById('Question'+(i+1)).style.color = 'green';

				}

				for(var j=0;j<4;j++){
				document.getElementsByName('q'+(i+1))[j].disabled=true;
				}
		}

						console.log("score = "+ counter);
	}
