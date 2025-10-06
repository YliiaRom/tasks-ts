"use strict";
const btn = document.getElementById("btnTask11");
const messageWithAge = document.getElementById("solution11-age");
const messageWithName = document.getElementById("solution11-name");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    var _a, _b;
    let name = (_a = prompt("Name: ...")) !== null && _a !== void 0 ? _a : "Гість";
    let age = parseInt((_b = prompt("Age: ...")) !== null && _b !== void 0 ? _b : "0");
    let minAge = 17;
    if (messageWithName) {
        messageWithName.innerHTML = `Вітаю, ${name}`;
    }
    if (age) {
        if (age < minAge) {
            messageWithAge.innerHTML = `Вам, заборонено відвідування сайту`;
        }
        else {
            messageWithAge.innerHTML = `Welcome ;)`;
        }
    }
});
