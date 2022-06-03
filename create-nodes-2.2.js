const ul = document.createElement("ul");
const words = ["html", "css", "js"];

function render(arr) {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.textContent = arr[i];
    ul.append(li);
  }
}

render(words);

document.body.prepend(ul)