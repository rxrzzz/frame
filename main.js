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

interact(".text-on-img")
  .resizable({
    //this makes it possible to resize the element from all corners.
    edges: { left: true, right: true, bottom: true, top: true },

    listeners: {
      move(event) {
        //get the target element and then get it's x and y coordinates from the data-
        //attribute. it's returned as
        let target = event.target;
        let x = parseFloat(target.getAttribute("data-x")) || 0;
        let y = parseFloat(target.getAttribute("data-y")) || 0;
        let initialWidth = target.style.width;
        target.style.width = event.rect.width + "px";
        target.style.height = event.rect.height + "px";

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.transform = "translate(" + x + "px," + y + "px)";

        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
        // target.textContent =
        //   Math.round(event.rect.width) +
        //   "\u00D7" +
        //   Math.round(event.rect.height);
      },
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: "parent",
      }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 100 },
      }),
    ],

    inertia: true,
  })
  .draggable({
    listeners: { move: dragMoveListener },
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "parent",
        endOnly: true,
      }),
    ],
  });

function dragMoveListener(event) {
  let target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.transform = "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

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
