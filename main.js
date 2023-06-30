import html2canvas from "html2canvas";
import { imageType } from "./imagetype";
let imageUploader = document.getElementById("img-upload");
let imgDiv = document.getElementById("img-div");
let textInput = document.getElementById("text-input");
let textSubmitButton = document.getElementById("text-submit");
let downloadLink = document.getElementById("download-link");
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
}

function stopDragging() {
  isDragging = false;
}
function uploadImage() {
  const imgFile = imageUploader.files[0];
  const imgURL = URL.createObjectURL(imgFile);
  let image = document.createElement("img");
  image.src = imgURL;
  image.style.width = "100%";
  image.style.width = "1080px";
  image.style.height = "1080px";
  image.style.objectFit = "cover";
  imgDiv.innerHTML = "";
  imgDiv.append(image);
}

function convertToCanvas() {
  html2canvas(imgDiv, { useCORS: true }).then((canvas) => {
    let image = canvas.toDataURL("image/png");
    downloadLink.setAttribute("href", image);
  });
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
    text.addEventListener("mousemove", drag);
    text.addEventListener("mouseup", stopDragging);
    imgDiv.insertAdjacentElement("beforeend", text);
  }
  convertToCanvas();
}
imageUploader.addEventListener("change", uploadImage);
textSubmitButton.addEventListener("click", addTextToImg);
