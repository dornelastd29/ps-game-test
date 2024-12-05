function createVideo(src, div){
  const video = document.createElement("video");
  video.style.width = "20rem";
  video.style.height = "20rem";
  video.src = src;
  video.play();
  video.loop = true;
  div.appendChild(video);
};

export { createVideo };