import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import "./style.css";

function initializeWebsite() {
  const content = document.getElementById("content");
  const homeBtn = document.getElementById("homeBtn");
  const menuBtn = document.getElementById("menuBtn");
  const contactBtn = document.getElementById("contactBtn");

  const buttons = [homeBtn, menuBtn, contactBtn];

  function loadPage(page) {
    content.textContent = ""; // Clear existing content

    // Remove 'active' class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));

    switch (page) {
      case "home":
        content.appendChild(createHome());
        homeBtn.classList.add("active");
        break;
      case "menu":
        content.appendChild(createMenu());
        menuBtn.classList.add("active");
        break;
      case "contact":
        content.appendChild(createContact());
        contactBtn.classList.add("active");
        break;
      default:
        content.appendChild(createHome());
        homeBtn.classList.add("active");
    }
  }

  homeBtn.addEventListener("click", () => loadPage("home"));
  menuBtn.addEventListener("click", () => loadPage("menu"));
  contactBtn.addEventListener("click", () => loadPage("contact"));

  // Load the home page initially
  loadPage("home");
}

initializeWebsite();
