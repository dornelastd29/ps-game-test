//div start
const divStart = document.createElement("div");
divStart.style.position = "fixed";
divStart.style.left = "1rem";
divStart.style.bottom = "4rem";
divStart.style.display = "flex";
divStart.style.flexDirection = "column";
divStart.style.alignItems = "center";
divStart.style.backgroundAttachment = "scroll";
divStart.style.width = "5rem";
divStart.style.height = "5rem";
divStart.style.border = "1px solid black";
divStart.style.borderRadius = "1rem";
divStart.style.backgroundColor = "#fff";
divStart.style.boxShadow = "0.2rem 0.2rem #272727";
divStart.style.zIndex = "10";
//btnDel
const btnDel = document.createElement("button");
btnDel.textContent = "x";
btnDel.style.border = "0";
btnDel.style.right = "0";
btnDel.style.padding = "0";
btnDel.style.margin = "0";
btnDel.style.marginTop = "0.1rem";
btnDel.style.marginLeft = "3.5rem";
btnDel.style.backgroundColor = "#fff";
btnDel.style.cursor = "pointer";

//para
const p = document.createElement("p");
p.textContent = "PS Quiz";
p.style.padding = "0.1rem";
p.style.margin = "0";
p.style.marginTop = "0.4rem";
p.style.color = "white";
p.style.backgroundColor = "blue";
p.style.borderRadius = "0.4rem";

//btn start
const btnStart = document.createElement("button");
btnStart.textContent = "Start";
btnStart.style.width = "fit-content";
btnStart.style.height = "fit-content";
btnStart.style.borderRadius = "1rem";
btnStart.style.marginTop = "0.4rem";
btnStart.style.cursor = "pointer";

divStart.appendChild(btnDel);
divStart.appendChild(p);

btnDel.addEventListener("click", () => {
  while (divStart.firstChild) {
    divStart.removeChild(divStart.firstChild);
  }
  divStart.remove();
});

export { divStart, btnStart };
