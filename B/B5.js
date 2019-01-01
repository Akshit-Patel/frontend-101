var t=setInterval(function(){
	var a = document.getElementsByTagName('img');
for(var i=0;i< a.length;i++){
	if((a[i].getBoundingClientRect().top < 754 && a[i].getBoundingClientRect().top > 0)  || (a[i].getBoundingClientRect().bottom >=0 && a[i].getBoundingClientRect().bottom  < 754)){
	a[i].style.animation = "animate 0.25s forwards";
}
}
},1);