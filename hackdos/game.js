var va = prompt("Enter the number of viruses :");
var vb = prompt("Enter time (in seconds) :");
var vc = prompt("Enter HACK.EXE auto-typing interval (in milliseconds) :");

var test = document.getElementById("test");
var out = document.getElementById("out");
var cmd = "";
var viruses = parseInt(va);

setInterval(hackChar,parseInt(vc));
setTimeout(hackComputer,parseInt(vb) * 1000);

function typeSomething(event) {
var x = event.keyCode;
cmd += String.fromCharCode(x);
var y = String.fromCharCode(x);

test.innerHTML = ">"+cmd;

if (x == 8) {
cmd = "";
test.innerHTML = ">"+cmd;
};

if (cmd == "ANTIHACK") {
viruses = viruses - 1;
if (viruses <= 0) {
out.innerHTML = "Your computer was disinfected";
wonGame();
};
out.innerHTML += "<br>>"+cmd+"<br><br>";
cmd = "";
out.innerHTML += "Anti-hacked 1 virus.<br>";
test.innerHTML = ">"+cmd;
};

};

function hackChar() {
cmd += "HACK.EXE";
test.innerHTML = ">"+cmd;
if (cmd == "HACK.EXE") {
viruses = viruses + 1;
out.innerHTML += "<br>>"+cmd+"<br><br>HACK.EXE Executed! +1 Virus";
cmd = "";
test.innerHTML = ">"+cmd;
}
};

function wonGame() {
window.location = "won.html"
};

function hackComputer() {
window.location = "lose.html";
};
