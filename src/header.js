import logoImport from './img/dumb-starbucks-logo.jpeg';

function header() {
  let header = document.createElement('HEADER');

  let logo = document.createElement('img');
  header.append(logo);

  logo.src = logoImport;
  logo.alt = 'logo';
  logo.id = "logoID"

  let list = document.createElement('ul')
  header.append(list);

  let listArray = ["Home","Menu","Reservations", "About"];
  for (let i = 0; i < listArray.length; i++) {
    let listItem = document.createElement('li');
    list.append(listItem);
    listItem.classList.add("listClass", `listClass${listArray[i]}`); 
    listItem.textContent = listArray[i];
  }
return header
};

export default header;