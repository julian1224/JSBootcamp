function noTen(){
var whichFunk = Number(prompt("funk 1 or 2?"));
if (whichFunk == 1) {
  oneFunk();
} else if (whichFunk == 2) {
  twoFunk();
} else {
  console.log("Not 1 or 2. Nothing happens.")
}
}


var oneFunk = function(){
  alert("you invoked oneFunk()");
}
var twoFunk = function() {
  alert("you invoked twoFunk()");
}
