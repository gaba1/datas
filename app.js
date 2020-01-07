const buttonText = document.getElementById("get-text");
const buttonJson = document.getElementById("get-json");
const buttonExternal = document.getElementById("get-ext");
const buttonFetch = document.getElementById("fetch-json");
const display = document.getElementById("text-output");

// Event Listeners
buttonText.addEventListener("click", getText);
buttonJson.addEventListener("click", getJson);
buttonExternal.addEventListener("click", getExternal);
buttonFetch.addEventListener("click", fetchJson);

// Get text from txt
function getText() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "text.txt", true);

  xhr.onload = function() {
    if (this.status === 200) {
      display.innerHTML = `<p>${this.responseText}</p>`;
    }
  };

  xhr.onerror = function() {
    console.log("Request error...");
  };
  xhr.send();
}

// Get data from json
function getJson() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "persons.json", true);

  xhr.onload = function() {
    let output = "";
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      // console.log(customers);
      customers.forEach(function(customer) {
        output += `
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${customer.id}</li>
              <li class="list-group-item">Name: ${customer.name}</li>
              <li class="list-group-item">Phone: ${customer.phone}</li>
            </ul>
            <br>
            `;
      });
    }

    xhr.onerror = function() {
      console.log("Request error...");
    };

    display.innerHTML = output;
  };
  xhr.send();
}

// Json from external

function getExternal() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onload = function() {
    let output = "";
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      // console.log(customers);
      customers.forEach(function(customer) {
        output += `
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${customer.id}</li>
              <li class="list-group-item">Name: ${customer.name}</li>
              <li class="list-group-item">Phone: ${customer.phone}</li>
            </ul>
            <br>
            `;
      });
    }

    xhr.onerror = function() {
      console.log("Request error...");
    };

    display.innerHTML = output;
  };
  xhr.send();
}

// Fetch json

function fetchJson() {
  fetch("persons.json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      // console.log(data)
      let output = "";
      data.forEach(function(customer) {
        output += `
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${customer.id}</li>
          <li class="list-group-item">Name: ${customer.name}</li>
          <li class="list-group-item">Phone: ${customer.phone}</li>
        </ul>
        <br>
        `;
      });
      display.innerHTML = output;
    });
}
