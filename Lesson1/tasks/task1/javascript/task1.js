"use strict";

// --f додати в LS {}:
const btn = document.getElementById("btnGenerate1");
const result = document.getElementById("result1");
btn === null || btn === void 0
  ? void 0
  : btn.addEventListener("click", () => {
      let value =
        Math.random() > 0.5
          ? `data in LS = string + ${Math.floor(Math.random() * 100)}`
          : Math.floor(Math.random() * 100);
      localStorage.setItem("data", JSON.stringify({ field2: value }));
      let lsData = localStorage.getItem("data");
      const normalizeData = lsData
        ? JSON.parse(lsData)
        : "в localeStorage нічого немає";
      let content = "в localeStorage поки нічого немає";
      if (typeof normalizeData.field2 === "string") {
        content = ` в Locale Storage зберігається строка! Вона  має довжину:${normalizeData.field2.length} символів`;
      }
      if (typeof normalizeData.field2 === "number")
        content = ` в LocaleStorage зберігається Число ${Number(
          normalizeData.field2
        )}, воно парне або ні: ${
          Number(normalizeData.field2) % 2 === 0 ? "парне" : "непарне"
        }`;
      if (result) {
        result.textContent = content;
      }
    });
