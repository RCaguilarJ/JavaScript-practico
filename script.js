const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const pclass = document.querySelector('pclass');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');


console.log({
    h1,
    p,
    pclass,
    pid,
    input,

});


h1.innerHTML = 'La vaca vaquera'; //convierte el código html (más propenso a ataques maliciosos)
p.innerText = 'Arriba la cheve';// sólo convierte el texto ( menos propenso a ataques maliciosos)
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo');
//h1.classList.add('rojo');
input.value = 'escribe contraseña';

//de ejemplo vamos a agregar una imagen desde JS a HTML COMO ATRIBUTO
//cramos la variable o "constante" de la img

const img = document.createElement('img');
//a la variable img le enviamos el atributo y lo concatenamos con la url de la imágen deseada

img.setAttribute('src', 'https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png');
// usamos el console.log para ver que el atributo esté cargado a nuestra página
console.log(img);

//para agregarla y que se vea en la página, hacemos lo siguiente

pid.append(img); //insertamos la imagen dentro de un contenedor que ya existía(en este caso el parrafo con ID "pid");


