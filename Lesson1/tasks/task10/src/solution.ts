let btn = document.getElementById("btnTask10");
let message = document.getElementById("solution10");
btn?.addEventListener("click", () => {
  let nameUser: string = prompt("user name: ...") ?? "Гість";

  if (message) {
    message.innerHTML = `Доброго дня, ${nameUser}`;
  }
});
