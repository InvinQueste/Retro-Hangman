function updateAvgScore() {
  if (scores.length === 0) return;
  let sum = scores.reduce((a, b) => a + b, 0);
  let avg = (sum / scores.length).toFixed(2);
  document.getElementById("avgscore").innerText = `Games Played: ${totalGames}
    Average Score: ${avg}`;
}
