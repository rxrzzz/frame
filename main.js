import interact from "interactjs";
import { frame } from "./frame";
import { addImageToFrame, convertToCanvas } from "./utils";
let imageUploader = document.getElementById("img-upload");
let textInput = document.getElementById("text-input");
let textSubmitButton = document.getElementById("text-submit");
let fontSelect = document.getElementById("font-select");
let offset = { x: 0, y: 0 };

// interact(".text-on-img").draggable({
//   listeners: {
//     move(event) {
//       offset.x += event.dx;
//       offset.y += event.dy;

//       event.target.style.transform = `translate(${offset.x}px, ${offset.y}px)`;
//     },
//   },
// });

interact(".text-on-img").resizable({
  edges: { top: true, left: true, bottom: true, right: true },
  listeners: {
    move: function (event) {
      
      let { x, y } = event.target.dataset;
      const draggableTransform = `translate(${x}px, ${y}px)`;
      x = (parseFloat(x) || 0) + event.deltaRect.left;
      y = (parseFloat(y) || 0) + event.deltaRect.top;

      Object.assign(event.target.style, {
        width: `${event.rect.width}px`,
        height: `${event.rect.height}px`,
        transform: `${draggableTransform} ${event.transform}`,
      });

      Object.assign(event.target.dataset, { x, y });
    },
  },
});
function uploadImage() {
  const imgFile = imageUploader.files[0];
  const imgURL = URL.createObjectURL(imgFile);
  addImageToFrame(imgURL);
}

function addTextToImg() {
  if (textInput.value) {
    const text = document.createElement("p");
    text.textContent = textInput.value;
    text.style.position = "absolute";
    text.contentEditable = "true";
    text.style.fontFamily = `'${fontSelect.value}', sans-serif`;
    text.classList.add("text-on-img");
    frame.insertAdjacentElement("beforeend", text);
  }
  convertToCanvas();
}

imageUploader.addEventListener("change", uploadImage);
textSubmitButton.addEventListener("click", addTextToImg);
