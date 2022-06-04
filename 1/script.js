const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];

const renderProcuts = (productsList) => {
  const container = document.createElement("div");

  productsList.forEach((prod) => {
    const prodContainer = document.createElement("div");
    const prodTitle = document.createElement("h3");
    const prodSubtitle = document.createElement('h4');
    const prodPropertiesList = document.createElement("ul");

    prod.properties.forEach((prop) => {
      const listItem = document.createElement("li");
      listItem.innerText = prop;
      prodPropertiesList.append(listItem);
    });

    prodTitle.innerText = prod.name;
    prodSubtitle.innerText = prod.brand;

    prodContainer.append(prodTitle, prodSubtitle, prodPropertiesList);
    container.append(prodContainer)
  });

  document.body.append(container);
};
renderProcuts (products);