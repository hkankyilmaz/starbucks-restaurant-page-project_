import './main.css';
import homepage from './homepage.js';
import menu from './menu.js';
import reservation from './reservation.js';
import about from './about.js';

const content = document.getElementById("content");
let onFirstPage = true
content.append(homepage());
events();

function events() {
  const firstContainer = document.querySelector("#content > div");
  document.querySelector('.listClassHome').addEventListener('click', loadHome);
  document.querySelector('.listClassMenu').addEventListener('click', loadMenu);
  document.querySelector('.listClassReservations').addEventListener('click', loadReservation);
  document.querySelector('.listClassAbout').addEventListener('click', loadAbout);

  if (onFirstPage == true) {
  document.querySelector('#menuButton').addEventListener('click', loadMenu);
  document.querySelector('#aboutReservation button').addEventListener('click', loadReservation);
  }

  function loadHome() {
    firstContainer.remove();
    content.append(homepage());
    onFirstPage = true
    events()
  }
  function loadMenu() {
    firstContainer.remove()
    content.append(menu());
    onFirstPage = false
    events()
  }
  function loadReservation() {
    firstContainer.remove();
    content.append(reservation());
    onFirstPage = false
    events()
  }
  function loadAbout() {
    firstContainer.remove()
    content.append(about());
    onFirstPage = false
    events()
  }
}

//To prevent the "Confirm Form Resubmission" dialog
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}
