function removeArray(currentState,gameObject){
for(var i=0; i < currentState.length ; i++){
    gameObject.splice(gettingIndex(currentState[i],gameObject),1);
}
}

function gettingIndex(array, gameObject){
  for(j=0;j < gameObject.length ; j++){
    if((gameObject[j][0] == array[0]) && (gameObject[j][1] == array[1])){
      return j;
    }
  }
  return 16;  
}

function generateRandomNo(maxValue){
  var min=0; 
  var max=maxValue; 
  var random =Math.floor(Math.random() * (+max - +min)) + +min; 
  return random;
}
function generateTwoOrFour(){
  var min=0; 
  var max=2; 
  var array = [2,4];
  var random =Math.floor(Math.random() * (+max - +min)) + +min; 
  return array[random];
}

function generateBoxes(gameObject){
var boxGen = [];
for(i= 0; i< 1 ; i++){
  var random = generateRandomNo(gameObject.length);
  var element = gameObject[random];
  var q = [];
  q.push(element);
  removeArray(q,gameObject);
  var b = generateTwoOrFour();
  element[2] = b;
  boxGen.push(element);
} 
representCurrentState(boxGen);
return boxGen;
}
function checkEqualityArrays(array1 , array2){
  var counterVariable = 0 ;
  for(var i=0 ; i < array1.length ; i++){
     if(array1[i][0] == array2[i][0] && array1[i][1] == array2[i][1] && array1[i][2] == array2[i][2]){
       counterVariable +=1;
     }
  }
  for(var i=0 ; i < array2.length ; i++){
     if(array1[i][0] == array2[i][0] && array1[i][1] == array2[i][1] && array1[i][2] == array2[i][2]){
       counterVariable += 1 ;
     }
  }
  if(counterVariable == array1.length + array2.length){return true} else {return false} ; 
}

let swipeDown = {

  elementsRemainingDown : function(gameObject,columnNo,index) {  
    var a = [];
    for(var i = 0; i< gameObject.length;i++) {
      if(gameObject[i][0] > index && gameObject[i][1]== columnNo){
        a.push(gameObject[i]);                 
      }
    }   
    return a;
  },

  lowestIndexInColumn: function (currentState,columnNo) {
    var b = [];
    for(var i = 0 ; i < currentState.length; i++) {
      if(currentState[i][1] == columnNo) {
        b.push(currentState[i][0]);
      }
    }
    return Math.min.apply(Math, b);
  },

  highestIndexInColumn: function(currentState,columnNo){
    var b=[];
    for(var i=0; i< currentState.length; i++){
      if(currentState[i][1] == columnNo){
        b.push(currentState[i][0]);
      }
    }
    return Math.max.apply(Math, b);
  },

  shiftDown: function (currentState, gameObject, column) {
    for (var i=(currentState.length-1); i>=0; i--) {
    if(currentState[i][1] == column) {
      var gameObject=gameObject;
      var toGo = this.elementsRemainingDown(gameObject,column,currentState[i][0]);

      if (toGo[0]== undefined){continue};
      var b = gameObject.filter ((elem) => (elem[0] == this.highestIndexInColumn(toGo,column) && elem[1]==column));
      var c = currentState.filter ((elem) => (elem[0] == currentState[i][0] && elem[1]==column));
      var withHighestIndexGameobject = b;
      var withHighestIndexcurrentState = c[0][2];
      removeArray(b,gameObject);
      removeArray(c, currentState);
      transition(c[0],b[0], generateCorrespondingBoxNo(c[0]),gameBoxes);
      b[0][2] = c[0][2];
      c[0][2] = 0;
      currentState.push(b[0]);
      gameObject.push(c[0]);
      }
      }
  },

  arrays: function (array) {
    array.sort(function(a, b) {
      return (a[0] - b[0]);
    });
  },

  arrangeWithRows: function(array) {
    var colOne = [];
    var colTwo = [];
    var colThree = [];
    var colFour = [];

    array.forEach(function(element) {
      if(element[1] == 1) {colOne.push(element)};
      if(element[1] == 2) {colTwo.push(element)};
      if(element[1] == 3) {colThree.push(element)}; 
      if(element[1] == 4) {colFour.push(element)};
    })

    var temp = [];
    this.arrays(colOne);
    this.arrays(colTwo);
    this.arrays(colThree);
    this.arrays(colFour);
    colOne.forEach(function(element) {temp.push(element)});
    colTwo.forEach(function(element) {temp.push(element)});
    colThree.forEach(function(element) {temp.push(element)});
    colFour.forEach(function(element) {temp.push(element)});
    return temp;  
  },

  checkToAdd: function (currentState, gameObject, columnNo){
  
    currentState = this.arrangeWithRows(currentState);
    for(var i= ( currentState.length - 1 ); i >= 0 ; i--) {
      if(currentState[i][1] == columnNo && i!=0 && currentState[i-1][1] == columnNo && currentState[i][2] == currentState[(i-1)][2]) {
        var b = currentState[i][2] + currentState[(i-1)][2];

        currentState[i][2] = b;
        currentState[i-1][2] = undefined;
        gameBoxes[generateCorrespondingBoxNo(currentState[i])].innerHTML = b;  
        gameBoxes[generateCorrespondingBoxNo(currentState[i-1])].style.opacity = "0";
        gameBoxes[generateCorrespondingBoxNo(currentState[i])].style.fontSize = "50px";
        var t = generateCorrespondingBoxNo(currentState[i]);
        setTimeout(function(){
        gameBoxes[t].style.fontSize = "40px";  
        },100);
      } 
    }
    for(var i= (currentState.length - 1); i >=0 ; i--) {
    if(currentState[i][2] == undefined ) {
      var temporary = [];
      temporary.push(currentState[i]);
      removeArray(temporary, currentState);
      temporary[0][2] = 0;
      gameObject.push(temporary[0]);
      }
    }
    return currentState;
    }

}


