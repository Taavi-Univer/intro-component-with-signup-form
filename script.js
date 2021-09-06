let form = document.querySelector("form");
let data = form.getElementsByClassName("data");

// -------------------------------------------
function control() {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === email) {
      emailControl(data[i]);
    } else {
      change(data[i]);
    }
  }
}

// -------------------------------------------------------------------------------
function emailControl(el) {
  let text = /([a-zA-Z0-9_\.\-])+\@([a-zA-Z0-9]+\.)([a-zA-Z0-9])+/g;
  el.value === "" || !el.value.match(text) ? noEmail(el) : therIsEmail(el);
}

function noEmail(el) {
  el.classList.add("empty-field");
  email.placeholder = "email@example/com";
  el.classList.add("example");
  let id = el.id + "Text";
  let replacement = document.getElementById(id);
  replacement.style.display = "block";
}

function therIsEmail(el) {
  el.classList.remove("empty-field");
  el.classList.remove("example");
  var id = el.id + "Text";
  var replacement = document.getElementById(id);
  replacement.style.display = "none";
}

// -------------------------------------------------
function change(el) {
  el.value === "" ? noText(el) : thereIsText(el);
}

function noText(el) {
  el.classList.add("empty-field");
  el.placeholder = "";
  let id = el.id + "Text";
  let replacement = document.getElementById(id);
  replacement.style.display = "block";
}

function thereIsText(el) {
  el.classList.remove("empty-field");
  var id = el.id + "Text";
  var replacement = document.getElementById(id);
  replacement.style.display = "none";
}

//--------------------------------------------------
form.addEventListener("submit", function (event) {
  event.preventDefault();
  control();
});
