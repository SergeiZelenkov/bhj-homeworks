document.addEventListener("DOMContentLoaded", () => {
   const signinForm = document.getElementById("signin__form");
   const signin = document.getElementById("signin");
   const welcome = document.getElementById("welcome");
   const userIdSpan = document.getElementById("user_id");
 
   const savedUserId = localStorage.getItem("user_id");
   if (savedUserId) {
     signin.classList.remove("signin_active");
     welcome.classList.add("welcome_active");
     userIdSpan.textContent = savedUserId;
     return;
   }
 
   signinForm.addEventListener("submit", (e) => {
     e.preventDefault();
 
     const formData = new FormData(signinForm);
     const xhr = new XMLHttpRequest();
     xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
     xhr.addEventListener("readystatechange", function () {
       if (this.readyState === XMLHttpRequest.DONE) {
         if (this.status === 200) {
           const response = JSON.parse(this.responseText);
           if (response.success) {
             localStorage.setItem("user_id", response.user_id);
             signin.classList.remove("signin_active");
             welcome.classList.add("welcome_active");
             userIdSpan.textContent = response.user_id;
           } else {
             alert("Неверные логин или пароль. Попробуйте снова.");
           }
         } else {
           alert(`Ошибка сервера: ${this.status} ${this.statusText}`);
         }
       }
     });
 
     xhr.send(formData);
   });
 });