function getWord() {
  if (!started) {
    document
      .getElementById("heading")
      .classList.add("absolute", "top-0", "w-[17%]");
    document.getElementById("heading").classList.remove("w-1/2", "mb-4");
    started = true;
  }
  let i = Math.floor(Math.random() * words.length);
  word = words[i];
  guess = word.replace(/./g, "-");
  document.getElementById("guess").innerHTML = guess.split("").join(" ");
  lives = 10;
  updateLives();
  resetLetterButtons();
}
