import RestaurantImage from "./assets/restaurant.jpg";

function createHome() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Restaurant!";

  const image = document.createElement("img");
  image.src = RestaurantImage;
  image.alt = "Restaurant Image";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "We serve the best food in town. Come and enjoy our delicious meals!";

  homeDiv.appendChild(headline);
  homeDiv.appendChild(image);
  homeDiv.appendChild(paragraph);

  return homeDiv;
}

export default createHome;
