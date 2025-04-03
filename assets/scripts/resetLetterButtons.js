function resetLetterButtons() {
  let container = document.getElementById("letterbuttons");
  container.innerHTML = "";

  for (let letter of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    let button = document.createElement("button");
    button.innerText = letter;
    button.className =
      "bg-gray-800 text-white text-2xl px-3 py-2 m-1 border-2 border-white rounded-lg transition hover:bg-gray-600 active:scale-90";
    button.onclick = function () {
      check(letter, button);
    };
    container.appendChild(button);
    container.appendChild(document.createTextNode(" "));
  }
}