let swipeRight = {

  elementsRemainingRight: function(gameObject,rowNo,index) {  
    var a = [];
    for(var i = 0; i < gameObject.length; i++) {
      if(gameObject[i][1] > index && gameObject[i][0]== rowNo){
        a.push(gameObject[i]);                 
      }
    }   
    return a;
  } ,
  lowestIndexInRow: function(currentState,rowNo) {
    var b = [];
    for(var i = 0; i < currentState.length; i++) {
      if(currentState[i][0] == rowNo) {
       b.push(currentState[i][1]);
      }
    }
  return Math.min.apply(Math, b);
  },
  highestIndexInRow: function(currentState,rowNo) {
    var b = [];
    for(var i = 0 ; i < currentState.length; i++) {
      if(currentState[i][0] == rowNo){
       b.push(currentState[i][1]);
      }
    }
  return Math.max.apply(Math, b);
  },

  shiftRight: function(currentState, gameObject, rowNo){
  for(var i=(currentState.length-1); i>=0; i--){
    if(currentState[i][0] == rowNo) {
      var gameObject = gameObject;
      var toGo = this.elementsRemainingRight(gameObject,rowNo,currentState[i][1]);
      if (toGo[0] == undefined){ continue }
      var b = gameObject.filter((elem) => (elem[1] == this.highestIndexInRow(toGo,rowNo) && elem[0]==rowNo));
      var c = currentState.filter((elem) => (elem[1] == currentState[i][1] && elem[0]==rowNo));
      var withHighestIndexGameobject =  b;
      var withHighestIndexcurrentState = c[0][2];
      removeArray(b, gameObject);
      removeArray(c, currentState);
      transition(c[0],b[0], generateCorrespondingBoxNo(c[0]),gameBoxes);
      b[0][2] = c[0][2];
      c[0][2] = 0;

      currentState.push(b[0]);
      gameObject.push(c[0]);
    }
  }
  },

 

  arrays: function(array) {
     array.sort(function(a,b){
      return (a[1] - b[1]);
     });
  },

  arrangeWithColumns: function (array){
    // console.log(array);
      var rowOne = [];
      var rowTwo = [];
      var rowThree = [];
      var rowFour = [];

          array.forEach(function(element){
            if(element[0] == 1){rowOne.push(element)};
            if(element[0] == 2){rowTwo.push(element)};
            if(element[0] == 3){rowThree.push(element)}; 
            if(element[0] == 4){rowFour.push(element)};
          })
        
        var temp = [];
        this.arrays(rowOne);
        this.arrays(rowTwo);
        this.arrays(rowThree);
        this.arrays(rowFour);
        rowOne.forEach(function(element){temp.push(element)});
        rowTwo.forEach(function(element){temp.push(element)});
        rowThree.forEach(function(element){temp.push(element)});
        rowFour.forEach(function(element){temp.push(element)});
        return temp;  
  },

  checkToAdd: function (currentState, gameObject, rowNo){
   currentState = this.arrangeWithColumns(currentState);
   for(var i= (currentState.length - 1); i >=0 ; i--){
     if(currentState[i][0] == rowNo && i != 0 && currentState[i-1][0] == rowNo && currentState[i][2] == currentState[(i-1)][2]) {
       var b = currentState[i][2] + currentState[(i-1)][2];
       currentState[i][2] = b;
       currentState[i-1][2] = undefined;
       gameBoxes[generateCorrespondingBoxNo(currentState[i])].innerHTML = b;  
       gameBoxes[generateCorrespondingBoxNo(currentState[i-1])].style.opacity = "0";
       gameBoxes[generateCorrespondingBoxNo(currentState[i])].style.fontSize = "50px";
       var t = generateCorrespondingBoxNo(currentState[i]);
        setTimeout(function(){
        gameBoxes[t].style.fontSize = "40px";  
        },100);
     }
   }
   for(var i= (currentState.length - 1); i >=0 ; i--){
     if(currentState[i][2] == undefined ){
      var temporary = [];
      temporary.push(currentState[i]);
      removeArray(temporary, currentState);
      temporary[0][2] = 0;
      gameObject.push(temporary[0]);
      }
   }
   return currentState;
  }  
}

