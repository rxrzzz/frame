import html2canvas from "html2canvas";
import { frame, downloadLink } from "./frame";

function convertToCanvas() {
  html2canvas(frame, { useCORS: true }).then((canvas) => {
    let image = canvas.toDataURL("image/png");
    downloadLink.setAttribute("href", image);
  });
}

function addImageToFrame(src) {
  let image = new Image();
  image.src = src;
  image.style.width = "100%";
  image.style.width = "1080px";
  image.style.height = "1080px";
  image.style.objectFit = "cover";
  if (frame.firstElementChild) {
    if (frame.firstElementChild.tagName.toLowerCase() === "img") {
      frame.firstElementChild.src = src;
    }
  } else {
    frame.innerHTML = "";
    frame.append(image);
  }
}

export { addImageToFrame, convertToCanvas };
