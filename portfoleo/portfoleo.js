// let age =  "Вы принимаете файлы  cookie!";
// alert(age);
// let password;
// do {
//     password = prompt("Введите пароль:");
// } while (password !== "CR7");
// alert ("подтверждено");
// console.log("пароль принят!");


  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email-input");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Email пользователя:", emailInput.value);
    });
  });
