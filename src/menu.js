import header from './header.js';

function menu() {
  const container = document.createElement('div');
  container.classList.add('containerClass', 'menu');

  container.append(header());

  // <-------> //
  const mainMenu = document.createElement('main');
  container.append(mainMenu);

  const menuTitle = document.createElement('div');
  mainMenu.append(menuTitle);
  menuTitle.classList.add('divTitle', 'title');
  const title = document.createElement('h1');
  menuTitle.append(title);
  title.textContent = "OUR MENU"
  const line = document.createElement('span');
  menuTitle.append(line);

  // <-------> //
  const gridMenu = document.createElement('div');
  mainMenu.append(gridMenu);
  gridMenu.id = "gridMenuID"

  const espressoMenu = document.createElement('div');
  gridMenu.append(espressoMenu);
  espressoMenu.classList.add('espresso', 'menu');

  const icedMenu = document.createElement('div');
  gridMenu.append(icedMenu);
  icedMenu.classList.add('iced', 'menu');

  const frappMenu = document.createElement('div');
  gridMenu.append(frappMenu);
  frappMenu.classList.add('frapp', 'menu');

  const pastryMenu = document.createElement('div');
  gridMenu.append(pastryMenu);
  pastryMenu.classList.add('pastry', 'menu');

  const espressoArray = ["Dumb Espresso",
  "",
  "",
  "Tall", "Grande", "Venti",
  "Dumb Caramel Macchiato",
  3.75, 4.45, 4.75,
  "Dumb Caffe Latte",
  2.95, 3.65, 3.95,];
  const icedArray = ["Dumb Iced Espresso",
  "",
  "",
  "Tall", "Grande", "Venti",
  "Dumb Iced Vanilla Latte",
  3.45, 4.15, 4.65,
  "Dumb Iced Cafe Mocha",
  3.45, 4.15, 4.65,];
  const frappArray = ["Dumb Frappuccino",
  "",
  "",
  "Tall", "Grande", "Venti",
  "Dumb Coffee Frappuccino",
  3.15, 3.75, 4.45,
  "Dumb Hazelnut Frappuccino",
  3.75, 4.45, 4.75,]
  const pastryArray = ["Dumb Pastry",
  "",
  "Banana loaf", 3.25,
  "Croissant", 2.75,
  "Birthday Cake Pop", 2.25

  ];
  espressoArray.forEach(element => {
    const item = document.createElement('p');
    item.innerText = element;
    espressoMenu.appendChild(item);
    if (typeof element === "number"){
      item.classList.add('price')
      }
  });
  icedArray.forEach(element => {
    const item = document.createElement('p');
    item.innerText = element;
    icedMenu.appendChild(item);
    if (typeof element === "number"){
      item.classList.add('price')
      }
  });
  frappArray.forEach(element => {
    const item = document.createElement('p');
    item.innerText = element;
    frappMenu.appendChild(item);
    if (typeof element === "number"){
      item.classList.add('price')
      }
  });
  pastryArray.forEach(element => {
    const item = document.createElement('p');
    item.innerText = element;
    pastryMenu.appendChild(item);
    if (typeof element === "number"){
      item.classList.add('price')
      }
  });

  return container
}

export default menu;