const poolTitle = document.getElementById("poll__title");
const poolAnswer = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.send();

xhr.onload = function () {
  const pool = JSON.parse(xhr.responseText);

  const title = document.createElement("div");

  title.innerHTML = pool.data.title;

  const answers = pool.data.answers;
  answers.forEach((answer) => {
    const buttonAnswer = document.createElement("button");
    buttonAnswer.innerHTML = answer;
    buttonAnswer.className = "poll__answer";
    poolAnswer.append(buttonAnswer);
    buttonAnswer.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Спасибо, ваш голос засчитан");
    });
    poolTitle.append(title);
  });
};