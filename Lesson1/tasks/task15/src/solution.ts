//Вводиться статус відповіді. Потрібно визначити рядкове представлення ("success" ,  "error")
// let statusTitle: 'success' | 'error'
let btn = document.getElementById("btnTask15") as HTMLButtonElement;
let message = document.getElementById("solution15") as HTMLElement;

btn?.addEventListener("click", () => {
  let titleStatus: "success" | "error" | "Вводити треба число!";

  let dataPrompt = prompt(
    "Введіть значення(цифру) статусу відповіді: 200, 201, ...404"
  );
  titleStatus = "Вводити треба число!";
  if (dataPrompt) {
    let num = parseInt(dataPrompt);

    if (!isNaN(num)) {
      titleStatus = num >= 200 && num < 299 ? "success" : "error";
    }
  }
  message!.textContent = `тут рядкове представлення статусe відповіді: ${titleStatus}`;
});
