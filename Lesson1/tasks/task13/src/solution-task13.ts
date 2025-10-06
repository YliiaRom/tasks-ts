const btnCreator = document.getElementById(
  "btnCreatorTask13"
) as HTMLButtonElement;

const message = document.getElementById("solution13") as HTMLElement;

btnCreator?.addEventListener("click", () => {
  const randomType: unknown = Math.floor(Math.random() * 4);
  let value: unknown;

  // ---type
  switch (randomType) {
    case 1:
      value = Math.random().toString(32).substring(2, 8);

      break;
    case 2:
      value = Math.floor(Math.random() * 10);

      break;
    case 3:
      value = { name: "yuliia", y1: 2 };
      // content = `Привіт, ${dataThird["name"]}`;
      break;
    default:
      value = { x: 1, y: 2 };
  }
  // ----type?
  let content: string;

  if (typeof value === "string") {
    content = `Рядок довжиною ${value}: ${value.length}`;
  } else if (typeof value === "number") {
    content = `Квадрат числа: ${value}: ${value * value}`;
  } else if (typeof value === "object" && value !== null) {
    const obj = value as Record<string, unknown>;
    if ("name" in obj) {
      content = `Привіт, ${obj["name"]}`;
    } else {
      content = `В об'екті немає "name"`;
    }
  } else {
    content = "Невідомий тип даних";
  }

  if (message && content) {
    message.textContent = String(content);
  }
});
