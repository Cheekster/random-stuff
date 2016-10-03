//Flappy Text

var score = 0;

function Flap() {
var f = Math.floor((Math.random * 2)+1);
if (f == 1) {
document.getElementById("status").innerHTML = "You flapped";
} else {
GemO();
}
}

function DoNotFlap() {
var f = Math.floor((Math.random * 2)+1);
if (f == 1) {
document.getElementById("status").innerHTML = "You not flapped";
} else {
GemO();
}
}
