const button = document.querySelector("button");
const dialog = document.querySelector("dialog");
const buttonClose = document.querySelector("dialog i");

button.onclick = function () {
  dialog.showModal();
};

buttonClose.onclick = function () {
  dialog.close();
};
