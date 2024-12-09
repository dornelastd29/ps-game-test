import init from "./init.js";
import { rdPt } from "./game-setup.js";
import { gameSection } from "./game-setup.js";
import { createBtn } from "./create-btn.js";
import { createCoverInfo, createInfo } from "./createINFO.js";
import { createVideo } from "./createVIDEO.js";
import { createRW } from "./createRW.js";

export default function checkQT(value, obj) {
  if (obj.info) {
    const coverInfo = createCoverInfo(obj.img);
    createInfo(obj.info, coverInfo);
    gameSection.appendChild(coverInfo);
  }

  if (obj.vid === "true") {
    createVideo(obj.vidLink, gameSection);
  }

  createRW(value.toLowerCase().trim() === obj.right, gameSection, rdPt.points);

  console.log(gameSection.childNodes[1]);
  gameSection.childNodes[1].remove();
  gameSection.childNodes[1].remove();

  const next = createBtn("Next");
  gameSection.appendChild(next);
  next.addEventListener("click", () => {
    while (gameSection.firstChild) {
      gameSection.removeChild(gameSection.firstChild);
    }
    rdPt.round++;
    init();
  });
}
