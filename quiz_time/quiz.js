var user = {};
var responses = [];
function question1() {
	var name = prompt("What is your name?");
	user.name = name;
}
question1();

function question2() {
	var question = prompt("Is null equal to 0? (Yes or No)");
	question = question.toLowerCase();
	if (question ==="yes") {
		question = true;
	}
	else if (question === "no") {
		question = false;
	}
	else {
		alert("Please answer Yes or No");
		return question2();
	}
	responses.push(question);
}
question2();

function question3() {
	var js = prompt("What was the original name for Javascript: Java, LiveScript, JavaLive, or ScriptyScript?");
	js = js.toLowerCase();
	switch (js) {
		case "livescript":
			js = true;
			break;
		case "java":
		case "javalive":
		case "scriptyscript":
			js = false;
			break;
		default:
			alert("I did not understand you answer, one more time !");
			return question3();
			break;
	}
	responses.push(js);
}
question3();

function question4() {
	"use strict";
	var firstComputer = prompt("When was the first computer invented? (1822, 1936, 1943, or 1946)");
	firstComputer = parseInt(firstComputer);
	switch (firstComputer) {
		case 1946 :
			firstComputer = true;
			break;
		case 1822:
		case 1936:
		case 1943:
			firstComputer = false;
			break;
		default: 
			alert("I don't know that date");
			return question4();
			break;
	}
	responses.push(firstComputer);
}
question4();

function question5() {
	var confidence = prompt("Do you think you'll get a good score? (Yes, No, Maybe)");
	confidence = confidence.toLowerCase();
	if (confidence === "yes") {
		confidence = true;
		alert("You seem pretty sure, one more point for self confience!");
	} 
	else if (confidence === "no") {
		confidence = false;
		alert("If you don't believe in it you sure won't get it... wake up !");
	}
	else if (confidence === "maybe") {
		confidence = true;
		alert("You should be sure ! I'll still give you one point...");
	}
	else {
		alert("Uh? I didn't get that. Yes, No or Maybe?")
		return question5();
	}
	responses.push(confidence);
}
question5();

function evaluate(respArray) {
	var correct = 0;
	var wrong = 0;
	for (var index = 0; index < respArray.length; index ++) {
		if (respArray[index] === true) {
			correct += 1;
		}
		else  {
			wrong += 1;
		};
	}
	user.correct = correct;
	user.wrong = wrong;
	return showResults(user);
}

function showResults(user) {
	var name = user.name;
	var score = user.correct;
	var wrong = user.wrong;
	if (score > wrong) {
		alert("Congratulations " + name + " you got a score of " + score + " correct answers and " + wrong + " wrong answers.");
	}
	else if (score === wrong) {
		alert("You barely made it through " + name + " you got " + score + " correct answers and " + wrong + " wrong answers.");
	}
	else {
		alert("What a shame " + name + " you got " + wrong + " wrong answers and " + score + " good answers, try again sometime ;)");
	}
}

evaluate(responses);

