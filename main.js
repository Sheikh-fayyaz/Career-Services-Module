var rotCirle = document.getElementById("circle-holder"); 
var deg = 60;
  for (let i = 1; i <= 6; i++) {
    document.getElementById('nav-'+i+'-tab').onclick = function(){
        var mov = (60*i)-30;
        rotCirle.style.transform = `rotate(${mov}deg)`;
    }
  }