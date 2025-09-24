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