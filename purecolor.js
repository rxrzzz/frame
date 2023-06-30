import { frame } from "./frame";

let colorInput = document.querySelector(".color-bg-input");

colorInput.addEventListener("change", () => {
  frame.style.backgroundImage = "";
  frame.style.backgroundColor = colorInput.value;
});
