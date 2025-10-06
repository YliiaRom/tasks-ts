"use strict";
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    const title = document.getElementById("title-task1");
    if (title) {
        let el = title;
        el.innerHTML =
            ((_a = el.textContent) === null || _a === void 0 ? void 0 : _a.split("").map((item, index) => `<span class='letter'>${item}</span>`).join("")) || "";
    }
    document.querySelectorAll(".letter").forEach((item, index) => {
        item.style.zIndex = String(-index);
    });
});
