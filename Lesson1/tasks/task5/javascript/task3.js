"use strict";
//Випадковим чином 10 разів генерується число або рядок «Ок». Пірахувати чого було більше чисел чи рядків і вивести останнє значення
let btn = document.getElementById("btnTask5");
let message = document.getElementById("solution5");
btn === null || btn === void 0
  ? void 0
  : btn.addEventListener("click", () => {
      let numCalc = 0;
      let stringCalc = 0;
      let lastData = "";
      //--start generate
      for (let i = 0; i < 10; i++) {
        const randomData = Math.random() > 0.5 ? "ok" : Math.random() * 100;
        lastData = randomData;
        if (typeof randomData === "string") {
          stringCalc += 1;
        } else {
          numCalc += 1;
        }
      }
      let difference = numCalc - stringCalc;
      let valueMessage = "";
      if (numCalc > stringCalc) {
        valueMessage = `було згенеровано number: ${numCalc} - Їх  більшість`;
      } else if (numCalc < stringCalc) {
        valueMessage = `було згенеровано string 'ok': ${stringCalc} - Їх  більшість`;
      } else {
        valueMessage = `було згенеровано однаково стрічок і чисел`;
      }
      message.innerHTML = `${valueMessage}. Останнє згенероване значення: ${String(
        lastData || ""
      )}`;
    });
