// Шаблон для номера телефона
const progressLine = document.querySelector(".progress-line");
const phoneMask = document.getElementById("input__phone");
IMask(phoneMask, {
  mask: "+{38} ({\\000) 000-00-00",
});

document.getElementById("input__phone").oninput = function () {
  const lengthOfIinput = this.value.length;
  const w = this.offsetWidth;

  progressLine.style.width = (w / 19) * lengthOfIinput + "px";
  progressLine.style.backgroundColor = `rgb(${
    255 - (255 / 19) * lengthOfIinput
  },137,0)`;
};

phoneMask.addEventListener("blur", function (event) {
  progressLine.style.display = "none";
});
phoneMask.addEventListener("focus", function (event) {
  progressLine.style.display = "block";
});