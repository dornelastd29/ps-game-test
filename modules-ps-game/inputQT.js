import checkQT from "./checkQT.js";
import { gameSection } from "./game-setup.js";
import { createBtn } from "./create-btn.js";
import { p } from "./createP.js";

export default function inputQT(obj) {
  while (gameSection.firstChild) {
    gameSection.removeChild(gameSection.firstChild);
  }

  const question = p(obj.qt);
  gameSection.appendChild(question);

  const input = document.createElement("input");
  input.style.borderRadius = "1rem";
  input.style.border = "0";
  input.style.textAlign = "center";
  input.style.border = "2px solid white";
  input.placeholder = "Digitar...";
  input.style.background = "rgb(255, 255, 255, 0.9)";
  gameSection.appendChild(input);

  const readyBtn = createBtn("Pronto");
  gameSection.appendChild(readyBtn);

  readyBtn.addEventListener("click", () => {
    const value = input.value;
    checkQT(value, obj);
  });
}
