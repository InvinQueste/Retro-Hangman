function check(letter, button) {
  let cindexes = [];

  for (let i = 0; i < word.length; i++) {
    if (guess[i] === "-" && word[i] === letter) {
      cindexes.push(i);
    }
  }

  if (cindexes.length > 0) {
    let rind = cindexes[Math.floor(Math.random() * cindexes.length)];
    guess = guess.substring(0, rind) + letter + guess.substring(rind + 1);
    document.getElementById("guess").innerHTML = guess.split("").join(" ");
    button.classList.add("bg-green-500", "hover:bg-green-600");
    button.classList.remove("bg-gray-800", "hover:bg-gray-600");
    if (!guess.includes("-")) {
      showPopup("Congratulations! You guessed the word!", "Play Again");
      disableButtons();
      totalGames++;
      scores.push(lives);
      updateAvgScore();
      return;
    }
  } else {
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
      showPopup("Game Over! The word was: " + word, "Try Again");
      disableButtons();
      totalGames++;
      scores.push(0);
      updateAvgScore();
      return;
    }
  }
}
