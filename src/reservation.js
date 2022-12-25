import header from './header.js';

function menu() {
  const container = document.createElement('div');
  container.classList.add('containerClass', 'reservation');

  container.append(header());

  // <-------> //
  const main = document.createElement('main');
  container.append(main);

  const divReservationTitle = document.createElement('div');
  main.append(divReservationTitle);
  divReservationTitle.classList.add('divReservationTitle', 'title');
  
  const titleReservation = document.createElement('h1');
  divReservationTitle.append(titleReservation);
  titleReservation.textContent = "RESERVATIONS"
  const line = document.createElement('span');
  divReservationTitle.append(line);

  // <-------> //
  const form = document.createElement('form');
  main.appendChild(form);
  form.id = "formID"
  form.setAttribute('method', "post");
  // form.setAttribute('action', "");

  let inputArray = []
  let labelArray = ["Date", "Time", "Guests", ""]
  for (let i = 0; i < 4; i++) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    form.append(label);
    form.append(input);
    input.id = `input${i}`

    label.setAttribute('for', `${input.id}`);
    label.textContent = labelArray[i];
    input.classList.add('inputClass');
    input.required = true;
    inputArray.push(input);

    if (i == 1) {
      const span = document.createElement('span')
      form.append(span);
      span.classList.add('validity');
    }
  }
  inputArray[0].setAttribute('type', "date");

  inputArray[1].setAttribute('type', "time");
  inputArray[1].value = "07:00";
  inputArray[1].min = "07:00";
  inputArray[1].max = "21:00";
  inputArray[1].pattern = "[0-9]{2}:[0-9]{2}";

  inputArray[2].setAttribute('type', "number");
  inputArray[2].min = "1";
  inputArray[2].max = "8";

  inputArray[3].setAttribute('type', "email");
  inputArray[3].placeholder = "Email Address"

  // <-------> //
  const btn = document.createElement("button"); 
  main.append(btn);
  btn.setAttribute('form', "formID");
  btn.innerText = "Check Availability";

  //To prevent form submission and reloads webpage
  form.addEventListener("submit", (e)=>{
    e.preventDefault()
    window.location.reload();
    window.scrollTo(0, 0);  //To refresh at top of Page
  })

  return container
}

export default menu;