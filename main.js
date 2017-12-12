(function(){
  var isRunning = false;
  var interval = null;
  var colors = [
    "#78f62c",
    "#78fe678",
    "#58962c",
    "#59F894"
  ];
  var item = null;

  // Au clic sur le bouton start / stop
  setInterval(function(){
    if (isRunning){
      item = colors[Math.floor(Math.random()*colors.length)]; // Couleur aléatoire
      document.body.style.backgroundColor = item;
    }
    else{
      // Arrête le 
    }
  }, 100);

  // Au clic sur le bouton
  document.getElementById('btnStrob').addEventListener("click", function(){
    isRunning = !isRunning;
  })

  function randomColor(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
  }
})();