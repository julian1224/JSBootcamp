

    function multiply(a, b) {
  return a * b;
}
    function concatName(a, b) {
      return a + " " + b;
    }

      function noEight() {
        console.log("Yo. It is I.");
          console.log("let's multiply. Give me two integers.");
            var x = Number(prompt("Enter first number:"));
          var y =  Number(prompt("Enter the second number:"));
        document.getElementById("testText").innerHTML = multiply(y, x);
      console.log("Very good! The answer is embedded in the page.")
    console.log("Let's do that again. Give me a first and a last name.")
  var firstN = String(prompt("First name?"));
var lastN = String(prompt("Last name?"));
  document.getElementById("testText").innerHTML = concatName(firstN, lastN);
      }