// this part below needs to be made DRY
function generateCorrespondingBoxNo(elem){
  if(elem[0] == 1 && elem[1] == 1){ return 0};
  if(elem[0] == 1 && elem[1] == 2){ return 1};
  if(elem[0] == 1 && elem[1] == 3){ return 2};
  if(elem[0] == 1 && elem[1] == 4){ return 3};
  if(elem[0] == 2 && elem[1] == 1){ return 4};
  if(elem[0] == 2 && elem[1] == 2){ return 5};
  if(elem[0] == 2 && elem[1] == 3){ return 6};
  if(elem[0] == 2 && elem[1] == 4){ return 7};
  if(elem[0] == 3 && elem[1] == 1){ return 8};
  if(elem[0] == 3 && elem[1] == 2){ return 9};
  if(elem[0] == 3 && elem[1] == 3){ return 10};
  if(elem[0] == 3 && elem[1] == 4){ return 11};
  if(elem[0] == 4 && elem[1] == 1){ return 12};
  if(elem[0] == 4 && elem[1] == 2){ return 13};
  if(elem[0] == 4 && elem[1] == 3){ return 14};
  if(elem[0] == 4 && elem[1] == 4){ return 15};
}

function generateHTMLBoxes(boxNo,currentState_element){
gameBoxes[boxNo].style.opacity = "1";
gameBoxes[boxNo].innerHTML = currentState_element[2];
}
function removeHTMLBoxes(boxNo,currentState_element){
gameBoxes[boxNo].style.opacity = "0";
  setTimeout(function(){
    gameBoxes[boxNo].innerHTML = 0 ;
  },250);
}
var a=[[1,1,0],[1,2,0],[1,3,0],[1,4,0],[2,1,0],[2,2,0],[2,3,0],[2,4,0],[3,1,0],[3,2,0],[3,3,0],[3,4,0],[4,1,0],[4,2,0],[4,3,0],[4,4,0]];
var boxes = document.getElementsByClassName("items");
var gameBoxes = document.getElementsByClassName("gameBoxes");
var boxGen = generateBoxes(a);
enable();
function testSwipe(){
boxGen = swipeDown.arrangeWithRows(boxGen);
for(var column=1; column <=4; column++ ){
swipeDown.shiftDown(boxGen,a,column);
}

setTimeout(function(){
var newElement = generateBoxes(a);
for(var column=1; column <=4; column++ ){
  boxGen = swipeDown.checkToAdd(boxGen, a, column);
swipeDown.shiftDown(boxGen,a,column);}
  for(i=0; i < newElement.length ; i++){
    boxGen.push(newElement[i]);
  }
}, 251);

}

function transition(a,b, boxNo,gameBoxes){
  var boxa = boxes[generateCorrespondingBoxNo(a)];
  var boxb = boxes[generateCorrespondingBoxNo(b)];
  var tomove = gameBoxes[boxNo];
  var offsetTop_a = boxa.offsetTop;
  var offsetLeft_a = boxa.offsetLeft;
  var offsetTop_b = boxb.offsetTop;
  var offsetLeft_b = boxb.offsetLeft;
  var translateX = offsetLeft_b - offsetLeft_a ;
  var translateY = offsetTop_b - offsetTop_a ;
  tomove.style.transform = "translate(" + translateX + "px," + translateY + "px)";
  tomove.style.opacity = "0";
  setTimeout(function(){
    generateHTMLBoxes(generateCorrespondingBoxNo(b),b);
    tomove.style.transform = "initial";
    tomove.innerHTML = 0;
  },99);
}

