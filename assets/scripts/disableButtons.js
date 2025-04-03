function disableButtons() {
  let buttons = document.querySelectorAll("#letterbuttons button");
  buttons.forEach((button) => {
    button.disabled = true;
    button.classList.remove("hover:bg-gray-600", "hover:bg-gray-600");
  });
}
