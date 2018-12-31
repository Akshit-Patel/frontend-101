var keysSmall=["a", "s","d","f","g","h","j","k","l"];
var keysCapital=["A", "S","D","F","G","H","J","K","L"];
var audios=["Clap","Kicks","Snares","Rides","Timbales","Hats","Toms","Crash","Basspunch"];
// looping through various eventListerner to add sounds to divs 
window.addEventListener("keydown", function(e){
  
	for(i=0;i<document.body.firstElementChild.children.length ; i++ ){
		if(e.key==keysSmall[i] || e.key==keysCapital[i]){
			audio = new Audio('audios/'+ audios[i] + '.WAV');
			audio.play();
			document.body.firstElementChild.children[i].className="keypressed";
		}
	} 
});
window.addEventListener("keyup", function(e){

	for(i=0;i<document.body.firstElementChild.children.length ; i++ ){
		document.body.firstElementChild.children[i].className="";
	} 
});