function representCurrentState(currentState){
  for(var i = 0 ; i < currentState.length ; i++){
    generateHTMLBoxes(generateCorrespondingBoxNo(currentState[i]), currentState[i]);
  }
}

setInterval(function(){
for(var i = 0 ; i < gameBoxes.length; i++){
if(gameBoxes[i].innerHTML == 2){
    gameBoxes[i].style.background = "#ffffdd";
}
else if(gameBoxes[i].innerHTML == 4){
  gameBoxes[i].style.background = "#ffff9a";
}
else if(gameBoxes[i].innerHTML == 8){
  gameBoxes[i].style.background = "orange";
}
else if(gameBoxes[i].innerHTML == 16){
    gameBoxes[i].style.background = "#ff8b00";
}
else if(gameBoxes[i].innerHTML == 32){
    gameBoxes[i].style.background = "#ff5c2d";
}
else if(gameBoxes[i].innerHTML == 64){
    gameBoxes[i].style.background = "rgb(226, 69, 35)";
}
else if(gameBoxes[i].innerHTML == 128){
    gameBoxes[i].style.background = "rgb(240, 69, 35)";
}
else if(gameBoxes[i].innerHTML == 256){
    gameBoxes[i].style.background = "rgb(240, 50, 20)";
}
else if(gameBoxes[i].innerHTML == 512){
    gameBoxes[i].style.background = "rgb(240, 30, 10)";
}
else if(gameBoxes[i].innerHTML == 1024){
    gameBoxes[i].style.background = "rgb(240, 10, 05)";
}
else if(gameBoxes[i].innerHTML == 2048){
    gameBoxes[i].style.background = "rgb(240, 0, )";
}
}
if(a.length == 0){
  alert("gameOver");
}

},100);



