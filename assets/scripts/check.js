var correctMusic = new Audio("assets/audio/correct.mp3");
var wrongMusic = new Audio("assets/audio/wrong.mp3");
var gameClearMusic = new Audio("assets/audio/gameClear.mp3");
var gameOverMusic = new Audio("assets/audio/gameOver.mp3");

correctMusic.preload = "auto";
wrongMusic.preload = "auto";
gameClearMusic.preload = "auto";
gameOverMusic.preload = "auto";

function check(letter, button) {
  let cindexes = [];

  for (let i = 0; i < word.length; i++) {
    if (guess[i] === "-" && word[i] === letter) {
      cindexes.push(i);
    }
  }

  if (cindexes.length > 0) {
    if (guess.includes("-")) {
      correctMusic.currentTime = 0;
      correctMusic.play();
    }
    let rind = cindexes[Math.floor(Math.random() * cindexes.length)];
    guess = guess.substring(0, rind) + letter + guess.substring(rind + 1);
    document.getElementById("guess").innerHTML = guess.split("").join(" ");
    button.classList.add("bg-green-500", "hover:bg-green-600");
    button.classList.remove("bg-gray-800", "hover:bg-gray-600");
    if (!guess.includes("-")) {
      gameClearMusic.play();
      showPopup("Congratulations! You guessed the word!", "Okay");
      disableButtons();
      totalGames++;
      wonGames++;
      scores.push(lives);
      updateAvgScore();
      return;
    }
  } else {
    if (lives > 1) {
      wrongMusic.currentTime = 0;
      wrongMusic.play();
    }
    button.classList.add("bg-red-800", "scale-90");
    button.classList.remove(
      "bg-green-500",
      "bg-gray-800",
      "hover:bg-gray-600",
      "hover:bg-green-600"
    );
    button.disabled = true;
    lives--;
    updateLives();
    if (lives <= 0) {
      gameOverMusic.play();
      showPopup("Game Over! The word was: " + word, "Okay");
      disableButtons();
      totalGames++;
      scores.push(0);
      updateAvgScore();
      return;
    }
  }
}
