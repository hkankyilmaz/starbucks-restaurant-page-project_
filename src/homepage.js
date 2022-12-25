import header from './header.js';
import pic1Import from './img/pic1.jpeg';
import pic2Import from './img/frapp.jpeg';
import pic3Import from './img/pic 3.jpeg';
import videoImport from './img/mixkit-hot-beverage-and-steam-outdoors-24363-medium.mp4'
import githubImport from './img/github-4.svg';
import instaImport from './img/instagram.webp';
import chairsImport from './img/chairs.jpeg'

function homepage() {
  // <-------> //
  const container = document.createElement('div');

  const topSection = document.createElement('section');
  container.append(topSection);
  topSection.classList.add('containerClass'); 

  // <-------> //
  topSection.append(header());
  
  const paragraph = document.createElement('h1')
  topSection.append(paragraph);
  paragraph.textContent = "Welcome to Dumb Starbucks"

  // <-------> //
  const main = document.createElement('main')
  container.append(main);

  // <-------> //
  const discover = document.createElement('div')
  main.append(discover);
  discover.id = "discover"

  const discoverTitle = document.createElement('h2')
  discoverTitle.innerText = "DISCOVER"
  discover.append(discoverTitle);

  const pArray = ["High Quality Ingredients",
  "We strive to use in our products premium and organic ingredients.",
  "Made Fresh",
  "Handcrafted recipes are made from scratch in our kitchen daily.",
  "Unique Flavours", 
  "Treat your taste buds and try something new from our delicious menu."];
  for (let i = 0; i < pArray.length; i++) {
    let p = document.createElement('p');
    discover.append(p);
    p.textContent = pArray[i];
  }

  const pic1 = document.createElement('img');
  discover.append(pic1);
  pic1.src = pic1Import;
  pic1.alt = 'Beverages';

  const pic2 = document.createElement('img');
  discover.append(pic2);
  pic2.src = pic2Import;
  pic2.alt = 'Beverages';
  
  const pic3 = document.createElement('img');
  discover.append(pic3);
  pic3.src = pic3Import;
  pic3.alt = 'Beverages';

  // <-------> //
  const menuDiv = document.createElement('div')
  main.append(menuDiv);
  menuDiv.id = "menuDiv"
  
  const menuTitle = document.createElement('h1')
  menuDiv.append(menuTitle);
  menuTitle.textContent = "SPECIALTY DRINKS AND PASTRIES"
  const menuParagraph = document.createElement('p')
  menuDiv.append(menuParagraph);
  menuParagraph.textContent = "Our menu offers a wide selection of drink and food, from freshly-brewed roasted coffees to cold beverages, baked goods to fresh sandwiches, each sip and bite leaving you wanting more. We also include dairy-free, gluten-free, and vegan options to ensure every person that walks in our doors can be served."
  const menuButton = document.createElement('button')
  menuDiv.append(menuButton)
  menuButton.textContent = ("Explore our menu");
  menuButton.id = "menuButton";

  // <-------> //
  const reservation = document.createElement('div')
  main.append(reservation);
  reservation.id = "reservation"

  const chairs = document.createElement('img');
  reservation.append(chairs);
  chairs.src = chairsImport;
  chairs.alt = 'Empty chairs';
  chairs.setAttribute('loading', "lazy");

  const aboutReservation = document.createElement('div')
  reservation.append(aboutReservation);
  aboutReservation.id = "aboutReservation"

  const reservationTitle = document.createElement('h1')
  aboutReservation.append(reservationTitle);
  reservationTitle.textContent = "MODERN INTERIOR"
  const reservationParagraph = document.createElement('p')
  aboutReservation.append(reservationParagraph);
  reservationParagraph.textContent = "Come study, visit with family and friends, or enjoy a relaxing time in our sit-in area. Dumb Starbucks features an open kitchen concept to provide transparency to our customers. Free complimentary wi-fi with purchase."
  const reservationButton = document.createElement('button')
  aboutReservation.append(reservationButton)
  reservationButton.textContent = ("Reservations");

  // <-------> //
  const gif = document.createElement('div')
  main.append(gif);
  gif.id = "gif"
  const video = document.createElement('video')
  gif.append(video);
  video.src = videoImport
  video.muted = true;
  video.autoplay = true;
  video.loop = true;
  video.setAttribute('playsinline', true);
  const alt = document.createElement('p')
  video.append(alt);
  alt.innerText = "Your browser doesn't support HTML5 video"

  const footInfo = document.createElement('div')
  gif.append(footInfo);
  footInfo.id = 'footInfo'

  const github = document.createElement('img');
  footInfo.append(github);
  github.src = githubImport;
  github.alt = 'Github';
  github.id = 'github'
  github.setAttribute("onclick", "window.open('https://github.com/HardRoof', '_blank')");

  const insta = document.createElement('img');
  footInfo.append(insta);
  insta.src = instaImport;
  insta.alt = 'Instagram';
  insta.id = "instagram"
  insta.setAttribute("onclick", "window.scrollTo(0, 0);");

  const horizontal = document.createElement('div')
  footInfo.append(horizontal)
  
  const footInfoPhrase = document.createElement('p')
  footInfo.append(footInfoPhrase);
  footInfoPhrase.innerText = "Copyright © The Odin Project 2022"


  return container;
};

export default homepage;
