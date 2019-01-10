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
for(i= 0; i< 2 ; i++){
  var random = generateRandomNo(gameObject.length);
  var element = gameObject[random];
  var q = [];
  q.push(element);
  removeArray(q,gameObject);
  var b = generateTwoOrFour();
  element[2] = b;
  boxGen.push(element);
} 
return boxGen;
}

// var a=[[1,1,0],[1,2,0],[1,3,0],[1,4,0],[2,1,0],[2,2,0],[2,3,0],[2,4,0],[3,1,0],[3,2,0],[3,3,0],[3,4,0],[4,1,0],[4,2,0],[4,3,0],[4,4,0]];
// // var  boxGen=[[1,3,2],[2,3,4],[3,3,2],[4,3,4]];
// var boxGen = [[1,2,2],[2,3,2], [2,4,2]];
// removeArray(boxGen, a);

// function  elementsRemainingDown(gameObject,columnNo,index)
// {  
//       var a=[];
//       for(var i=0; i< gameObject.length;i++){
//       if(gameObject[i][0] > index && gameObject[i][1]== columnNo){
//         a.push(gameObject[i]);                 
//       }
//       }   
//       return a;
// }
// function lowestIndexInColumn(currentState,columnNo)
// {
//   var b=[];
//   for(var i=0; i< currentState.length; i++){
//     if(currentState[i][1] == columnNo){
//      b.push(currentState[i][0]);
//     }
//   }
// return Math.min.apply(Math, b);
// }
// function highestIndexInColumn(currentState,columnNo)
// {
//    var b=[];
//   for(var i=0; i< currentState.length; i++){
//     if(currentState[i][1] == columnNo){
//      b.push(currentState[i][0]);
//     }
//   }
// return Math.max.apply(Math, b);
// }

// function shiftDown(currentState, gameObject, column){

// for(var i=(currentState.length-1);i>=0; i--)
// {
// if(currentState[i][1] == column){
// var gameObject=gameObject;
// var toGo = elementsRemainingDown(gameObject,column,currentState[i][0]);
// if (toGo[0]== undefined){continue}
// var b= gameObject.filter((elem) => (elem[0] == highestIndexInColumn(toGo,column) && elem[1]==column));
// var c= currentState.filter((elem) => (elem[0] == currentState[i][0] && elem[1]==column));
// var withHighestIndexGameobject =  b;
// var withHighestIndexcurrentState =  c[0][2];
// removeArray(b,gameObject);
// removeArray(c, currentState);
// b[0][2]=c[0][2];
// c[0][2]=0;

// currentState.push(b[0]);
// gameObject.push(c[0]);
// }
// }
// }
// shiftDown(boxGen,a,3);


// function arrays(array){
//    array.sort(function(a,b){
//    	return (a[0] - b[0]);
//    });
// }

// function arrangeWithRows(array){
// 	  var colOne =[];
// 	  var colTwo = [];
// 	  var colThree = [];
// 	  var colFour = [];

//       	array.forEach(function(element){
//       		if(element[1] == 1){colOne.push(element)};
//       		if(element[1] == 2){colTwo.push(element)};
//       		if(element[1] == 3){colThree.push(element)}; 
//       		if(element[1] == 4){colFour.push(element)};
//       	})
      
//       var temp = [];
//       arrays(colOne);
//       arrays(colTwo);
//       arrays(colThree);
//       arrays(colFour);
//       colOne.forEach(function(element){temp.push(element)});
//       colTwo.forEach(function(element){temp.push(element)});
//       colThree.forEach(function(element){temp.push(element)});
//       colFour.forEach(function(element){temp.push(element)});
//       return temp;	
// }
// // [[1,2,2],[2,3,2], [2,4,2]];
// function checkToAdd(currentState, gameObject, columnNo){
//  currentState = arrangeWithRows(currentState);
//  for(var i= (currentState.length - 1); i >=0 ; i--){

//    if(currentState[i][1] == columnNo && i!=0 && currentState[i-1][1] == columnNo && currentState[i][2] == currentState[(i-1)][2] ){
//      console.log(currentState[i]);
//      var b=currentState[i][2] + currentState[(i-1)][2];
//      currentState[i][2] = b;
//      currentState[i-1][2] = undefined;
//    }
//  }
//  for(var i= (currentState.length - 1); i >=0 ; i--){
//    if(currentState[i][2] == undefined /*&& i!=0 && currentState[i-1][1] == columnNo*/ ){
//     console.log(currentState[i]);
//     var temporary=[];
//     temporary.push(currentState[i]);
//     removeArray(temporary ,currentState);
//     temporary[0][2] = 0;
//     gameObject.push(temporary[0]);
//    }
//  }
//  return currentState;
// }

