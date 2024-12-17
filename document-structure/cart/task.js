const cartProducts = document.querySelector(".cart__products");
const products = [...document.querySelectorAll("[data-id]")];

products.forEach((product) => {
  const productAdd = product.querySelector(".product__add");
  const productQuantityDec = product.querySelector(
    ".product__quantity-control_dec"
  );
  const productQuantityInc = product.querySelector(
    ".product__quantity-control_inc"
  );
  const productValue = product.querySelector(".product__quantity-value");
  const productImage = product.querySelector(".product__image");

  // + -
  productQuantityDec.addEventListener("click", () => {
    if (productValue.textContent > 0) {
      productValue.textContent--;
    }
  });
  productQuantityInc.addEventListener("click", () => {
    productValue.textContent++;
  });
  //add
  productAdd.addEventListener("click", () => {
    const quantity = productValue.textContent;
    const cartProduct = document.querySelector(
      `.cart__product[data-id="${product.dataset.id}"]`
    );
    if (cartProduct) {
      const count = cartProduct.querySelector(".cart__product-count");
      count.textContent = Number(count.textContent) + Number(quantity);
    } else {
      const cartProductHTML = document.createElement("div");
      cartProductHTML.classList.add("cart__product");
      cartProductHTML.setAttribute("data-id", product.dataset.id);
      cartProductHTML.innerHTML = `
        <img class="cart__product-image" src="${productImage.src}" alt="Product">
        <div class="cart__product-count">${quantity}</div>
      `;
      cartProducts.appendChild(cartProductHTML);
    }

    productValue.textContent = "0";
  });
});