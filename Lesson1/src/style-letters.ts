document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("big-letters");
  if (title) {
    const el = title as HTMLElement;

    el.innerHTML =
      el.textContent
        ?.split("")
        .map(
          (item: string, index: number) =>
            `<span class="big-letter">${item}</span> `
        )
        .join("") || "";
  }
  document.querySelectorAll(".big-letter").forEach((item, index: number) => {
    (item as HTMLElement).style.zIndex = String(-index);
  });
});
