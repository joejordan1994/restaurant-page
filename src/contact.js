function createContact() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const subHeading = document.createElement("h2");
  subHeading.textContent = "We would love to hear from you!";

  const address = document.createElement("p");
  address.innerHTML =
    '<i class="fas fa-map-marker-alt"></i> 123 Food Street, Flavor Town, USA';

  const phone = document.createElement("p");
  phone.innerHTML = '<i class="fas fa-phone"></i> (123) 456-7890';

  const email = document.createElement("p");
  email.innerHTML = '<i class="fas fa-envelope"></i> info@ourrestaurant.com';

  contactDiv.appendChild(headline);
  contactDiv.appendChild(subHeading);
  contactDiv.appendChild(address);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(email);

  return contactDiv;
}

export default createContact;
