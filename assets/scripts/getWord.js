function getWord() {
  if (!started) {
    document
      .getElementById("heading")
      .classList.add(
        "sm:w-[17%]",
        "w-2/5",
        "sm:absolute",
        "sm:top-0",
        "mb-10",
        "sm:mb-0"
      );
    document
      .getElementById("heading")
      .classList.remove("w-4/5", "mb-4", "sm:w-1/2");
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
