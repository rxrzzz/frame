let [pictureSettingsButton, pictureSettingsDialog, closePictureSettingsButton] =
  [
    document.querySelector(".picture-settings-btn"),
    document.querySelector(".picture-settings"),
    document.querySelector(".picture-settings-close"),
  ];

pictureSettingsButton.addEventListener("click", () => {
  pictureSettingsDialog.showModal();
});

closePictureSettingsButton.addEventListener("click", () => {
  pictureSettingsDialog.close();
});

console.log(pictureSettingsButton, pictureSettingsDialog);
