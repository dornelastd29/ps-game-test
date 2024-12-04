import checkQT from "./checkQT.js";
import { gameSection } from "./game-setup.js";
import { createBtn } from "./create-btn.js";

export default function inputQT(obj) {
  while (gameSection.firstChild) {
    gameSection.removeChild(gameSection.firstChild);
  }

  const question = document.createElement("p");
  question.textContent = obj.qt;
  gameSection.appendChild(question);

  const input = document.createElement("input");
  input.style.borderRadius = "1rem";
  input.style.border = "0";
  input.style.textAlign = "center";
  input.style.border = "1px solid black";
  input.placeholder = "Digitar...";
  gameSection.appendChild(input);

  const readyBtn = createBtn("Pronto");
  gameSection.appendChild(readyBtn);

  readyBtn.addEventListener("click", () => {
    const value = input.value;
    checkQT(value, obj);
  });
}
