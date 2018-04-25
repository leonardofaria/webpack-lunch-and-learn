const uniq = () => import("./uniq");

const button = document.createElement("button");
button.innerText = "Show uniq elements";

document.body.appendChild(button);

button.addEventListener("click", e => {
  uniq().then(module => {
    alert(module.default);
  })
});
