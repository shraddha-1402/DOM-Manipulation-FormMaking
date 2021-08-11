const section = document.querySelector("#form_area");

function createForm() {
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

  form.append(
    input1,
    input2,
    button,
  );
  section.append(form);
}