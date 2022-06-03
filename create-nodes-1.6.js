const element_1 = document.createElement("div");
const ul = document.createElement("ul");
const li_1 = document.createElement("li");
const li_2 = document.createElement("li");

li_1.insertAdjacentHTML(
  "afterbegin",
  " <a href='https://instagram.com/intocode'>наш инстаграм</a>"
);
li_2.insertAdjacentHTML(
  "afterbegin",
  "<a href='https://intocode.ru'>наш сайт</a>"
);
element_1.prepend(ul);
ul.prepend(li_1, li_2);
console.log(element_1);

document.body.prepend(element_1);
