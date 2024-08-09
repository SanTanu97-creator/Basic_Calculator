const textFilled = document.querySelector("#textFilled");
const numButtons = document.querySelectorAll(".num-button");
const allClearBtn = document.querySelector(".allClearBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const equal = document.querySelector(".equal");

numButtons.forEach((button) => {
  button.onclick = () => {
  textFilled.value += button.value;
  };
});

allClearBtn.onclick = () => {
  textFilled.value = ""; // Clear the input field
}

deleteBtn.onclick = () => {
  textFilled.value = textFilled.value.toString().slice(0,-1);
};

equal.onclick = () => {
  textFilled.value = eval(textFilled.value);
}