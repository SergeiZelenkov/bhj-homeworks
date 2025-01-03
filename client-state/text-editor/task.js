const card = document.querySelector(".card");
const textarea = document.getElementById("editor");

const savedText = localStorage.getItem("editorText");

if (savedText) {
  textarea.value = savedText;
}

textarea.addEventListener("input", () => {
  localStorage.setItem("editorText", textarea.value);
});

textarea.addEventListener("click", () => {
  if (!card.querySelector(".button-clear")) {
    const button = document.createElement("button");
    button.innerHTML = "Очистить содержимое";
    button.className = "button-clear";
    card.append(button);

    button.addEventListener("click", () => {
      localStorage.removeItem("editorText");
      button.remove();
      textarea.value = "";
    });
  }
});