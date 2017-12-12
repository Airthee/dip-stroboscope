(function(){
  var isRunning = false;
  var interval = null;
  var item = null;

  // Au clic sur le bouton
  document.getElementById('btnStrob').addEventListener("click", function(){
    isRunning = !isRunning;

    if(isRunning){
      interval = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
      }, 200);
    }
    else{
      clearInterval(interval);
    }
  });

  /**
   * Renvoi une couleur aléatoire au format rgb(r, g, b)
   */
  function randomColor(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);

    var color = "rgb("+r+", "+g+", "+b+")";
    return color;
  }
})();