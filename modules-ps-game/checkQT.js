import init from "./init.js";
import { rdPt } from "./game-setup.js";
import { gameSection } from "./game-setup.js";
import { createBtn } from "./create-btn.js";
import { createCoverInfo, createInfo } from "../createINFO.js";
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

  gameSection.childNodes[2].remove();

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
