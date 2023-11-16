const divContainer = document.querySelectorAll(".div-container");
const textContainers = document.querySelectorAll(".text-container");
const arrows = document.querySelectorAll(".arrow");
const textChange = document.querySelectorAll(".text-change");

let lastClickedIndex = -1; // Index poslední kliknutého divContainer

divContainer.forEach((container, index) => {
  container.addEventListener("click", () => {
    // Zjistíme, zda byl již tento divContainer kliknut
    const isSameContainerClicked = lastClickedIndex === index;

    // Vrátíme předchozí stav pro stejný divContainer
    if (isSameContainerClicked) {
      arrows[index].style.transform = "rotate(0deg)";
      textContainers[index].style.display = "none";
      textChange[index].style.fontWeight = "400";
      lastClickedIndex = -1; // Resetujeme poslední kliknutý index
      return;
    }

    // Ověříme, zda jsme již klikli na nějaký divContainer
    if (lastClickedIndex !== -1) {
      // Vrátíme předchozí stav pro předchozí divContainer
      arrows[lastClickedIndex].style.transform = "rotate(0deg)";
      textContainers[lastClickedIndex].style.display = "none";
      textChange[lastClickedIndex].style.fontWeight = "400";
    }

    // Zjistíme, zda je aktuální obsah zobrazený nebo skrytý
    const isDisplayed = textContainers[index].style.display === "block";

    // Nastavíme odpovídající úpravy pro aktuální obsah
    arrows[index].style.transform = isDisplayed
      ? "rotate(0deg)"
      : "rotate(180deg)";
    textContainers[index].style.display = isDisplayed ? "none" : "block";
    textChange[index].style.fontWeight = isDisplayed ? "400" : "700";

    // Uložíme index aktuálního divContainer jako poslední kliknutý index
    lastClickedIndex = index;
  });
});
