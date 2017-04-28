var ar = document.getElementById("AscCanvas");

function generateAscii() {
  var w = prompt("Enter Width (characters)");
  var h = prompt("Enter Height (characters)");
  generateMatrix(w, h);
}
  
function generateMatrix(a, b) {
  for (var i = a; i < a; i++) {
    var r = Math.ceil(Math.random() * 9);
    
