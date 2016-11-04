var score = 0;
function Flap() {
var f = Math.random();
if (f > 0.5) {
document.getElementById("status").innerHTML = "You flapped";
score = score + 1;
} 
else {
GemO();
}
}
function DoNoFlap() {
var f = Math.random();
if (f > 0.5) {
document.getElementById("status").innerHTML = "You not flapped";
score = score + 1;
} else {
GemO();
}
}

function GemO() {
  document.getElementById("status").innerHTML = "Gaem over duh!";
  alert("Game Over! Score : "+score);
  score = 0;
}
