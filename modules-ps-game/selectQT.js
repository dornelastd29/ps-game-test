import checkQT from "./checkQT.js";
import { gameSection } from "./game-setup.js";
import { createBtn } from "./create-btn.js";

export default function selectQT(obj) {
  while (gameSection.firstChild) {
    gameSection.removeChild(gameSection.firstChild);
  }

  const question = document.createElement("p");
  question.textContent = obj.qt;
  gameSection.appendChild(question);

  const select = document.createElement("select");
  select.style.borderRadius = "1rem";
  select.style.textAlign = "center";
  gameSection.appendChild(select);

  const opt1 = document.createElement("option");
  opt1.value = obj.opt1Value;
  opt1.textContent = obj.opt1Text;
  select.appendChild(opt1);

  const opt2 = document.createElement("option");
  opt2.value = obj.opt2Value;
  opt2.textContent = obj.opt2Text;
  select.appendChild(opt2);

  const opt3 = document.createElement("option");
  opt3.value = obj.opt3Value;
  opt3.textContent = obj.opt3Text;
  select.appendChild(opt3);

  const opt4 = document.createElement("option");
  opt4.value = obj.opt4Value;
  opt4.textContent = obj.opt4Text;
  select.appendChild(opt4);

  const readyBtn = createBtn("Pronto");
  gameSection.appendChild(readyBtn);

  readyBtn.addEventListener("click", () => {
    const value = select.value;
    checkQT(value, obj);
  });
}
