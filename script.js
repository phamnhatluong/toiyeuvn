const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".no-btn");
const gifVideo = document.querySelector(".result-container video.gif");

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  setInterval(() => {
    const containerRect = questionContainer.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const maxX = containerRect.width - btnWidth;
    const maxY = containerRect.height - btnHeight;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
    noBtn.style.position = "absolute";
  }, 300);
} else {
  noBtn.addEventListener("mouseover", () => {
    const containerRect = questionContainer.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const maxX = containerRect.width - btnWidth;
    const maxY = containerRect.height - btnHeight;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
    noBtn.style.position = "absolute";
  });
}

yesBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const firstVideo = document.querySelector(".question-container video.gif");
  if (firstVideo) {
    firstVideo.pause();
    firstVideo.currentTime = 0;
  }

  questionContainer.style.display = "none";
  heartLoader.style.display = "flex";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "flex";

    if (gifVideo) {
      gifVideo.muted = false; 
      gifVideo.play();
    }
  }, 4000);
});