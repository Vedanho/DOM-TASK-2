const arr_1 = [
  {
    name: "Google",
    url: "https://google.com",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "intocode",
    url: "https://intocode.ru",
  },
];

const ul = document.createElement("ul");
function render(arr) {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.insertAdjacentHTML(
      "afterbegin",
      `<a href = ${arr[i].url}>${arr[i].name}</a>`
    );
    ul.append(li);
  }
}
render(arr_1);
console.log(ul)
document.body.prepend(ul);
