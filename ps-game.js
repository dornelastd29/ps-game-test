import divGame from "./modules-ps-game/divGame.js";
import { divStart, btnStart } from "./modules-ps-game/start-setup.js";
import init  from "./modules-ps-game/init.js";
divGame.style.height = "560px";
window.addEventListener("load", () => {
  document.body.appendChild(divStart);
  divStart.appendChild(btnStart);
  btnStart.addEventListener("click", () => {
    document.body.appendChild(divGame);
    
    divStart.remove();

    init();
  });
});