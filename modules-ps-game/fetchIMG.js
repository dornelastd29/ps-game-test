async function fetchImg(url, info, f, f2, section, btn){
    const promise = await fetch(url);
    const blob = await promise.blob();

    const src = URL.createObjectURL(blob);

    const coverInfo = f(src);
    
    f2(info, coverInfo);

    section.appendChild(coverInfo);

    btn.textContent = "Next";
    btn.disabled = false;
};

export { fetchImg };