const section = document.querySelector("#form_area");
const createFormButton = document.querySelector("#create_form");
const deleteFormButton = document.querySelector("#delete_form");

function createForm() {
  deleteForm();

  let form = document.createElement("form");
  form.setAttribute("id", "form");
  form.setAttribute("class", "multiplication-form");

  let input1 = document.createElement("input");
  input1.setAttribute("type", "number");
  input1.setAttribute("id", "first_number");
  input1.setAttribute("class", "input");
  input1.setAttribute("required", "true");
  input1.setAttribute("placeholder", "enter number 1");

  let input2 = document.createElement("input");
  input2.setAttribute("type", "number");
  input2.setAttribute("id", "second_number");
  input2.setAttribute("class", "input");
  input2.setAttribute("required", "true");
  input2.setAttribute("placeholder", "enter number 2");

  let button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("id", "submit_button");
  button.setAttribute("class", "button");
  button.innerText = "Submit";

  let div = document.createElement("div");
  div.setAttribute("id", "output");
  div.setAttribute("class", "output-div");

  form.append(
    input1,
    input2,
    button,
  );
  section.append(form);
  section.append(div);
}

function deleteForm() {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
}

createFormButton.addEventListener("click", createForm);
deleteFormButton.addEventListener("click", deleteForm);

