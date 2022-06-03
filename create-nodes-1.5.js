const element_1 = document.createElement("div");
element_1.classList.add("red");

const element_2 = document.createElement("div");
element_2.classList.add("green");

const element_3 = document.createElement("div");
element_3.classList.add("blue");
element_3.textContent = "Я вложен"

element_1.prepend(element_2);
element_2.prepend(element_3)
console.log(element_1);
