const ul = document.createElement("ul");
const words = ["html", "css", "js"];

for (let i = 0; i < words.length; i++) {
  const li = document.createElement("li");
  li.textContent = words[i];
  ul.append(li);
}
document.body.prepend(ul);
console.log(ul);
