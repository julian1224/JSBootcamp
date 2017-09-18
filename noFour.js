// #4
function noFour() {

var variableNumber = [];

var aNumber = 8,
    anotherNumber = 2,
    yetAnotherNumber = 1337;

for (i=0; i< 7; i++) {
  variableNumber[i] = "monkey" + i ;
}
for (i=7; i < 14; i++){
  variableNumber[i] = (i);
}
for (i = 14; i < 20; i++){
  aBool = Math.random();
  if (aBool < 0.5) {
  variableNumber[i] = true;
} else {
    variableNumber[i] = false;
  }
}
console.log(variableNumber);

// reassign

for (i=0; i< 7; i++) {
  variableNumber[i] = "0" + i + ":00 am" ;
}
for (i=14; i > 7; i--){
  variableNumber[i] = (i + 10);
}
for (i = 14; i < 20; i++){
  aBool = Math.random();
  if (aBool < 0.5) {
  variableNumber[i] = true;
} else {
    variableNumber[i] = false;
  }
}
console.log(variableNumber);

}
