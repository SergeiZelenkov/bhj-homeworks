document.addEventListener("DOMContentLoaded", () => {
   const rotators = document.querySelectorAll(".rotator");
 
   rotators.forEach((rotator) => {
     let currentIndex = 0;
     const cases = rotator.querySelectorAll(".rotator__case");
     setInterval(() => {
       cases[currentIndex].classList.remove("rotator__case_active");
       currentIndex = (currentIndex + 1) % cases.length;
       cases[currentIndex].classList.add("rotator__case_active");
     }, 1000);
   });
 });