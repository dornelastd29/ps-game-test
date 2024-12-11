import init from "./init.js";
import { rdPt } from "./game-setup.js";
import { gameSection } from "./game-setup.js";
import { createBtn } from "./create-btn.js";
import { createCoverInfo, createInfo } from "./createINFO.js";
import { createVideo } from "./createVIDEO.js";
import { createRW } from "./createRW.js";
import { fetchImg } from "./fetchIMG.js";
import { fetchVideo } from "./fetchVideo.js";

export default function checkQT(value, obj) {
  createRW(value.toLowerCase().trim() === obj.right, gameSection, rdPt.points);

  gameSection.childNodes[1].remove();
  gameSection.childNodes[1].remove();

  const next = createBtn("Loading...");
  gameSection.appendChild(next);
  next.disabled = true;
  next.addEventListener("click", () => {
    while (gameSection.firstChild) {
      gameSection.removeChild(gameSection.firstChild);
    }
    rdPt.round++;
    init();
  });
  
  if (obj.info) {
    fetchImg(obj.img, obj.info, createCoverInfo, createInfo, gameSection, next);
  }

  if (obj.vid === "true") {
    fetchVideo(obj.vidLink, createVideo, gameSection, next);
  }
}
