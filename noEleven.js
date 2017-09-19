
function noEleven(){
  document.getElementById("testText").innerHTML =  "<img src='ccat.jpg'> What </img>";
}


(function popUp() {

  window.addEventListener("load", subprompt);
  function subprompt()
  {

      var reDir = prompt("HOT SHINGLES IN UR AREA", "TAKE ME TO THEM");
      var otherReDir = prompt("THESE HOT ASINS WANT TO FK", "GET LAID NOW");
      if (reDir && otherReDir == "no") {
        console.log("suit yourself man, whatever.");
      } else {
      noEleven();
      }
    }

})();
