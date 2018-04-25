const uniq = () => import("./uniq").then(m => m.default); // Use the default export when the promise is resolved;

const button = document.createElement("button");
button.innerText = "Show uniq elements";

document.body.appendChild(button);

button.addEventListener("click", e => {
  uniq().then(module => {
    alert(module);
  })
});
