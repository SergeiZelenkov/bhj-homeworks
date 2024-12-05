const tabs = Array.from(document.querySelectorAll(".tab"));
const contents = document.querySelectorAll(".tab__content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const index = tabs.indexOf(tab);

    document.querySelector(".tab_active").classList.remove("tab_active");
    document
      .querySelector(".tab__content_active")
      .classList.remove("tab__content_active");

    tab.classList.add("tab_active");
    contents[index].classList.add("tab__content_active");
  });
});
