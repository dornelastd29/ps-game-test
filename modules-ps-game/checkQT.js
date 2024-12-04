import init from "./init.js";
import { rdPt } from "./game-setup.js";
import { gameSection } from "./game-setup.js";
import { createBtn } from "./create-btn.js";

export default function checkQT(value, obj) {
  if (obj.info) {
    const coverInfo = document.createElement("div");
    coverInfo.style.backgroundImage = `url(${obj.img})`;
    coverInfo.style.backgroundSize = "cover";
    coverInfo.style.backgroundRepeat = "no-repeat";
    coverInfo.style.height = "20rem";
    coverInfo.style.marginTop = "0.5rem";
    coverInfo.style.display = "flex";
    coverInfo.style.justifyContent = "center";
    coverInfo.style.alignItems = "center";
    coverInfo.style.minWidth = "26rem";

    const info = document.createElement("p");
    info.style.backgroundColor = "rgba(0, 0, 0, 0.497)";
    info.style.textDecoration = "underline";
    info.style.fontWeight = "bolder";
    info.style.color = "white";
    info.textContent = obj.info;
    coverInfo.appendChild(info);
    gameSection.appendChild(coverInfo);
  }

  gameSection.childNodes[2].remove();

  if (obj.vid === "true") {
    const video = document.createElement("video");
    video.style.width = "20rem";
    video.style.height = "20rem";
    video.src = obj.vidLink;
    video.play();
    video.loop = true;
    gameSection.appendChild(video);
  }

  const rightwrong = document.createElement("p");
  gameSection.appendChild(rightwrong);

  if (value.toLowerCase().trim() === obj.right) {
    rightwrong.textContent = "Certa Resposta!";
    rightwrong.style.color = "green";
    rightwrong.style.backgroundColor = "#fff";
    rightwrong.style.borderRadius = "0.6rem";
    rightwrong.style.padding = "0.5rem";
    rightwrong.style.border = "1px solid black";
    rdPt.points++;
  } else {
    rightwrong.textContent = "Resposta Errada!";
    rightwrong.style.color = "red";
    rightwrong.style.backgroundColor = "#fff";
    rightwrong.style.borderRadius = "0.6rem";
    rightwrong.style.padding = "0.5rem";
  }

  const next = createBtn("Próximo");
  gameSection.appendChild(next);
  next.addEventListener("click", () => {
    while (gameSection.firstChild) {
      gameSection.removeChild(gameSection.firstChild);
    }
    rdPt.round++;
    init();
  });
}
