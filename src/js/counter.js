// Добавляем прослушку на всём окне
window.addEventListener("click", function (event) {
  // Обявляем переменную для счетчика
  let counter;
  // Проверяем клик строго по кнопкам
  if (
    event.target.dataset.action === "minus" ||
    event.target.dataset.action === "plus"
  ) {
    // Находим обёртку счетчика (родитель)
    const counterWrapper = event.target.closest(".counter-wrapper");
    // Находим число счетчика
    counter = counterWrapper.querySelector("[data-counter]");
  }

  // Проверяем, является ли элемент кнопкой +
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
    // console.log(counter);
  }
  // Проверяем, является ли элемент кнопкой -
  if (event.target.dataset.action === "minus") {
    // Если значение больше 1
    if (parseInt(counter.innerText) > 1) {
      // Изменяем текст в счетчике на -1
      counter.innerText = --counter.innerText;
    }
  }

  // function setDisabled(counter) {
  //   if (counter === 1) {
  //     counterBtn[1].disabled = true;
  //   } else if (counter === 8) {
  //     counterBtn[0].disabled = true;
  //   } else {
  //     counterBtn[1].disabled = false;
  //     counterBtn[0].disabled = false;
  //   }
  // }
});
