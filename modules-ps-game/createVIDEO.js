function createVideo(src, div){
  const video = document.createElement("video");
  video.style.width = "19rem";
  video.style.height = "19rem";
  video.style.padding = "0";
  video.style.margin = "0";
  video.src = src;
  video.play();
  video.loop = true;
  div.appendChild(video);
};

export { createVideo };