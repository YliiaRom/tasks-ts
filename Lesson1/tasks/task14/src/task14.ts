// Випадковим чином генерується 10 разів число або якийсь рядок.
//     Пірахувати чого було більше чисел чи рядків і вивести останне число чи
//     останній рядок

const btnTask14 = document.getElementById("btnTask14") as HTMLButtonElement;
const solution14 = document.getElementById("solution14") as HTMLElement;

btnTask14?.addEventListener("click", () => {
  let stringCount = 0;
  let numCount = 0;
  let lastData: string | number = "";

  for (let i = 0; i < 10; i++) {
    const value: string | number =
      Math.random() > 0.5 ? "ok" : Math.floor(Math.random() * 100);

    if (typeof value === "string") {
      stringCount++;
    } else {
      numCount++;
    }
    lastData = value;
  }
  let differensVal = stringCount - numCount;
  let differens: string = differensVal > 0 ? "string" : "number";

  solution14!.innerHTML = `<p>Було згенеровано string:${stringCount}раз ;<br/> number: ${numCount}раз;<br/> Більшу кількість раз генерувалось: ${differens} ; <br/>Останнім генерувалось ${lastData}</p>`;
});
