var funk = function (a) {
  if(a = false) {
    console.log("You didn't live or die for the funk.")
  } else if(a = true) {
    console.log("You died for the funk.");
  } else {
    console.log("I pity the bool");
  }
}


function noNine(){
  var x = Boolean(prompt("Do you live for the funk?"));
  funk(x);
  console.log("NOTORIOUS.");
}
