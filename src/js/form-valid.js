const form = document.forms.reachForm;

// const form = document.querySelector(".form");
const inputList = Array.from(form.querySelectorAll(".form-input"));
const textArea = form.querySelector("#input__comment");
// textArea.addEventListener("keyup", validityTextArea);
// console.log(form.querySelector("#input__comment"));

// const checkboxElement = form.querySelector(".form__type-checkbox");
const buttonElement = form.querySelector("[js-submit]");
const formErrorElement = form.querySelector(".form__empty-error");
// console.log(formErrorElement);
toggleButton();
startValidation();

// Проверка TextArea
// validityTextArea();

// function validityTextArea() {
//   console.log(textArea.value.trim()<=0);

//   // textArea.addEventListener("change", () => {
//   if (textArea.value.trim() <= 0) {
//     toggleErrorSpan();
//       formError();
//     }
//     if (/\n.*\n.*\n/.test(textArea.value.trim())) {
//       formError();
//     }
//   };

function startValidation() {
  toggleButton();
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (hasInvalidInput()) {
      formError();
      inputList.forEach((inputElement) => {
        checkInputValidity(inputElement);
        toggleInputError(inputElement);
      });
      // toggleInputError(checkboxElement);
    }


    // Очистка LS
    resetLs();
    // Очистка output в comment
    resetOutput();
    toggleButton();
    shouNotification();
  });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(inputElement);
      toggleButton();
    });
    inputElement.addEventListener("blur", () => {
      toggleInputError(inputElement);
    });
    inputElement.addEventListener("focus", () => {
      toggleErrorSpan(inputElement);
    });
    // checkboxElement.addEventListener("change", () => {
    //   toggleInputError(checkboxElement);
    //   toggleButton();
    // });
  });
}

// При любых изменениях в полях ввода активируются функции checkInputValidity()
function checkInputValidity(inputElement) {
  console.log(inputElement.validity);

  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity(checkLengthMismatch(inputElement));
  }
}

/*
В случае соответствия введённых данных паттерну, с помощью функции checkLengthMismatch() также проверяется длина введённых данных, очищенная от пробелов.
*/
function checkLengthMismatch(inputElement) {
  if (inputElement.type !== "text") {
    return "";
  }
  const valueLength = inputElement.value.trim().length;
  if (valueLength < inputElement.minLength) {
    return `Минимальное количество символов: ${inputElement.minLength}`;
  }
  return "";
}

// При потере фокуса активируется функция toggleInputError(), а при установке фокуса сбрасывается сообщение об ошибке с помощью toggleErrorSpan().
// При потере фокуса активируется функция toggleInputError()
function toggleInputError(inputElement) {
  if (!inputElement.validity.valid) {
    toggleErrorSpan(inputElement, inputElement.validationMessage);
  } else {
    toggleErrorSpan(inputElement);
  }
}

function hasInvalidInput() {
  return (
    // inputList.some((inputElement) => !inputElement.validity.valid) ||
    // !checkboxElement.validity.valid
    inputList.some((inputElement) => !inputElement.validity.valid)
  );
}

// При потере фокуса активируется функция toggleInputError(), а при установке фокуса сбрасывается сообщение об ошибке с помощью toggleErrorSpan().
function toggleErrorSpan(inputElement, errorMessage) {
  // const errorElement = document.querySelector(`.${inputElement.id}-error`);
  const errorElement = form.querySelector(`.${inputElement.id}-error`);

  if (errorMessage) {
    inputElement.classList.add("form__type-input-error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__error-active");
  } else {
    inputElement.classList.remove("form__type-input-error");
    errorElement.textContent = "";
    errorElement.classList.remove("form__error-active");
  }
}

// При любых изменениях в полях ввода активируются функции
function toggleButton() {
  if (hasInvalidInput()) {
    buttonElement.classList.add("button-inactive");
    buttonElement.setAttribute("aria-disabled", "true");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("button-inactive");
    buttonElement.setAttribute("aria-disabled", "false");
    formErrorElement.textContent = "";
    buttonElement.disabled = false;
  }
}

function formError() {
  const errorMessage = "Заполните все поля для отправки формы.";
  formErrorElement.textContent = errorMessage;
}

// Сохранение LS
const STORAGE_KEY = "reach-form";
const formLs = document.forms.reachForm;
formLs.addEventListener("input", onFormInput);

let formData = {};
function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Возврат из LS при обновлении страницы
(function populateFormOutput() {
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // console.log(formData);
    for (let key in formData) {
      // if (
      //   formLs.elements[key].type === "chekbox" &&
      //   formLs.elements[key].value === "on"
      // ) {
      //   formLs.elements[key].checked = true;
      // } else {
      formLs.elements[key].value = formData[key].trim();
      toggleButton();
      // }
    }
  }
})();

function resetLs(formData) {
  const LS = localStorage.getItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(LS);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function resetOutput() {
  const fieldСheckOutput = document.querySelector(".output");
  fieldСheckOutput.textContent = null;
  fieldСheckOutput.style.setProperty("--emoji", "");
}
    // Вывод сообщения об отправке
const NOTIFICATION_DELAY = 5000;
let timeoutId = null;

const notification = document.querySelector(".js-alert");

notification.addEventListener("click", onNotificationClick);

function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);
}

function shouNotification() {
  timeoutId = notification.classList.remove("visually-hidden");
  setTimeout(() => {
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  notification.classList.add("visually-hidden");
}
