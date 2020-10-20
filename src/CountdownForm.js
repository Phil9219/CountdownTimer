export function CountdownForm(onSubmit) {
  const input = document.createElement("input");
  input.type = "number";
  input.required = true;

  const button = document.createElement("button");
  button.innerText = "GO! 😛 ";
  button.tyoe = "submit";

  const form = document.createElement("form");
  form.onsubmit = (event) => {
    event.preventDefault();
    onSubmit(inout.value);
  };
  form.append(input, button);
  return form;
}
