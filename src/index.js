import $ from "jquery";

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

const select = document.createElement("div");
select.innerHTML = `
<select>
  <option></option>
  <option value="pink">Pink Theme</option>
  <option value="yellow">Yellow Theme</option>
</select>
`;

document.body.appendChild(select);

const getTheme = (themeName) => import(`./themes/${themeName}`);

select.firstElementChild.addEventListener('change', ({target: {value}}) => {
  getTheme(value).then((themeModule) => {
    themeModule.default();
  })
});

const hideSelectButton = document.createElement("button");
hideSelectButton.innerText = "Hide select field";

document.body.appendChild(hideSelectButton);

hideSelectButton.addEventListener("click", e => {
  $("select").hide();
});
