const moodImages = {
  happy: "^ㅂ^",
  sad: "Q_Q",
  angry: "ಠ╭╮ಠ",
  confused: "(・・)",
};

const happyButton = document.getElementById("happy");
const sadButton = document.getElementById("sad");
const angryButton = document.getElementById("angry");
const confusedButton = document.getElementById("confused");
const image = document.getElementById("emoji");

happyButton.addEventListener("click", () => {
  store.dispatch({ type: "HAPPY" });
  image.innerText = moodImages.happy;
});

sadButton.addEventListener("click", () => {
  store.dispatch({ type: "SAD" });
  image.innerText = moodImages.sad;
});

angryButton.addEventListener("click", () => {
  store.dispatch({ type: "ANGRY" });
  image.innerText = moodImages.angry;
});

confusedButton.addEventListener("click", () => {
  store.dispatch({ type: "CONFUSED" });
  image.innerText = moodImages.confused;
});
