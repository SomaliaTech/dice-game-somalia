let currentNumber = 0;
let acitvePlyer = 0;
let score = [0, 0];
let isPlayer = true;
const PlayerCurrent1 = document.querySelector(".player-1");
const PlyaerCurrent2 = document.querySelector(".player-2");
document.querySelector(".role_dice").addEventListener("click", () => {
  if (isPlayer) {
    const randomDice = Math.floor(Math.random() * 6 + 1);

    document.querySelector(
      ".dice_image"
    ).src = `./dice_${randomDice}.png`;

    currentNumber = currentNumber + randomDice;

    if (randomDice !== 1) {
      document.querySelector(
        `#current_number_player_${acitvePlyer}`
      ).textContent = currentNumber;
    } else {
      document.querySelector(
        `#current_number_player_${acitvePlyer}`
      ).textContent = 0;
      currentNumber = 0;
      acitvePlyer = acitvePlyer === 0 ? 1 : 0;
      PlayerCurrent1.classList.toggle("active");
      PlyaerCurrent2.classList.toggle("active");
    }
  }
});

document.querySelector(".dice_hold").addEventListener("click", () => {
  if (isPlayer) {
    score[acitvePlyer] += currentNumber;

    document.getElementById(`score_player_${acitvePlyer}`).textContent =
      score[Number(acitvePlyer)];
    currentNumber = 0;
    document.querySelector(
      `#current_number_player_${acitvePlyer}`
    ).textContent = 0;
    if (score[Number(acitvePlyer)] >= 20) {
      isPlayer = false;
      document
        .querySelector(`.player-${acitvePlyer + 1}`)
        .classList.add("winer");
      PlayerCurrent1.classList.remove("active");
      document.querySelector(".player-2").classList.remove("active");
    } else {
      acitvePlyer = acitvePlyer === 1 ? 0 : 1;
      PlayerCurrent1.classList.toggle("active");
      PlyaerCurrent2.classList.toggle("active");
    }
  }
});

document.querySelector(".new_game").addEventListener("click", () => {
  isPlayer = true;
  PlyaerCurrent2.classList.remove("winer");
  PlayerCurrent1.classList.remove("winer");
  PlayerCurrent1.classList.add("active");
  PlyaerCurrent2.classList.remove("active");
  currentNumber = 0;
  score[(0, 0)];
  acitvePlyer = 0;
  document.querySelector("#current_number_player_0").textContent = 0;
  document.querySelector("#current_number_player_1").textContent = 0;
  document.querySelector("#score_player_0").textContent = 0;
  document.querySelector("#score_player_1").textContent = 0;
});
