const hasTooltips = [...document.getElementsByClassName("has-tooltip")];

hasTooltips.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();

    const activeTooltip = document.querySelector(".tooltip_active");
    if (activeTooltip) {
      activeTooltip.classList.remove("tooltip_active");

      if (activeTooltip === element.nextElementSibling) {
        return;
      }
    }

    let tooltip = element.nextElementSibling;
    if (!tooltip || !tooltip.classList.contains("tooltip")) {
      tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.textContent = element.title;
      document.body.appendChild(tooltip);
    }
    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom}px`;

    tooltip.classList.add("tooltip_active");
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.classList.contains("has-tooltip")) {
    const activeTooltip = document.querySelector(".tooltip_active");
    if (activeTooltip) {
      activeTooltip.classList.remove("tooltip_active");
    }
  }
});
