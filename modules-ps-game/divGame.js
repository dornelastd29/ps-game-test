const divGame = document.createElement("div");
divGame.style.position = "fixed";
divGame.style.top = "4%";
divGame.style.left = "50%";
divGame.style.transform = "translate(-50%, 0%)";
divGame.style.display = "flex";
divGame.style.flexDirection = "column";
divGame.style.backgroundColor = "rgb(0, 67, 156)";
divGame.style.boxShadow = "4px 5px 4px 5px rgba(0, 0, 0, .3)";
divGame.style.zIndex = "10";
divGame.style.backgroundImage = "linear-gradient(to bottom, rgb(0, 67, 156), blue)";
divGame.style.borderRadius = "0.4rem";


if(window.innerWidth >= 700){
  divGame.style.width = "30rem";
  divGame.style.minHeight = "35rem";
  divGame.style.height = "fit-content";

  const background = document.createElement("div");
  background.style.backgroundImage = "url(./imagens/playstation.png)";
  background.style.backgroundSize = "contain";
  background.style.height = "10%";
  background.style.position = "absolute";
  background.style.bottom = "0";
  background.style.width = "100%";
  background.style.opacity = "0.8";
  divGame.appendChild(background);

}else{
  divGame.style.top = "0.2rem"
  divGame.style.width = "100vw";
  divGame.style.height = "100%";

  const background = document.createElement("div");
  background.style.backgroundImage = "url(./imagens/playstation.png)";
  background.style.backgroundSize = "contain";
  background.style.height = "4%";
  background.style.position = "absolute";
  background.style.bottom = "0";
  background.style.width = "100%";
  background.style.opacity = "0.4";
  divGame.appendChild(background);
}

const btnCancel = document.createElement("button");
btnCancel.textContent = "X";
btnCancel.style.position = "absolute";
btnCancel.style.width = "fit-content";
btnCancel.style.right = "0";
btnCancel.style.cursor = "pointer";
btnCancel.style.zIndex = "10";
btnCancel.style.padding = "0.1rem"

btnCancel.addEventListener("click", () => {
  divGame.remove();
});

divGame.appendChild(btnCancel);

export default divGame;
