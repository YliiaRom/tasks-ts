"use strict";
//Вводиться назва продукту, ціна одиниці та кількість для 2-х видів товарів. Вивести чек про купівлю.
let btn = document.getElementById("btnTask3");
let message = document.getElementById("solution3");
let product1 = "";
let product2 = "";
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    let products = [];
    for (let i = 1; i <= 2; i++) {
        const dataProduct = prompt(`Введіть назва продукту №${i}:`);
        const dataPrice = prompt(`Ціна за Товар№${i}:`);
        const dataQuantity = prompt(`Кількість Товару№${i}:`);
        let priceValue = parseFloat(dataPrice || "0");
        let priceQuantity = parseFloat(dataQuantity || "0");
        //- not valid
        if (!dataProduct ||
            isNaN(priceValue) ||
            priceValue < 0 ||
            isNaN(priceQuantity) ||
            priceQuantity < 0) {
            alert("Ви вводили не коректні значення, або не ввели якісь значення");
            return;
        }
        //-valid
        products.push({
            name: dataProduct,
            price: priceValue,
            quantity: priceQuantity,
            sum: priceValue * priceQuantity,
        });
    }
    //-check
    let receipt = `<h4>Чек про купівлю:</h4>`;
    let totalSum = 0;
    products.forEach((product, index) => {
        receipt += `<p>назва Товару${index + 1}: ${product.name} </p> <p>ціна одиниці:${product.price}</p> 
    <p>кількість: ${product.quantity};</p>
    <p class="sum">Загальна сумма за товари ${product.name}: ${product.sum};</p> `;
        totalSum += product.sum;
    });
    receipt += `<h2> Сумма: ${totalSum}грн</h2>`;
    //-message
    message.innerHTML = receipt;
});
