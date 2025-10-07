//Вводиться номер дня або назва дня. Створити функцію, яка за цим значенням виводить на екран чи це робочий день.
let btn = document.getElementById("btnTask4");
let message = document.getElementById("solution4");

//==fn
function isWorkingDay(day: number | string): string {
  //--data
  const isWorkingDayString: string[] = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П`ятниця",
  ];

  const weekendDays = ["Субота", "Неділя"];
  let res = "";

  //--res
  if (typeof day === "number") {
    if (day >= 1 && day <= 5) {
      res = `Ви обрали Робочий день`;
    } else if (day === 6 || day === 7) {
      res = `Ви обрали Вихідний день`;
    } else {
      res = `Ви ввели не валідне значення`;
    }
  } else if (typeof day === "string") {
    if (isWorkingDayString.includes(day)) {
      res = `Ви обрали Робочий день`;
    } else if (weekendDays.includes(day)) {
      res = `Ви обрали Вихідний день`;
    } else res = `Ви ввели не валідне значення`;
  }
  return res;
}
//--click
btn?.addEventListener("click", () => {
  let valueDay = prompt("Вводиться номер дня або назва дня");

  let valueNum = parseFloat(valueDay || "0");

  let result: string = "";

  if (!isNaN(valueNum)) {
    result = isWorkingDay(valueNum);
  } else if (typeof valueDay === "string") {
    result = isWorkingDay(valueDay.trim());
  }
  message!.innerHTML = result;
});
