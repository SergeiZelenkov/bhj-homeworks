const fontSizeControls = document.querySelectorAll(".font-size");
const book = document.getElementById("book");

fontSizeControls.forEach((control) => {
  control.addEventListener("click", (event) => {
    event.preventDefault();
    fontSizeControls.forEach((item) =>
      item.classList.remove("font-size_active")
    );
    control.classList.add("font-size_active");
    book.classList.remove("book_fs-big", "book_fs-small");
    const size = control.dataset.size;
    if (size === "small") {
      book.classList.add("book_fs-small");
    } else if (size === "big") {
      book.classList.add("book_fs-big");
    }
  });
});