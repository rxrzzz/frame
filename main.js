import { frame } from "./frame";
import { addImageToFrame, convertToCanvas } from "./utils";
let imageUploader = document.getElementById("img-upload");
let textInput = document.getElementById("text-input");
let textSubmitButton = document.getElementById("text-submit");
let fontSelect = document.getElementById("font-select");
let isDragging = false;
let offset = { x: 0, y: 0 };

function startDragging(event) {
  isDragging = true;
  offset.x = event.clientX - this.offsetLeft;
  offset.y = event.clientY - this.offsetTop;
}

function drag(event) {
  if (isDragging) {
    this.style.left = `${event.clientX - offset.x}px`;
    this.style.top = `${event.clientY - offset.y}px`;
  }
  convertToCanvas();
}

function stopDragging() {
  isDragging = false;
}
function uploadImage() {
  const imgFile = imageUploader.files[0];
  const imgURL = URL.createObjectURL(imgFile);
  addImageToFrame(imgURL)
}

function addTextToImg() {
  if (textInput.value) {
    const text = document.createElement("p");
    text.textContent = textInput.value;
    text.style.position = "absolute";
    text.contentEditable = "true";
    text.setAttribute("draggable", true);
    text.style.fontFamily = `'${fontSelect.value}', sans-serif`;
    text.style.top = "2px";
    text.style.left = "2px";

    text.classList.add("text-on-img");
    text.addEventListener("mousedown", startDragging);
    text.addEventListener("touchstart", startDragging);
    text.addEventListener("mousemove", drag);
    text.addEventListener("touchmove", drag);
    text.addEventListener("mouseup", stopDragging);
    text.addEventListener("touchend", stopDragging);
    frame.insertAdjacentElement("beforeend", text);
  }
  convertToCanvas();
}
imageUploader.addEventListener('change', uploadImage)
textSubmitButton.addEventListener("click", addTextToImg);
