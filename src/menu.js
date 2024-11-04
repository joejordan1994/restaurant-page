function createMenu() {
  const menuDiv = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "Our Menu";

  const itemList = document.createElement("ul");

  const items = ["Pizza", "Pasta", "Salad"];
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    itemList.appendChild(listItem);
  });

  menuDiv.appendChild(headline);
  menuDiv.appendChild(itemList);

  return menuDiv;
}

export default createMenu;
