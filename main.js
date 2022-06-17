const countdown = () => {
	// create future time, current time and gap between the two
	const countDate = new Date("June 12, 2023 00:00:00").getTime();
	const now = new Date().getTime();
	const gap = countDate - now;

	// create time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	// divide the gap with days, hours, ect.. to display time remainig
	const dayDisplay = Math.floor(gap / day);
	const hourDisplay = Math.floor((gap % day) / hour);
	const minuteDisplay = Math.floor((gap % hour) / minute);
	const secondDisplay = Math.floor((gap % minute) / second);

	// get Html elements and display time
	document.querySelector(".days").innerText = dayDisplay;
	document.querySelector(".hours").innerText = hourDisplay;
	document.querySelector(".minutes").innerText = minuteDisplay;
	document.querySelector(".seconds").innerText = secondDisplay;
};
// countdown function running every 1 second(1000) interval using setInterval method
setInterval(countdown, 1000);
