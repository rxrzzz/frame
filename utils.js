import html2canvas from "html2canvas";
import { frame, downloadLink } from "./frame";

function convertToCanvas() {
  html2canvas(frame, { useCORS: true }).then((canvas) => {
    let image = canvas.toDataURL("image/png");
    downloadLink.setAttribute("href", image);
  });
}

function addImageToFrame(src) {
  frame.style.minHeight = "800px";
  frame.style.minWidth = "800px";
  frame.style.width = "95%";
  frame.style.height = "95%";
  frame.style.backgroundImage = `url("${src}")`;
  frame.style.backgroundSize = "cover";
  frame.style.backgroundColor = null;
}

export { addImageToFrame, convertToCanvas };
