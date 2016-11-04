var score = 0;
function Flap() {
var f = Math.floor((Math.random * 2)+1);
if (f == 1) {
document.getElementById("status").innerHTML = "You flapped";
} 
else {
GemO();
}
}
function DoNoFlap() {
var f = Math.floor((Math.random * 2)+1);
if (f == 1) {
document.getElementById("status").innerHTML = "You not flapped";
} else {
GemO();
}
}

function GemO() {
  document.getElementById("status").innerHTML = "Gaem over duh!";
  alert("Game Over! Score : "+score);
  score = 0;
}
