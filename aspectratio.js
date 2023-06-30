import { frame } from "./frame";
let [oneOne, fourFive, nineOneOne, sixteenNine] = [
  document.querySelector(".one-one"),
  document.querySelector(".four-five"),
  document.querySelector(".nineone-one"),
  document.querySelector(".sixteen-nine"),
];

function changeFrameAspectRatio() {
  switch (this.classList[0]) {
    case "one-one":
      frame.style.aspectRatio = "1 / 1";
      frame.firstElementChild.style.aspectRatio = "1 / 1";
      break;
    case "four-five":
      frame.style.aspectRatio = "4 / 5";
      frame.firstElementChild.style.aspectRatio = "4 / 5";
      break;
    case "nineone-one":
      frame.style.aspectRatio = "1.91 / 1";
      frame.firstElementChild.style.aspectRatio = "1.91 / 1";
      break;
    case "sixteen-nine":
      frame.style.aspectRatio = "16 / 9";
      frame.firstElementChild.style.aspectRatio = "16 / 9";
      break;
  }
}

oneOne.addEventListener("click", changeFrameAspectRatio);
fourFive.addEventListener("click", changeFrameAspectRatio);
nineOneOne.addEventListener("click", changeFrameAspectRatio);
sixteenNine.addEventListener("click", changeFrameAspectRatio);
