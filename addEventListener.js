const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultP = document.getElementById("resultado");

btn.addEventListener("click", btnOnClick); //dentro del addEventListener, van dos parametros. El primero, es el nombre del evento a ejecutar y el segundo es el código js que queremos mandar a llamar. En este caso, la el nombre de la función va sin parentesis para que no lo lea como la función (es sintaxis)

function btnOnClick() {
  const sumaInputs = input1.value + input2.value;
  resultP.innerHTML = sumaInputs;
}
