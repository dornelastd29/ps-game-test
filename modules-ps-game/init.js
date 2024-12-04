import divGame from "./divGame.js";
import { gameSection } from "./game-setup.js";
import selectQT from "./selectQT.js";
import inputQT from "./inputQT.js";
import { rdPt } from "./game-setup.js";
import { createBtn } from "./create-btn.js";

export default function init() {
  divGame.appendChild(gameSection);
  while (gameSection.firstChild) {
    gameSection.removeChild(gameSection.firstChild);
  }

  if (rdPt.round === 1) {
    let qt1;
    import("./questions.js").then((module) => {
      qt1 = module.qt1;
    });

    const btn1 = createBtn("Pergunta 1");
    gameSection.appendChild(btn1);

    btn1.addEventListener("click", (e) => {
      e.stopPropagation();

      inputQT(qt1);
    });
  }

  if (rdPt.round === 2) {
    let qt2;
    import("./questions.js").then((module) => {
      qt2 = module.qt2;
    });

    const btn2 = createBtn("Pergunta 2");
    gameSection.appendChild(btn2);

    btn2.addEventListener("click", (e) => {
      e.stopPropagation();

      selectQT(qt2);
    });
  }

  if (rdPt.round === 3) {
    let qt3;
    import("./questions.js").then((module) => {
      qt3 = module.qt3;
    });

    const btn3 = createBtn("Pergunta 3");
    gameSection.appendChild(btn3);

    btn3.addEventListener("click", (e) => {
      e.stopPropagation();
      selectQT(qt3);
    });
  }

  if (rdPt.round === 4) {
    let qt4;
    import("./questions.js").then((module) => {
      qt4 = module.qt4;
    });

    const btn4 = createBtn("Pergunta 4");
    gameSection.appendChild(btn4);

    btn4.addEventListener("click", (e) => {
      e.stopPropagation();
      selectQT(qt4);
    });
  }

  if (rdPt.round === 5) {
    let qt5;
    import("./questions.js").then((module) => {
      qt5 = module.qt5;
    });

    const btn5 = createBtn("Pergunta 5");
    gameSection.appendChild(btn5);

    btn5.addEventListener("click", (e) => {
      e.stopPropagation();
      inputQT(qt5);
    });
  }

  if (rdPt.round === 6) {
    let qt6;
    import("./questions.js").then((module) => {
      qt6 = module.qt6;
    });

    const btn6 = createBtn("Pergunta 6");
    gameSection.appendChild(btn6);

    btn6.addEventListener("click", (e) => {
      e.stopPropagation();
      inputQT(qt6);
    });
  }

  if (rdPt.round === 7) {
    let qt7;
    import("./questions.js").then((module) => {
      qt7 = module.qt7;
    });

    const btn7 = createBtn("Pergunta 7");
    gameSection.appendChild(btn7);

    btn7.addEventListener("click", (e) => {
      e.stopPropagation();
      selectQT(qt7);
    });
  }

  if (rdPt.round === 8) {
    let qt8;
    import("./questions.js").then((module) => {
      qt8 = module.qt8;
    });

    const btn8 = createBtn("Pergunta 8");
    gameSection.appendChild(btn8);

    btn8.addEventListener("click", (e) => {
      e.stopPropagation();
      inputQT(qt8);
    });
  }

  if (rdPt.round === 9) {
    let qt9;
    import("./questions.js").then((module) => {
      qt9 = module.qt9;
    });

    const btn9 = createBtn("Pergunta 9");
    gameSection.appendChild(btn9);

    btn9.addEventListener("click", (e) => {
      e.stopPropagation();
      inputQT(qt9);
    });
  }

  if (rdPt.round === 10) {
    let qt10;
    import("./questions.js").then((module) => {
      qt10 = module.qt10;
    });

    const btn10 = createBtn("Pergunta 10");
    gameSection.appendChild(btn10);

    btn10.addEventListener("click", (e) => {
      e.stopPropagation();
      inputQT(qt10);
    });
  }

  if (rdPt.round > 10) {
    const h3 = document.createElement("h3");
    h3.textContent = "END";
    h3.setAttribute("class", "endGameH3");
    gameSection.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = `Pontuação: ${rdPt.points}/10`;
    p.setAttribute("class", "endGameP");
    gameSection.appendChild(p);

    const creditsDiv = document.createElement("div");
    const link = document.createElement("a");
    link.textContent = "Créditos: MT brothers YouTube";
    link.href = "https://youtu.be/PsLWURpWbNA?t=155";
    link.style.color = "white";
    link.target = "_blank";
    creditsDiv.appendChild(link);
    gameSection.appendChild(creditsDiv);
  }
}
