function updateLives() {
  let livesDiv = document.getElementById("lives");
  livesDiv.innerHTML = "";
  for (let i = 0; i < lives; i++) {
    livesDiv.innerHTML +=
      "<img src='assets/images/full-heart.png' class='w-5 h-5 sm:w-8 sm:h-8' />";
  }
  for (let i = lives; i < 10; i++) {
    livesDiv.innerHTML +=
      "<img src='assets/images/empty-heart.png' class='w-5 h-5 sm:w-8 sm:h-8' />";
  }
}
