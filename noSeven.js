function noSeven() {

  var variableNumber = [];

  var aNumber = 8,
      anotherNumber = 2,
      yetAnotherNumber = 1337;

  var aBool = true;
  var aString = "an expensive piece of cloth that hardly covers anything."
  var fatalCounter = 0, numberAndBool = 0, stringAndBool = 0;
  var aNumberVariable = 1337, aStringNumber = "666";

for(i = 0; i < variableNumber.length; i++) {
  if (typeof variableNumber[i] != typeof aBool ){
    (fatalCounter++);
  } else {
    console.log("not a string or number");
  }
}
  console.log(fatalCounter);

  for(i = 0; i < variableNumber.length; i++) {
    if (typeof variableNumber[i] != typeof aString ){
      (numberAndBool++);
    } else {
      console.log("not a number or boolean");
    } }
    console.log(numberAndBool);


    for(i = 0; i < variableNumber.length; i++) {
      if (typeof variableNumber[i] != typeof aNumber ){
        (stringAndBool++);
      } else {
        console.log("not a string or boolean");
      }
    }

      console.log(stringAndBool);

      var numberString = (aNumberVariable + aStringNumber);
      console.log(numberString);
      var stringNumber = (aStringNumber + aNumberVariable);
      console.log(stringNumber);

      console.log(typeof numberString);
       console.log(typeof stringNumber);

    }
