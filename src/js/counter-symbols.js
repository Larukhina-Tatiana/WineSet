const fieldСheckSymbols = document.querySelector("[data-symbols]");
const MAXLENGTH = fieldСheckSymbols.maxLength;
const fieldСheckOutput = document.querySelector(".output");

fieldСheckSymbols.addEventListener("input", onInputCheck);

function onInputCheck() {
  let str = this.value.trim();

  fieldСheckOutput.textContent = MAXLENGTH - str.length;

  if (str.length <= MAXLENGTH - 10) {
    fieldСheckOutput.style.color = "green";
      fieldСheckOutput.style.setProperty("--emoji", '"✍️"');
  }
  if (str.length > MAXLENGTH - 10) {
    fieldСheckOutput.style.color = "red";
  }
  if (str.length === MAXLENGTH) {
    fieldСheckOutput.style.setProperty("--emoji", '"❌"');
  }
}
