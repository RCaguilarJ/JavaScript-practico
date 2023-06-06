//primero debemos darle un ID al formulaio y crear su selector y hacer el addEventListener dentro del mismo

const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultP = document.getElementById("resultado");

form.addEventListener("submit", sumarInpurValues); //cambiamos el evento 'click' por un 'submit' y el nombre de la función

//le asignamos el parametro 'valor' a la función

//los formularios por defecto al presionar "el botón" mandan los datos introducidos por el usuario, haciendo que se recargue la página. Para evitar esto, usamos  event.preventDefault dentro de la función

function sumarInpurValues(event) {
  event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  resultP.innerHTML = sumaInputs;
}
