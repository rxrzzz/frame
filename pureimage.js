import { addImageToFrame, convertToCanvas } from "./utils";

let [img1, img2, img3, img4, linkToImgInput, linkToImgButton] = [
  document.querySelector(".img-1"),
  document.querySelector(".img-2"),
  document.querySelector(".img-3"),
  document.querySelector(".img-4"),
  document.querySelector(".link-img input"),
  document.querySelector(".link-img-button"),
];

let defaultImageSrc = "";
function changeDefaultImage() {
  switch (this.id) {
    case "img-1":
      img1.classList.add("chosen-img");
      img2.classList.remove("chosen-img");
      img3.classList.remove("chosen-img");
      img4.classList.remove("chosen-img");
      break;
    case "img-2":
      img1.classList.remove("chosen-img");
      img2.classList.add("chosen-img");
      img3.classList.remove("chosen-img");
      img4.classList.remove("chosen-img");
      break;
    case "img-3":
      img1.classList.remove("chosen-img");
      img2.classList.remove("chosen-img");
      img3.classList.add("chosen-img");
      img4.classList.remove("chosen-img");
      break;
    case "img-4":
      img1.classList.remove("chosen-img");
      img2.classList.remove("chosen-img");
      img3.classList.remove("chosen-img");
      img4.classList.add("chosen-img");
      break;
  }
  addImageToFrame(this.src);
  convertToCanvas();
}

function useImageFromLink() {
  let link = linkToImgInput.value;
  addImageToFrame(link);
  convertToCanvas();
}

img1.addEventListener("click", changeDefaultImage);
img2.addEventListener("click", changeDefaultImage);
img3.addEventListener("click", changeDefaultImage);
img4.addEventListener("click", changeDefaultImage);
linkToImgButton.addEventListener("click", useImageFromLink);
export { defaultImageSrc };
