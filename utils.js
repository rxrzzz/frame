import html2canvas from "html2canvas";
import { frame, downloadLink } from "./frame";

function convertToCanvas() {
  html2canvas(frame, { useCORS: true }).then((canvas) => {
    let image = canvas.toDataURL("image/png");
    downloadLink.setAttribute("href", image);
  });
}

function addImageToFrame(src) {
  frame.style.backgroundImage = `url("${src}")`;
  frame.style.backgroundColor = null;
  frame.style.backgroundSize = 'cover'
  frame.style.aspectRatio = "1/1";
}

export { addImageToFrame, convertToCanvas };
