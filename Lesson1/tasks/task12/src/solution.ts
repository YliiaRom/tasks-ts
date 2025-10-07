// Потрібно ввести стать студента ("male", "female"). У залежносі від цього додати Mr, Ms.
// let gender: 'male' | 'female'
// let prefix: 'Mr' | 'Ms
let btn = document.getElementById("btnTask12");
let message = document.getElementById("solution12");

btn?.addEventListener("click", () => {
  const userName: string = prompt("Name ....")!;

  let gender:
    | "male"
    | "female"
    | "Ви Ввели не коректне значення"
    | "Чекаемо на Ваші данні" = "Чекаемо на Ваші данні";
  let prefixGender: "Mr" | "Ms" | "" = "";

  let dataPrompt = prompt("Ввести стать студента: m/f");

  if (dataPrompt) {
    if (dataPrompt === "m") {
      prefixGender = "Mr";
      gender = "male";
    } else if (dataPrompt === "f") {
      prefixGender = "Ms";
      gender = "female";
    } else {
      gender = "Ви Ввели не коректне значення";
    }
  }

  message!.textContent = `Доброго дня, ${prefixGender} ${userName}`;
});
