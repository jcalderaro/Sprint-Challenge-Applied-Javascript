// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


/* ------------------------------------------------------------------------------ */

const header = document.querySelector(".header-container");

header.appendChild(createHeader())

function createHeader() {

    const header = document.createElement("div");

    const date = document.createElement("span");

    const times = document.createElement("h1");

    const temp = document.createElement("span");

    header.appendChild(date);

    header.appendChild(times);

    header.appendChild(temp);

    header.classList.add("header");

    date.classList.add("date");

    temp.classList.add("temp");

    date.textContent = (`SMARCH 28, 2019`);

    times.textContent = (`Lambda Times`);

    temp.textContent = (`98*`);

    return header;

}

/* ------------------------------------------------------------------------------ */