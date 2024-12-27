const form = document.getElementById("form")
const progress = document.getElementById("progress")

form.onsubmit = function (e) {
  e.preventDefault()
  
  const formData = new FormData(form)
  
  const xhr = new XMLHttpRequest()
  
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload")
  
  xhr.upload.onprogress = function (e) {
    if(e.lengthComputable) {
      const percentComplete = e.loaded / e.total;
      progress.value = percentComplete;
    }
  }
  xhr.onload = function() {
        if (xhr.status === 200) {
            alert("Файл загружен!");
        } else {
            alert("Ошибка при загрузке");
        }
    };
   xhr.onerror = function() {
        alert("Ошибка соединения.");
    };
  xhr.send(formData);
}