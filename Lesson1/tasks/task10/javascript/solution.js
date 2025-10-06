"use strict";
let btn = document.getElementById("btnTask10");
let message = document.getElementById("solution10");
btn === null || btn === void 0
  ? void 0
  : btn.addEventListener("click", () => {
      var _a;
      let nameUser =
        (_a = prompt("user name: ...")) !== null && _a !== void 0
          ? _a
          : "Гість";
      if (message) {
        message.innerHTML = `Доброго дня, ${nameUser}`;
      }
    });
