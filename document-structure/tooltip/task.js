//V3
const hasTooltips = [...document.querySelectorAll(".has-tooltip")];

hasTooltips.forEach((hasTooltip) => {
  hasTooltip.addEventListener("click", (e) => {
    e.preventDefault();

    const existingTooltip = document.querySelector(".tooltip_active");
    if (existingTooltip) {
      existingTooltip.remove();
      return;
    }

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerHTML = hasTooltip.title;
    tooltip.cssText = "left: 0; top: 0";

    const rect = hasTooltip.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom}px`;

    tooltip.classList.add("tooltip_active");
    document.body.append(tooltip);
  });
});

