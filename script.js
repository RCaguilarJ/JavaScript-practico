const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultP = document.getElementById('resultado');

//usamos el "onclick" y el "onchange" para escuchar los eventos del usuario dentro de la página (onclick para escuchar el evento del botón y onchancge para el input)

//vamos a crear una función para evitar tanta línea del código y así evitar hacer un evento por cada clic o cambio  que haga el  usuario 

function btnOnClick(){
    const sumaInputs = input1.value + input2.value;
    resultP.innerHTML = sumaInputs;
}

