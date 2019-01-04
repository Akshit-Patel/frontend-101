var checked = []; //to store all checked items no
var execution = true;
var final=0;//final checkbox which is checked when shift i=key is pressed
var checkBoxes = document.getElementsByTagName('input');

checkBoxes[0].addEventListener('click', function(){
    if(this.checked == true){
    checked.push(0);
    }
});
checkBoxes[1].addEventListener('click', function(){
    if(this.checked == true){
    checked.push(1);
    }
});
checkBoxes[2].addEventListener('click', function(){
    if(this.checked == true){
    checked.push(2);
    }
});
checkBoxes[3].addEventListener('click', function(){
    if(this.checked == true){
    checked.push(3);
    }
});
checkBoxes[4].addEventListener('click', function(){
    if(this.checked == true){
    checked.push(4);
    }
});
checkBoxes[5].addEventListener('click', function(){
    if(this.checked == true){
    checked.push(5);
    }
});
checkBoxes[6].addEventListener('click', function(){
    if(this.checked == true){
    checked.push(6);
    }
});


window.addEventListener("keyup" , function(e){
    if(e.key == "Shift"){
        var initial =  checked[(checked.length-2)];
        final = checked[(checked.length-1)] ;
        for(var i= initial ; i<= final ; i++ ){
            checkBoxes[i].checked = true;
        }
    }
})