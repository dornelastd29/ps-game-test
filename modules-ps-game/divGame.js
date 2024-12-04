const divGame = document.createElement("div");
divGame.style.position = "fixed";
divGame.style.top = "50%";
divGame.style.left = "50%";
divGame.style.transform = "translate(-50%, -50%)";
divGame.style.display = "flex";
divGame.style.flexDirection = "column";
divGame.style.width = "500px";
divGame.style.height = "500px";
divGame.style.backgroundColor = "blue";
divGame.style.boxShadow = "4px 6px 4px 6px rgba(0, 0, 0, .3)";
divGame.style.zIndex = "10";

const btnCancel = document.createElement("button");
btnCancel.textContent = "X";
btnCancel.style.position = "absolute";
btnCancel.style.width = "fit-content";
btnCancel.style.right = "0";
btnCancel.style.cursor = "pointer";

btnCancel.addEventListener("click", () => {
  while (divGame.firstChild) {
    divGame.removeChild(divGame.firstChild);
  }
  divGame.remove();
});

divGame.appendChild(btnCancel);

export default divGame;
