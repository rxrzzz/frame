import html2canvas from "html2canvas";
let imageUploader = document.getElementById("img-upload");
let imgDiv = document.getElementById("img-div");
let textInput = document.getElementById("text-input");
let textSubmitButton = document.getElementById("text-submit");
let downloadLink = document.getElementById("download-link");

function uploadImage() {
  const imgFile = imageUploader.files[0];
  const imgURL = URL.createObjectURL(imgFile);
  console.log(imgURL);
  let image = document.createElement("img");
  image.src = imgURL;
  image.style.width = "100%";
  image.style.width = "1080px";
  image.style.height = "1080px";
  image.style.objectFit = "cover";
  imgDiv.innerHTML = ''
  imgDiv.append(image);
}

function convertToCanvas() {
  html2canvas(imgDiv, { useCORS: true }).then(
    (canvas) => {
      let image = canvas.toDataURL("image/png");
      downloadLink.setAttribute("href", image);
      console.log(downloadLink)
    }
  );
}

function addTextToImg() {
  if (textInput.value) {
    imgDiv.insertAdjacentHTML(
      "beforeend",
      `
      <div class="text-container">
        <p class='img-text'>${textInput.value}</p>
      </div>
      `
    );
  }
  convertToCanvas();
}
imageUploader.addEventListener("change", uploadImage);
textSubmitButton.addEventListener("click", addTextToImg);