// boxGen = checkToAdd(boxGen , a , 3);
// shiftDown(boxGen,a,3);
// boxGen = arrangeWithRows(boxGen);
// a = arrangeWithRows(a);



// function removeArray(currentState, gameObject) {
//   for(var i=0; i < currentState.length ; i++) {
//       gameObject.splice(gettingIndex(currentState[i], gameObject), 1);
//   }
// }

// function gettingIndex(array, gameObject) {
//   for(j=0;j < gameObject.length ; j++) {
//     if( (gameObject[j][0] == array[0]) && (gameObject[j][1] == array[1]) ){
//       return j;
//     }
//   }
//   return 16;  
// }

// function generateRandomNo(maxValue) {
//   var min=0; 
//   var max=maxValue; 
//   var random = Math.floor( Math.random() * (+max - +min) ) + +min; 
//   return random;
// }

// function generateTwoOrFour() {
//   var min=0; 
//   var max=2; 
//   var array = [2,4];
//   var random =Math.floor( Math.random() * (+max - +min) ) + +min; 
//   return array[random];
// }

// function generateBoxes(gameObject) {
//   var boxGen = [];
//   for(i= 0; i< 2 ; i++){
//     var random = generateRandomNo(gameObject.length);
//     var element = gameObject[random];
//     var q = [];
//     q.push(element);
//     removeArray(q,gameObject);
//     var b = generateTwoOrFour();
//     element[2] = b;
//     boxGen.push(element);
// } 
// return boxGen;
// }


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
    for (var i=(currentState.length-1);i>=0; i--) {
    if(currentState[i][1] == column) {
      var gameObject=gameObject;
      var toGo = this.elementsRemainingDown(gameObject,column,currentState[i][0]);
      if (toGo[0]== undefined) {continue};
      var b = gameObject.filter ((elem) => (elem[0] == this.highestIndexInColumn(toGo,column) && elem[1]==column));
      var c = currentState.filter ((elem) => (elem[0] == currentState[i][0] && elem[1]==column));
      var withHighestIndexGameobject = b;
      var withHighestIndexcurrentState = c[0][2];
      removeArray(b,gameObject);
      removeArray(c, currentState);
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
var a=[[1,1,0],[1,2,0],[1,3,0],[1,4,0],[2,1,0],[2,2,0],[2,3,0],[2,4,0],[3,1,0],[3,2,0],[3,3,0],[3,4,0],[4,1,0],[4,2,0],[4,3,0],[4,4,0]];

// var  boxGen=[[1,3,2],[2,3,2],[3,3,2],[4,3,4]];

// var  boxGen=[[3,1,2],[3,2,2],[3,3,2],[3,4,4]];

var boxGen = [[2,3,2], [2,4,2],[1,2,2]];

// function executeDownSwipe(currentState){
//   var cS, gS;
// removeArray(currentState ,a);
// swipeDown.shiftDown(currentState,a,3);

// cS = swipeDown.checkToAdd(currentState , a , 3);
// swipeDown.shiftDown(currentState,a,3);
// cS = swipeDown.arrangeWithRows(currentState);
// gS = swipeDown.arrangeWithRows(a);
// return cS;
// }

removeArray(boxGen ,a);
function executeDownSwipe(column){


swipeDown.shiftDown(boxGen,a,column);

boxGen = swipeDown.checkToAdd(boxGen , a , column);
swipeDown.shiftDown(boxGen, a ,column);
boxGen = swipeDown.arrangeWithRows(boxGen);
a = swipeDown.arrangeWithRows(a);
console.log(boxGen);
}



// swipeDown.shiftDown(boxGen,a,3);

// boxGen = swipeDown.checkToAdd(boxGen , a , 3);
// swipeDown.shiftDown(boxGen,a,3);
// boxGen = swipeDown.arrangeWithRows(boxGen);
// a = swipeDown.arrangeWithRows(a);
// console.log(boxGen);



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

function executeRightSwipe(row){
//   var a=[[1,1,0],[1,2,0],[1,3,0],[1,4,0],[2,1,0],[2,2,0],[2,3,0],[2,4,0],[3,1,0],[3,2,0],[3,3,0],[3,4,0],[4,1,0],[4,2,0],[4,3,0],[4,4,0]];


removeArray(boxGen , a);
 swipeRight.shiftRight(boxGen,a,row);
boxGen = swipeRight.checkToAdd(boxGen , a , row);
swipeRight.shiftRight(boxGen,a,row);
boxGen = swipeRight.arrangeWithColumns(boxGen);
a = swipeRight.arrangeWithColumns(a);
}



