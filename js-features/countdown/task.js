const actionTimer = function () {
   const timer = document.getElementById("timer");
   
   if(timer.textContent > 0) {
      timer.textContent --;
   } else {
      alert("Вы победили в конкурсе!");
   }
   return;   
}

setInterval(actionTimer, 1000)