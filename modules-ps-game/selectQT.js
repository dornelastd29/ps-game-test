import checkQT from "./checkQT.js";
import { gameSection } from "./game-setup.js";
import { createBtn } from "./create-btn.js";
import { createSelect, createOPT } from "./createOPT.js";

export default function selectQT(obj) {
  while (gameSection.firstChild) {
    gameSection.removeChild(gameSection.firstChild);
  }

  const question = document.createElement("p");
  question.textContent = obj.qt;
  gameSection.appendChild(question);

  const select = createSelect();
  gameSection.appendChild(select);

  createOPT(obj.opt1Value, obj.opt1Text, select);
  createOPT(obj.opt2Value, obj.opt2Text, select);
  createOPT(obj.opt3Value, obj.opt3Text, select);
  createOPT(obj.opt4Value, obj.opt4Text, select);

  const readyBtn = createBtn("Pronto");
  gameSection.appendChild(readyBtn);

  readyBtn.addEventListener("click", () => {
    const value = select.value;
    checkQT(value, obj);
  });
}
