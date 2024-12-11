async function fetchVideo(url, f, section, btn){
    const promise = await fetch(url);
    const blob = await promise.blob();

    const src = URL.createObjectURL(blob);
    f(src, section);

    btn.textContent = "Next";
    btn.disabled = false;
}

export { fetchVideo };