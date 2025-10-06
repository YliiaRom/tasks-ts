document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title-task1");
  if (title) {
    let el = title as HTMLElement;

    el.innerHTML =
      el.textContent
        ?.split("")
        .map(
          (item: string, index: number) => `<span class='letter'>${item}</span>`
        )
        .join("") || "";
  }

  document.querySelectorAll(".letter").forEach((item, index: number) => {
    (item as HTMLElement).style.zIndex = String(-index);
  });
});
