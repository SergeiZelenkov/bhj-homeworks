const hasTooltips = [...document.getElementsByClassName("has-tooltip")];

hasTooltips.forEach((tooltip) => {
  tooltip.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelectorAll(".tooltip_active").forEach((activeTooltip) => {
      activeTooltip.classList.remove("tooltip_active");
    });

    let activeTooltip = tooltip.querySelector(".tooltip");
    if (activeTooltip) {
      activeTooltip.classList.toggle("tooltip_active");
      return;
    }
    const divHTML = document.createElement("div");
    divHTML.className = "tooltip";
    divHTML.innerHTML = tooltip.textContent;
    tooltip.append(divHTML);

    activeTooltip = tooltip.querySelector(".tooltip");

    const rect = tooltip.getBoundingClientRect();
    activeTooltip.style.left = `${rect.left}px`;
    activeTooltip.style.top = `${rect.bottom}px`;

    activeTooltip.classList.add("tooltip_active");
  });
});

