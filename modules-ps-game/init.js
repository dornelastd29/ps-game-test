import divGame from "./divGame.js"; 
import { gameSection, rdPt } from "./game-setup.js"; 
import selectQT from "./selectQT.js"; 
import inputQT from "./inputQT.js"; 
import { createBtn } from "./create-btn.js";

export default async function teste(){
  divGame.appendChild(gameSection);
  while (gameSection.firstChild) {
    gameSection.removeChild(gameSection.firstChild);
  };
  const loadQuestion = async (round) =>{
    const module = await import("./questions.js");
    const question = module[`qt${round}`];
    const btn = createBtn(`${round}st question`);

    if(question.type === "input"){
      gameSection.appendChild(btn);
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        inputQT(question);
      });   
    }else{
        gameSection.appendChild(btn);
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          selectQT(question);
        });
    };
  };

  const createH3 = (text) => {
    const h3 = document.createElement("h3");
    h3.textContent = text;
    h3.style.fontFamily = "Courier New";
    h3.style.borderBottom = "2px solid black";
    h3.style.padding = "0";
    h3.style.margin = "0";
    gameSection.appendChild(h3);
  };

  if (rdPt.round === 1){
    createH3("Quiz: Playstation Knowledge");
    await loadQuestion(1);
  }else if(rdPt.round <= 10){
    await loadQuestion(rdPt.round);
  }else{
    createH3("END");
    const p = document.createElement("p");
    p.textContent = `Pontuação: ${rdPt.points}/10`;
    gameSection.appendChild(p);

    const creditsDiv = document.createElement("div");
    const link = document.createElement("a");
    link.textContent = "Gameplays in: MT brothers YouTube";
    link.href = "https://youtu.be/PsLWURpWbNA?t=155";
    link.style.color = "white";
    link.target = "_blank";
    creditsDiv.appendChild(link);
    gameSection.appendChild(creditsDiv);
  }
}
