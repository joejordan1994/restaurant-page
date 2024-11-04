import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import "./style.css";

function initializeWebsite() {
  const content = document.getElementById("content");

  function loadPage(page) {
    content.textContent = ""; // Clear existing content
    switch (page) {
      case "home":
        content.appendChild(createHome());
        break;
      case "menu":
        content.appendChild(createMenu());
        break;
      case "contact":
        content.appendChild(createContact());
        break;
      default:
        content.appendChild(createHome());
    }
  }

  document
    .getElementById("homeBtn")
    .addEventListener("click", () => loadPage("home"));
  document
    .getElementById("menuBtn")
    .addEventListener("click", () => loadPage("menu"));
  document
    .getElementById("contactBtn")
    .addEventListener("click", () => loadPage("contact"));

  // Load the home page initially
  loadPage("home");
}

initializeWebsite();
