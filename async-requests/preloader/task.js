const itemsContainer = document.getElementById("items");
const loader = document.getElementById("loader");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);

xhr.send();

xhr.onload = function () {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const valute = response.response.Valute;

    itemsContainer.innerHTML = "";
    loader.classList.remove("loader_active");

    for (const key in valute) {
      const currency = valute[key];

      const code = document.createElement("div");
      code.className = "item__code";
      code.innerHTML = currency.CharCode;
      const value = document.createElement("div");
      value.className = "item__value";
      value.innerHTML = currency.Value;
      const currencyLabel = document.createElement("div");
      currencyLabel.className = "item__currency";
      currencyLabel.innerHTML = "руб.";

      const currencyContainer = document.createElement("div");
      currencyContainer.className = "item";
      currencyContainer.append(code, value, currencyLabel);

      itemsContainer.append(currencyContainer);
    }
  } else {
    console.error(`Ошибка загрузки данных: ${xhr.status}`);
  }
};