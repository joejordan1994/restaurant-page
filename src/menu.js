function createMenu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const headline = document.createElement("h1");
  headline.textContent = "Our Menu";

  const itemList = document.createElement("ul");

  const items = [
    { name: "Margherita Pizza", price: "$10" },
    { name: "Pepperoni Pizza", price: "$12" },
    { name: "Spaghetti Bolognese", price: "$15" },
    { name: "Caesar Salad", price: "$8" },
  ];

  items.forEach((item) => {
    const listItem = document.createElement("li");

    const itemName = document.createElement("span");
    itemName.classList.add("item-name");
    itemName.textContent = item.name;

    const itemPrice = document.createElement("span");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = item.price;

    listItem.appendChild(itemName);
    listItem.appendChild(itemPrice);
    itemList.appendChild(listItem);
  });

  menuDiv.appendChild(headline);
  menuDiv.appendChild(itemList);

  return menuDiv;
}

export default createMenu;
