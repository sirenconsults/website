var options = document.getElementById("options");
var tempean = document.getElementById("tempean");
var gate = document.getElementById("gate");

function showtempean() {
  options.style.display = "none";
  tempean.style.display = "block";
  gate.style.display = "none";
}

function showgate() {
  options.style.display = "none";
  gate.style.display = "block";
  tempean.style.display = "none";
}
