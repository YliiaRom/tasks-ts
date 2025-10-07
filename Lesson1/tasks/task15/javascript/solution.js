"use strict";
//Вводиться статус відповіді. Потрібно визначити рядкове представлення ("success" ,  "error")
// let statusTitle: 'success' | 'error'
let btn = document.getElementById("btnTask15");
let message = document.getElementById("solution15");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    let titleStatus;
    let dataPrompt = prompt("Введіть значення(цифру) статусу відповіді: 200, 201, ...404");
    titleStatus = "Вводити треба число!";
    if (dataPrompt) {
        let num = parseInt(dataPrompt);
        if (!isNaN(num)) {
            titleStatus = num >= 200 && num < 299 ? "success" : "error";
        }
    }
    message.textContent = `тут рядкове представлення статусe відповіді: ${titleStatus}`;
});
