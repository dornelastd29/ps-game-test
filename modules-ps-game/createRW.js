import { rdPt } from "./game-setup.js";

function createRW(tf, div){
  if(tf){
    const rightwrong = document.createElement("p");
    rightwrong.textContent = "Right answer!";
    rightwrong.style.color = "green";
    rightwrong.style.backgroundColor = "#fff";
    rightwrong.style.borderRadius = "0.6rem";
    rightwrong.style.padding = "0.5rem";
    rightwrong.style.border = "1px solid black";
    rightwrong.style.margin = "0";
    rightwrong.style.marginTop = "1.5rem"
    rightwrong.style.display = "block";
    rdPt.points++;
    div.appendChild(rightwrong);
  }else{
    const rightwrong = document.createElement("p");
    rightwrong.textContent = "Wrong answer!";
    rightwrong.style.color = "red";
    rightwrong.style.backgroundColor = "#fff";
    rightwrong.style.borderRadius = "0.6rem";
    rightwrong.style.padding = "0.5rem";
    rightwrong.style.margin = "0";
    rightwrong.style.display = "block";
    rightwrong.style.marginTop = "1.5rem"
    div.appendChild(rightwrong);
  };
};

export { createRW };