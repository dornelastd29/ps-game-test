import { rdPt } from "./game-setup.js";

function createRW(tf, div){
  if(tf){
    const rightwrong = document.createElement("p");
    rightwrong.textContent = "Certa Resposta!";
    rightwrong.style.color = "green";
    rightwrong.style.backgroundColor = "#fff";
    rightwrong.style.borderRadius = "0.6rem";
    rightwrong.style.padding = "0.5rem";
    rightwrong.style.border = "1px solid black";
    rightwrong.style.margin = "0";
    rdPt.points++;
    div.appendChild(rightwrong);
  }else{
    const rightwrong = document.createElement("p");
    rightwrong.textContent = "Resposta Errada!";
    rightwrong.style.color = "red";
    rightwrong.style.backgroundColor = "#fff";
    rightwrong.style.borderRadius = "0.6rem";
    rightwrong.style.padding = "0.5rem";
    rightwrong.style.margin = "0";
    div.appendChild(rightwrong);
  };
};

export { createRW };