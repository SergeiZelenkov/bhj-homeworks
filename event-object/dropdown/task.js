let dropdownValue = document.getElementsByClassName("dropdown__value")[0];
let dropdownList = document.getElementsByClassName("dropdown__list")[0];
let dropdownItem = document.getElementsByClassName("dropdown__item");

function onClickList() {
  dropdownList.classList.add("dropdown__list_active");
}

dropdownValue.addEventListener("click", onClickList);

function onClickItem(event) {
  dropdownValue.textContent = this.textContent;
  
  dropdownList.classList.remove("dropdown__list_active");
  
  event.preventDefault();
}

for(let item of dropdownItem){
  item.addEventListener("click", onClickItem);
}