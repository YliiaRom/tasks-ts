"use strict";
// Вводиться сума грошей і позначення валюти.
//  Потрібно перевести у інші валюти ("USD" ,  "EUR" , "UAH").
//   Тобто якщо вводять гривні, то перевести у долари і євро.
//    А якщо вводять долари, то перевести у гривні  і євро.
//     Курси валют- це константи.
let btn = document.getElementById("btnTask6");
let btn2 = document.getElementById("btnTask6-b");
let message = document.getElementById("solution6");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    let sumMoney = prompt("Введіть сумму грошей: ");
    let currency = prompt("Введіть валюту: 'USD' ,  'EUR' , 'UAH'");
    let amount = parseFloat(sumMoney || "0");
    if (isNaN(amount) || amount < 0 || !currency) {
        alert("введіть корректні значення!!!");
        return;
    }
    let result = "";
    const USD_TO_UAH = 41.2;
    const EUR_TO_UAH = 44.3;
    const EUR_TO_USD = EUR_TO_UAH / USD_TO_UAH; // 1.07;
    if (amount && currency) {
        switch (currency.toUpperCase()) {
            case "USD":
                result = `Ви ввели : ${amount}USD, це ${(amount * USD_TO_UAH).toFixed(2)}UAH, і  це ${(amount / EUR_TO_USD).toFixed(2)}EUR,`;
                break;
            case "EUR":
                result = `Ви ввели : ${amount}EUR, це ${(amount * EUR_TO_UAH).toFixed(2)}UAH, і  це ${(amount * EUR_TO_USD).toFixed(2)}USD,`;
                break;
            case "UAH":
                result = `Ви ввели : ${amount}UAH, це ${(amount / USD_TO_UAH).toFixed(2)}USD, і  це ${(amount / EUR_TO_UAH).toFixed(2)}EUR,`;
                break;
            default:
                result = `Ви ввели не вірний формат`;
        }
        message.textContent = result;
    }
});
btn2 === null || btn2 === void 0 ? void 0 : btn2.addEventListener("click", () => {
    let sumMoney = prompt("Введіть сумму грошей: ");
    let currency = prompt("Введіть валюту: 'USD' ,  'EUR' , 'UAH'");
    const sum = parseFloat(sumMoney || "");
    if (isNaN(sum) || sum < 0 || !currency) {
        alert("не коректне значення ввели, або не всі значення");
        return;
    }
    //--value
    const currencyValue = currency.toUpperCase();
    const USD_TO_UAH = 41.2;
    const EUR_TO_UAH = 44.3;
    const EUR_TO_USD = EUR_TO_UAH / USD_TO_UAH;
    let result = "";
    switch (currencyValue) {
        case "USD":
            result = `Ви ввели: ${sum} USD → ${(sum * USD_TO_UAH).toFixed(2)} UAH, ${(sum / EUR_TO_USD).toFixed(2)} EUR`;
            break;
        case "EUR":
            result = `Ви ввели: ${sum} EUR → ${(sum * EUR_TO_UAH).toFixed(2)} UAH, ${(sum * EUR_TO_USD).toFixed(2)} USD`;
            break;
        case "UAH":
            result = `Ви ввели: ${sum} UAH → ${(sum / USD_TO_UAH).toFixed(2)} USD, ${(sum / EUR_TO_UAH).toFixed(2)} EUR`;
            break;
        default:
            result = "Ви ввели не вірний формат валюти!";
    }
    message.innerHTML = result;
});