let swipeUp = {

  elementsRemainingUp : function(gameObject,columnNo,index) {  
    var a = [];
    for(var i = 0; i< gameObject.length;i++) {
      if(gameObject[i][0] < index && gameObject[i][1]== columnNo){
        a.push(gameObject[i]);                 
      }
    }   
    return a;
  },

  lowestIndexInColumn: function (currentState,columnNo) {
    var b = [];
    for(var i = 0 ; i < currentState.length; i++) {
      if(currentState[i][1] == columnNo) {
        b.push(currentState[i][0]);
      }
    }
    return Math.min.apply(Math, b);
  },

  highestIndexInColumn: function(currentState,columnNo){
    var b=[];
    for(var i=0; i< currentState.length; i++){
      if(currentState[i][1] == columnNo){
        b.push(currentState[i][0]);
      }
    }
    return Math.max.apply(Math, b);
  },

  shiftUp: function (currentState, gameObject, column) {
    for (var i=(currentState.length-1); i>=0; i--) {
    if(currentState[i][1] == column) {
      var gameObject=gameObject;
      var toGo = this.elementsRemainingUp(gameObject,column,currentState[i][0]);
      console.log(toGo);
      if (toGo[0]== undefined){continue};
      var b = gameObject.filter ((elem) => (elem[0] == this.lowestIndexInColumn(toGo,column) && elem[1]==column));
      var c = currentState.filter ((elem) => (elem[0] == currentState[i][0] && elem[1]==column));
      var withLowestIndexGameobject = b;
      var withHighestIndexcurrentState = c[0][2];
      removeArray(b,gameObject);
      removeArray(c, currentState);
      transition(c[0],b[0], generateCorrespondingBoxNo(c[0]),gameBoxes);
      b[0][2] = c[0][2];
      c[0][2] = 0;
      currentState.push(b[0]);
      gameObject.push(c[0]);
      }
      }
  },

  arrays: function (array) {
    array.sort(function(a, b) {
      return (b[0] - a[0]);
    });
  },

  arrangeWithRows: function(array) {
    var colOne = [];
    var colTwo = [];
    var colThree = [];
    var colFour = [];

    array.forEach(function(element) {
      if(element[1] == 1) {colOne.push(element)};
      if(element[1] == 2) {colTwo.push(element)};
      if(element[1] == 3) {colThree.push(element)}; 
      if(element[1] == 4) {colFour.push(element)};
    })

    var temp = [];
    this.arrays(colOne);
    this.arrays(colTwo);
    this.arrays(colThree);
    this.arrays(colFour);
    colOne.forEach(function(element) {temp.push(element)});
    colTwo.forEach(function(element) {temp.push(element)});
    colThree.forEach(function(element) {temp.push(element)});
    colFour.forEach(function(element) {temp.push(element)});
    return temp;  
  },

  checkToAdd: function (currentState, gameObject, columnNo){
  
    currentState = this.arrangeWithRows(currentState);
    for(var i= (currentState.length - 1 ); i >= 0 ; i--) {
      if(currentState[i][1] == columnNo && i!=0 && currentState[i-1][1] == columnNo && currentState[i][2] == currentState[(i-1)][2]) {
        var b = currentState[i][2] + currentState[(i-1)][2];
        currentState[i][2] = b;
        currentState[i-1][2] = undefined;
        gameBoxes[generateCorrespondingBoxNo(currentState[i])].innerHTML = b;  
        gameBoxes[generateCorrespondingBoxNo(currentState[i-1])].style.opacity = "0";
        gameBoxes[generateCorrespondingBoxNo(currentState[i])].style.fontSize = "50px";
        var t = generateCorrespondingBoxNo(currentState[i]);
        setTimeout(function(){
        gameBoxes[t].style.fontSize = "40px";  
        },100);
      } 
    }
    for(var i= (currentState.length - 1); i >=0 ; i--) {
    if(currentState[i][2] == undefined ) {
      var temporary = [];
      temporary.push(currentState[i]);
      removeArray(temporary, currentState);
      temporary[0][2] = 0;
      gameObject.push(temporary[0]);

      }
    }
    return currentState;
    }

}
let swipeLeft = {

  elementsRemainingLeft: function(gameObject,rowNo,index) {  
    var a = [];
    for(var i = 0; i < gameObject.length; i++) {
      if(gameObject[i][1] < index && gameObject[i][0]== rowNo){
        a.push(gameObject[i]);                 
      }
    }   
    return a;
  } ,
  lowestIndexInRow: function(currentState,rowNo) {
    var b = [];
    for(var i = 0; i < currentState.length; i++) {
      if(currentState[i][0] == rowNo) {
       b.push(currentState[i][1]);
      }
    }
  return Math.min.apply(Math, b);
  },
  highestIndexInRow: function(currentState,rowNo) {
    var b = [];
    for(var i = 0 ; i < currentState.length; i++) {
      if(currentState[i][0] == rowNo){
       b.push(currentState[i][1]);
      }
    }
  return Math.max.apply(Math, b);
  },

  shiftLeft: function(currentState, gameObject, rowNo){
  for(var i=(currentState.length-1); i>=0; i--){
    if(currentState[i][0] == rowNo) {
      var gameObject = gameObject;
      var toGo = this.elementsRemainingLeft(gameObject,rowNo,currentState[i][1]);
      if (toGo[0] == undefined){ continue }
      var b = gameObject.filter((elem) => (elem[1] == this.lowestIndexInRow(toGo,rowNo) && elem[0]==rowNo));
      var c = currentState.filter((elem) => (elem[1] == currentState[i][1]/*this.highestIndexInRow(currentState, rowNo) */ && elem[0]==rowNo));
      var withLowestIndexGameobject =  b;
      var withLowestIndexcurrentState = c[0][2];
      removeArray(b, gameObject);
      removeArray(c, currentState);
      transition(c[0],b[0], generateCorrespondingBoxNo(c[0]),gameBoxes);
      b[0][2] = c[0][2];
      c[0][2] = 0;

      currentState.push(b[0]);
      gameObject.push(c[0]);
    }
  }
  },

 

  arrays: function(array) {
     array.sort(function(a,b){
      return (b[1] - a[1]);
     });
  },

  arrangeWithColumns: function (array){
      var rowOne = [];
      var rowTwo = [];
      var rowThree = [];
      var rowFour = [];

          array.forEach(function(element){
            if(element[0] == 1){rowOne.push(element)};
            if(element[0] == 2){rowTwo.push(element)};
            if(element[0] == 3){rowThree.push(element)}; 
            if(element[0] == 4){rowFour.push(element)};
          })
        
        var temp = [];
        this.arrays(rowOne);
        this.arrays(rowTwo);
        this.arrays(rowThree);
        this.arrays(rowFour);
        rowOne.forEach(function(element){temp.push(element)});
        rowTwo.forEach(function(element){temp.push(element)});
        rowThree.forEach(function(element){temp.push(element)});
        rowFour.forEach(function(element){temp.push(element)});
        return temp;  
  },

  checkToAdd: function (currentState, gameObject, rowNo){
    
   currentState = this.arrangeWithColumns(currentState);
   for(var i= (currentState.length - 1); i >=0 ; i--){
     if(currentState[i][0] == rowNo && i != 0 && currentState[i-1][0] == rowNo && currentState[i][2] == currentState[(i-1)][2]) {
       var b = currentState[i][2] + currentState[(i-1)][2];
       currentState[i][2] = b;
       currentState[i-1][2] = undefined;
       gameBoxes[generateCorrespondingBoxNo(currentState[i])].innerHTML = b;  
       gameBoxes[generateCorrespondingBoxNo(currentState[i-1])].style.opacity = "0";
       gameBoxes[generateCorrespondingBoxNo(currentState[i])].style.fontSize = "50px";
       var t = generateCorrespondingBoxNo(currentState[i]);
        setTimeout(function(){
        gameBoxes[t].style.fontSize = "40px";  
        },100);
     }
      }
   for(var i= (currentState.length - 1); i >=0 ; i--){
     if(currentState[i][2] == undefined ){
      var temporary = [];
      temporary.push(currentState[i]);
      removeArray(temporary, currentState);
      temporary[0][2] = 0;
      gameObject.push(temporary[0]);
      }
   }
   return currentState;
  }  
}


