document.addEventListener("DOMContentLoaded", function() {
    fetch("../../include/navbar.html")
      .then(response => response.text())
      .then(data => document.getElementById("navbar-container").innerHTML = data);
});
document.addEventListener("DOMContentLoaded", function () {
    fetch("../../include/card.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("cardsContainer").innerHTML = `<div class="row">${data}</div>`;
      })
      .catch(error => console.error("Kartlar yüklenirken hata oluştu:", error));
});