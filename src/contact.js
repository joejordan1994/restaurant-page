function createContact() {
  const contactDiv = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "Phone: 123-456-7890";

  const email = document.createElement("p");
  email.textContent = "Email: info@restaurant.com";

  contactDiv.appendChild(headline);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(email);

  return contactDiv;
}

export default createContact;
