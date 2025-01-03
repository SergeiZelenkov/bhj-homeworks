document.addEventListener("DOMContentLoaded", () => {
   const modal = document.getElementById("subscribe-modal");
 
   if (document.cookie.includes("modalClosed=true")) {
     return;
   }
 
   modal.classList.add("modal_active");
 
   const close = modal.querySelector(".modal__close.modal__close_times");
   close.addEventListener("click", () => {
     modal.classList.remove("modal_active");
     document.cookie = "modalClosed=true";
   });
 });