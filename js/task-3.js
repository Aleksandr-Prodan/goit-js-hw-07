const newInput = document.querySelector("#name-input");
const newSpan = document.querySelector("#name-output");

newInput.addEventListener("input", (event) => {
    const trimName = event.currentTarget.value.trim();
    if (trimName === "") {
    newSpan.textContent = "Anonymous";
    } else {
    newSpan.textContent = trimName;
}
});

newInput.addEventListener("blur", () => {
  const trimmed = newInput.value.trim();

  if (trimmed !== "") {
    newSpan.textContent = trimmed;
  } else {
    newSpan.textContent = "Anonymous";
  }

  newInput.value = "";
});