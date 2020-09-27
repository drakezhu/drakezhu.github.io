// TIMER COUNTDOWN START
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2021";

function countdown() {
	const newYearsDate = new Date(newYears);
	const currentDate = new Date();

	const totalSeconds = (newYearsDate - currentDate) / 1000;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	daysEl.innerHTML = days;
	hoursEl.innerHTML = formatTime(hours);
	minsEl.innerHTML = formatTime(mins);
	secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);

// TIMER COUNTDOWN END


// LABEL BUTTON FUNCTION
//const labelButton = document.getElementsByClassName("label-text");
//
//function labelMouseOver(id) {
//	console.log(document.getElementById(id).style);
//	console.log("over")
//	console.log(document.getElementById(id).style.backgroundColor);
////	console.log(document.getElementById(id).style.backgroundColor);
////	document.getElementById(id).style.backgroundColor = 'RoyalBlue';
//	console.log(document.getElementById(id).style.backgroundColor);
//}
//
//function labelMouseOut(id) {
//	console.log("out")
//	console.log(document.getElementById(id).style.backgroundColor);
//	document.getElementById(id).style.backgroundColor = 'DodgerBlue';
//	console.log(document.getElementById(id).style.backgroundColor);
//}
//
//
//for (var i = 0; i < labelButton.length; i++){
//	labelButton[i].addEventListener("mouseover", labelMouseOver(labelButton[i].id));
//	labelButton[i].addEventListener("mouseout", labelMouseOut(labelButton[i].id))
//}