function arrowKeys(event){
  if(window.event.key == "ArrowDown"){
    executeDownSwipe();
  }
  if(window.event.key == "ArrowRight"){
    executeRightSwipe();
  }
  if(window.event.key == "ArrowUp"){
    executeUpSwipe();
  }
  if(window.event.key == "ArrowLeft"){
    executeLeftSwipe();
  }
}  

function enable(){
 window.addEventListener("keydown", arrowKeys); 
}
function disable(){
  window.removeEventListener("keydown", arrowKeys);  
}


function executeDownSwipe(){
disable();
boxGen = swipeDown.arrangeWithRows(boxGen);
for(var column=1; column <=4; column++ ){
swipeDown.shiftDown(boxGen,a,column);
var checkValidMovement = boxGen;
}

setTimeout(function(){
var newElement = generateBoxes(a);
// console.log(checkValidMovement);
for(var column=1; column <=4; column++ ){
boxGen = swipeDown.checkToAdd(boxGen, a, column);
setTimeout(() => {swipeDown.shiftDown(boxGen,a,column)},150);

}
for(i=0 ; i < newElement.length ; i++){
boxGen.push(newElement[i]);
}
setTimeout(function(){
enable();
}, 50);
}, 220);

}
function executeRightSwipe() {
  disable();
    boxGen = swipeRight.arrangeWithColumns(boxGen);
for(var row=1; row <=4; row++ ){
swipeRight.shiftRight(boxGen,a,row);
}

setTimeout(function(){
var newElement = generateBoxes(a);
for(var row=1; row <=4; row++ ){
  boxGen = swipeRight.checkToAdd(boxGen, a, row);
  setTimeout(() => {swipeRight.shiftRight(boxGen,a,row)},150);
 }
  for(i=0; i < newElement.length ; i++){
    boxGen.push(newElement[i]);
  }
  setTimeout(function(){
enable();
}, 50);

},  220);


}
function executeUpSwipe(){
disable();
boxGen = swipeUp.arrangeWithRows(boxGen);
for(var column=1; column <=4; column++ ){
swipeUp.shiftUp(boxGen,a,column);

}

setTimeout(function(){
var newElement = generateBoxes(a);
for(var column=1; column <=4; column++ ){
  boxGen = swipeUp.checkToAdd(boxGen, a, column);
setTimeout(() => {swipeUp.shiftUp(boxGen,a,column)},150);}
  for(i=0; i < newElement.length ; i++){
    boxGen.push(newElement[i]);
  }
  setTimeout(function(){
enable();
}, 50);

}, /*500*/ 220);

}
function executeLeftSwipe() {
disable();
boxGen = swipeLeft.arrangeWithColumns(boxGen);
for(var row=1; row <=4; row++ ){
swipeLeft.shiftLeft(boxGen,a,row);
}

setTimeout(function(){
var newElement = generateBoxes(a);
for(var row=1; row <=4; row++ ){
  boxGen = swipeLeft.checkToAdd(boxGen, a, row);
  swipeLeft.shiftLeft(boxGen,a,row);}
  for(var i=0; i < newElement.length ; i++){
  boxGen.push(newElement[i]);
}
 
}, 250);

setTimeout(function(){
enable();
}, 300);
}