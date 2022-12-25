import header from './header.js';
import companyPicImport from "./img/52f8fb70eab8ead367092e3f.jpeg"
import coffeePicImport from './img/contact-coffee.jpeg';

function about() {
  const container = document.createElement('div');
  container.id = "aboutContainer"

  // <-------> //
  const topContent = document.createElement('div');
  container.append(topContent);
  topContent.classList.add('containerClass', 'about');

  topContent.append(header());

  // <-------> //
  const titleAbout = document.createElement('h1');
  topContent.append(titleAbout);
  titleAbout.textContent = "ABOUT US";

  // <-------> //
  const bottomContent = document.createElement('div');
  container.append(bottomContent);

   // <-------> //
  const OurContainer = document.createElement('div');
  bottomContent.append(OurContainer);
  OurContainer.classList.add('outer'); 

  const OurCompanyTextDiv = document.createElement('div');
  OurContainer.append(OurCompanyTextDiv);
  OurCompanyTextDiv.classList.add('company', 'text'); 

  const company = document.createElement('h2');
  OurCompanyTextDiv.append(company);
  company.textContent = "OUR COMPANY";

  const companyParagraph = document.createElement('p');
  OurCompanyTextDiv.append(companyParagraph);
  companyParagraph.textContent = "Dumb Starbucks is a coffee experience located in Los Angeles, California. By adding the word 'dumb' we are legally allowed to use the coveted Starbucks name and logo because we fulfilled the minimum requirements to be considered a parody under US law. We have a full menu, including all your favorite Starbucks drinks and a delicious selection of pastries.";

  const obs = document.createElement('p');
  OurCompanyTextDiv.append(obs);
  obs.textContent = "PS: This is not a real company or website. It's a parody of a parody";

  const companyPic = document.createElement('img');
  OurContainer.append(companyPic);
  companyPic.src = companyPicImport;
  companyPic.alt = 'Store Picture';
  companyPic.setAttribute('loading', "lazy");

// <----------> //
  const coffeePic = document.createElement('img');
  OurContainer.append(coffeePic);
  coffeePic.src = coffeePicImport;
  coffeePic.alt = 'Store Picture';
  coffeePic.setAttribute('loading', "lazy");

  const OurCoffeeTextDiv = document.createElement('div');
  OurContainer.append(OurCoffeeTextDiv);
  OurCoffeeTextDiv.classList.add('coffee', 'text'); 

  const coffee = document.createElement('h2');
  OurCoffeeTextDiv.append(coffee);
  coffee.textContent = "OUR COFFEE";

  const coffeeParagraph = document.createElement('p');
  OurCoffeeTextDiv.append(coffeeParagraph);
  coffeeParagraph.textContent = "It takes many hands to craft the perfect cup of coffee – from the farmers who tend to the red-ripe coffee cherries, to the barista who serves it with care. We are committed to the highest standards of quality and service, creating tasteful experiences to our clients.";

  // <-------> //
  const contactContainer = document.createElement('div');
  bottomContent.append(contactContainer);
  contactContainer.classList.add('contactContainer'); 

  // <-------> //
  const contactBox = document.createElement('div');
  contactContainer.append(contactBox);
  
  const contactTitle = document.createElement('h2');
  contactBox.append(contactTitle);
  contactTitle.textContent = "CONTACT US";

  const hours = document.createElement('p');
  contactBox.append(hours);
  hours.textContent = "Monday - Monday \r\n 07:00AM - 09:00PM";

  const address = document.createElement('p');
  contactBox.append(address);
  address.textContent = "1802 Hillsomething Ave. \r\n Los Angeles CA 9002X USA ";

  const companyEmail = document.createElement('p');
  contactBox.append(companyEmail);
  companyEmail.textContent = "323-5555555 \r\n dumbstarbucks@zmail.com";

  // <-------> //
  const form = document.createElement('form');
  contactContainer.appendChild(form);
  form.id = "news"
  form.setAttribute('method', "post");

  const label = document.createElement("label");
  const input = document.createElement("input");

  const inputBox = document.createElement('div');
  
  form.append(label);
  form.append(inputBox);
  inputBox.append(input);

  input.id = "inputNewsId"
  label.setAttribute('for', input.id);

  input.classList.add('inputClass'); 
  input.setAttribute('type', "email");
  input.placeholder = "Email Address"
  input.required = true;

  label.textContent = "Get News & Offers";

  const btn = document.createElement("button"); 
  inputBox.append(btn);
  btn.innerText = "JOIN →";

  //To prevent form submission and reloads webpage
  form.addEventListener("submit", (e)=>{
    e.preventDefault()
    window.location.reload();
    window.scrollTo(0, 0);  //To refresh at top of Page
  })


  return container
}

export default about;

