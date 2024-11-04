function createHome() {
  const homeDiv = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Restaurant!";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Best food in town.";

  homeDiv.appendChild(headline);
  homeDiv.appendChild(paragraph);

  return homeDiv;
}

export default createHome;
