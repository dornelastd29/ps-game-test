function createCoverInfo(img){
  const coverInfo = document.createElement("div");
  coverInfo.style.backgroundImage = `url(${img})`;
  coverInfo.style.backgroundSize = "cover";
  coverInfo.style.backgroundRepeat = "no-repeat";
  coverInfo.style.height = "20rem";
  coverInfo.style.marginTop = "0.5rem";
  coverInfo.style.display = "flex";
  coverInfo.style.justifyContent = "center";
  coverInfo.style.alignItems = "center";
  coverInfo.style.width = "100%";
  
  return coverInfo
};

function createInfo(info, div){
  const p = document.createElement("p");
  p.style.backgroundColor = "rgba(0, 0, 0, 0.497)";
  p.style.textDecoration = "underline";
  p.style.fontWeight = "bolder";
  p.style.color = "white";
  p.style.fontSize = "0.8rem";
  p.textContent = info;
  div.appendChild(p); 
}

export { createCoverInfo, createInfo };