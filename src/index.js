const uniq = () => import("./uniq").then(m => m.default); // Use the default export when the promise is resolved;

const button = document.createElement("button");
button.innerText = "Show uniq elements";

document.body.appendChild(button);

button.addEventListener("click", e => {
  uniq().then(module => {
    alert(module);
  })
});

const dateButton = document.createElement("button");
dateButton.innerText = "When is tomorrow?";

document.body.appendChild(dateButton);

button.addEventListener("click", e => {
  uniq().then(module => {
    alert(module);
  })
});

dateButton.addEventListener("click", e => {
  import("date-fns").then(({ addDays }) => {
    const today = new Date();
    alert(addDays(today, 1));
  })
});
