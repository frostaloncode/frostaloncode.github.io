document.addEventListener("DOMContentLoaded", function() {
    fetch("../../include/navbar.html")
      .then(response => response.text())
      .then(data => document.getElementById("navbar-container").innerHTML = data);
  });
  