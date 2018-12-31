setInterval(function() {
	var currentDate= new Date();
	var seconds= currentDate.getSeconds();
	var hours= currentDate.getHours();
	var minutes= currentDate.getMinutes();
	var second_hand=document.getElementById("second");
	var minute_hand=document.getElementById("minute");
	var hour_hand=document.getElementById("hour");

	var degreeHour=(((((hours)+(minutes/60))/12)*360)-90);
	var degreeSeconds=(((seconds/60)*360) - 90);
	var degreeMinutes= ((((minutes+(seconds/60))/60)*360) - 90);

	second.style.transform="rotateZ("+ degreeSeconds + "deg)";

	minute.style.transform="rotateZ("+ degreeMinutes + "deg)";

	hour.style.transform="rotateZ(" + degreeHour + "deg)";
}, 5);