function p(text){
  const para = document.createElement("para");
  para.textContent = text;
  para.style.padding = "0";
  para.style.margin = "0";
  return para;
};

export { p };