document.addEventListener("DOMContentLoaded", function(event) {
  var year = new Date().getFullYear();
  document.getElementById('copyright').innerHTML = "Copyright &copy; Waldviertel Therapie " + year;
});