const btnTask2 = document.getElementById(
  "btnTask2"
) as HTMLButtonElement | null;

const btnCreator = document.getElementById(
  "btnTask2-creator"
) as HTMLButtonElement | null;
const btnClear = document.getElementById(
  "btnTask2-clear"
) as HTMLButtonElement | null;

const messageSolution = document.getElementById(
  "solution2"
) as HTMLElement | null;

interface LSData {
  [key: string]: string | number;
}

if (btnTask2) {
  btnTask2.addEventListener("click", () => {
    let valueLS: string | null = localStorage.getItem("data");

    if (!valueLS) {
      messageSolution!.innerHTML = `Немає значень в Locale Storage з ключем data`;
      return;
    }

    try {
      let normalizeData: unknown = JSON.parse(valueLS);

      //  --str
      if (typeof normalizeData === "string") {
        const dateInLS = Date.parse(normalizeData);
        messageSolution!.innerHTML = !isNaN(dateInLS)
          ? `В data збережена дата ${normalizeData}`
          : `В data збережена строка ${normalizeData}`;
      }
      //  --str
      else if (typeof normalizeData === "number") {
        messageSolution!.innerHTML = `Збережено число: ${normalizeData}`;
      }
      // --obj
      else if (typeof normalizeData === "object" && normalizeData !== null) {
        const data = normalizeData as LSData;

        let description =
          "<ul>" +
          Object.entries(data)
            .map(([key, value]) => `<li>${key}: ${value} </li>`)
            .join("") +
          "</ul>";

        messageSolution!.innerHTML = description;
      }
    } catch {
      messageSolution!.innerHTML = `Не вірний формат`;
    }
  });
}
// ---------------create
btnCreator?.addEventListener("click", () => {
  let newData: string | number =
    Math.random() < 0.3
      ? Math.random().toString(36).substring(2, 8)
      : Math.random() < 0.6
      ? Math.floor(Math.random() * 100)
      : new Date().toISOString();

  // ---to ls
  const oldDataLs: string | null = localStorage.getItem("data");

  const parsDataValue: LSData = oldDataLs ? JSON.parse(oldDataLs) : {};
  const numField = `field${Object.keys(parsDataValue).length + 5}`;
  parsDataValue[numField] = newData;

  localStorage.setItem("data", JSON.stringify(parsDataValue));
  // localStorage.setItem("data", JSON.stringify("string"));

  // localStorage.setItem("data", JSON.stringify({ [`field${num++}`]: newData }));
});

// ----clear

btnClear?.addEventListener("click", () => {
  localStorage.removeItem("data");
});
