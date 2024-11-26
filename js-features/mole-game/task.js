
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);

  hole.onclick = function () {
    if (hole.classList.contains("hole_has-mole")) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }

    if (dead.textContent === "10") {
      alert("You won");
      resetGame();
    }
    if (lost.textContent === "10") {
      alert("Geme over");
      resetGame();
    }
  };
}

function resetGame() {
  dead.textContent = 0;
  lost.textContent = 0;
}
