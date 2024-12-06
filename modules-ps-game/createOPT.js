function createOPT(value, text, select){
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = text;

    select.appendChild(opt);
};

function createSelect(sel){
    sel = document.createElement("select");
    sel.style.borderRadius = "1rem";
    sel.style.textAlign = "center";

    sel.style.width = "fit-content";
    
    return sel;
};

export { createOPT, createSelect};