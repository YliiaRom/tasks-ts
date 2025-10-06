"use strict";
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    const title = document.getElementById("big-letters");
    if (title) {
        const el = title;
        el.innerHTML =
            ((_a = el.textContent) === null || _a === void 0 ? void 0 : _a.split("").map((item, index) => `<span class="big-letter">${item}</span> `).join("")) || "";
    }
    document.querySelectorAll(".big-letter").forEach((item, index) => {
        item.style.zIndex = String(-index);
    });
});
