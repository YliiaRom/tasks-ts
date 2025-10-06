let product1 = "";
let product2 = "";

let valPrice: number;

let price: unknown = prompt("Введіть ціну ...");

if (typeof price === "string") {
  valPrice = parseInt(price);
} else {
  alert("Вводити можно лише числа! ");
}
