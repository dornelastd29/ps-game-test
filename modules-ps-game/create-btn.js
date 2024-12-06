export const createBtn = (qtNum) => {
  const btn = document.createElement("button");
  btn.textContent = qtNum;
  btn.style.display = "flex";
  btn.style.flexDirection = "center";
  btn.style.alignItems = "center";
  btn.style.width = "fit-content";
  btn.style.height = "1.4rem";
  btn.style.marginTop = "0.4rem";
  btn.style.borderRadius = "1rem";
  btn.style.border = "0.1rem solid black";
  btn.style.backgroundColor = "rgb(0, 102, 204)";
  btn.style.color = "#fff";
  btn.style.cursor = "pointer";
  btn.style.padding = "0.8rem";
  return btn;
};
