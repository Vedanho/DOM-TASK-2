const element = document.createElement("ul");
element.classList.add("list");
element.insertAdjacentHTML('afterbegin', '<li>Привет,мир!</li>')
console.log(element);
