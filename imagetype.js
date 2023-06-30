let imageType = "pure image";
let [pureImageElem, pureColorElem, gradientBackgroundElem] = [
  document.getElementsByClassName("pure-image")[0],
  document.getElementsByClassName("color-bg")[0],
  document.getElementsByClassName("gradient-bg")[0],
];

function changeImageType() {
  switch (this.textContent) {
    case "Image":
      imageType = "pure image";
      this.classList.add("chosen");
      pureColorElem.classList.remove("chosen");
      gradientBackgroundElem.classList.remove("chosen");

      break;
    case "Pure Color":
      imageType = "pure color";
      this.classList.add("chosen");
      pureImageElem.classList.remove("chosen");
      gradientBackgroundElem.classList.remove("chosen");
      break;
    case "Gradient Background":
      imageType = "gradient background";
      this.classList.add("chosen");
      pureColorElem.classList.remove("chosen");
      pureImageElem.classList.remove("chosen");
      break;
  }
}

pureImageElem.addEventListener("click", changeImageType);
pureColorElem.addEventListener("click", changeImageType);
gradientBackgroundElem.addEventListener("click", changeImageType);
export {imageType}