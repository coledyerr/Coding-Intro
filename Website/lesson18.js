let button = document.getElementById("ClickME");
button.innerText = button.innerText + " Now! ";
button.addEventListener("click", function () {
  let emoji = document.getElementById("it");
  if (it.style.display === "none") {
    it.style.display = "block";
  } else {
    it.style.display = "none";
  }
});
