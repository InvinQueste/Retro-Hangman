function showPopup(message, buttonText) {
  document.getElementById("popup-message").innerText = message;
  document.getElementById("popup-button").innerText = buttonText;
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
