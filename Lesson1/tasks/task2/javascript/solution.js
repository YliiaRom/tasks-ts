"use strict";
const btnTask2 = document.getElementById("btnTask2");
const btnCreator = document.getElementById("btnTask2-creator");
const btnClear = document.getElementById("btnTask2-clear");
const messageSolution = document.getElementById("solution2");
if (btnTask2) {
    btnTask2.addEventListener("click", () => {
        let valueLS = localStorage.getItem("data");
        if (!valueLS) {
            messageSolution.innerHTML = `Немає значень в Locale Storage з ключем data`;
            return;
        }
        try {
            let normalizeData = JSON.parse(valueLS);
            //  --str
            if (typeof normalizeData === "string") {
                const dateInLS = Date.parse(normalizeData);
                messageSolution.innerHTML = !isNaN(dateInLS)
                    ? `В data збережена дата ${normalizeData}`
                    : `В data збережена строка ${normalizeData}`;
            }
            //  --str
            else if (typeof normalizeData === "number") {
                messageSolution.innerHTML = `Збережено число: ${normalizeData}`;
            }
            // --obj
            else if (typeof normalizeData === "object" && normalizeData !== null) {
                const data = normalizeData;
                let description = "<ul>" +
                    Object.entries(data)
                        .map(([key, value]) => `<li>${key}: ${value} </li>`)
                        .join("") +
                    "</ul>";
                messageSolution.innerHTML = description;
            }
        }
        catch (_a) {
            messageSolution.innerHTML = `Не вірний формат`;
        }
    });
}
// ---------------create
btnCreator === null || btnCreator === void 0 ? void 0 : btnCreator.addEventListener("click", () => {
    let newData = Math.random() < 0.3
        ? Math.random().toString(36).substring(2, 8)
        : Math.random() < 0.6
            ? Math.floor(Math.random() * 100)
            : new Date().toISOString();
    // ---to ls
    const oldDataLs = localStorage.getItem("data");
    const parsDataValue = oldDataLs ? JSON.parse(oldDataLs) : {};
    const numField = `field${Object.keys(parsDataValue).length + 5}`;
    parsDataValue[numField] = newData;
    localStorage.setItem("data", JSON.stringify(parsDataValue));
    // localStorage.setItem("data", JSON.stringify("string"));
    // localStorage.setItem("data", JSON.stringify({ [`field${num++}`]: newData }));
});
// ----clear
btnClear === null || btnClear === void 0 ? void 0 : btnClear.addEventListener("click", () => {
    localStorage.removeItem("data");
});
