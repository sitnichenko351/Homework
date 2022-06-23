const formConfig = [
  {
    element: "text",
    name: "login",
    label: "Логин",
  },
  {
    element: "text",
    name: "age",
    label: "Возраст",
  },
  {
    element: "select",
    name: "language",
    label: "Выберите язык програмирования",
    options: [
      {
        text: "JavaScript",
        value: "js",
      },
      {
        text: "Java",
        value: "java",
      },
      {
        text: "Python",
        value: "python",
      },
    ],
  },
];

const createFields = (config) => {
  return config.map((fieldConfig) => {
    const wrapper = document.createElement("div");
    const label = document.createElement("label");
    label.setAttribute("for", fieldConfig.name);
    label.innerText = fieldConfig.label;

    let element;

    switch (fieldConfig.element) { 
      case "text":
        element = document.createElement("input");
        element.setAttribute("type","text");

        element.setAttribute("id", fieldConfig.name);
        element.setAttribute("name", fieldConfig.name);

        break;
        case "select":
          element = document.createElement("select");
          fieldConfig.options.forEach((opt) => {
            const option = document.createElement("option");
            option.innerText = opt.text;
            option.setAttribute("value", opt.value);

            element.append(option);
          });

          element.setAttribute("id", fieldConfig.name);
          element.setAttribute("name", fieldConfig.name);

          break;
        default:
          console.log("Unhandled input type", fieldConfig.element);  
    }
    wrapper.append(label, element);
    return wrapper;
  });
};
const convertFromDateToObject = (formData) => {
  const data = {};
  for (const pair of formData.entries()) {
    data[pair[0]] = pair[1];
  }
  return data;
};

const handleSubmit = (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  const data = convertFromDateToObject (formData);

  console.log(data);
};
const form = document.createElement("form");
const fields = createFields(formConfig);

fields.forEach((item) => {
  form.append(item);
});

const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.innerText = "Подтвердить";
form.append(submitBtn);
document.body.append(form);
form.addEventListener("submit", handleSubmit);