const btn = document.getElementById("btnTask11");
const messageWithAge = document.getElementById("solution11-age");
const messageWithName = document.getElementById("solution11-name");
btn?.addEventListener("click", () => {
  let name: string = prompt("Name: ...") ?? "Гість";
  let age: number = parseInt(prompt("Age: ...") ?? "0");

  let minAge: number = 17;

  if (messageWithName) {
    messageWithName!.innerHTML = `Вітаю, ${name}`;
  }

  if (age) {
    if (age < minAge) {
      messageWithAge!.innerHTML = `Вам, заборонено відвідування сайту`;
    } else {
      messageWithAge!.innerHTML = `Welcome ;)`;
    }
  }
});
