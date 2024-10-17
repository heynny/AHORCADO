let palabras =["programador","gamer","enhypen","kpoper","sims4","bts","straykids","golden","stay","army"]
let palabraElegida = palabras[Math.floor(Math.random() * palabras.length)];
let palabraGuiones = Array(palabraElegida.length).fill("_")
let letrasUsadas =[]
let intentos = 8
let partesAhorcado = [
        "    /\\_/\\    \n",
        "   ( o.o )   \n",
        "    > ^ <    \n",
        "    / | \\    \n",
        "   /  |  \\   \n",
        "  /   |   \\  \n",
        " |    |    | \n",
        " |____|____| \n",
    ];

let estadoAhorcado =""
let errores= 0

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("palabra").textContent=palabraGuiones.join("")
})

function adivinarLetra(){
    let letra = document.getElementById("inputLetra").value.toLowerCase()
    if(letrasUsadas.includes(letra)|| letra===""){
        document.getElementById("mensaje").textContent="Letra ya usada o invalida "
        return
}

letrasUsadas.push(letra)
document.getElementById("letras").textContent= letrasUsadas.join("")
if(palabraElegida.includes(letra)){
    for(let i =0; i<palabraElegida.length; i++){
        if(palabraElegida[i]==letra){
            palabraGuiones[i]=letra
        }
    }
    document.getElementById("palabra").textContent=palabraGuiones.join("")
}else{
    errores++
    actualizarDibujoAhorcado()
    if(errores=== intentos ){
        document.getElementById("mensaje").textContent="Perdiste, la palabra era: "+palabraElegida
        deshabilitarInput()
    }
}
if (palabraGuiones.join("") === palabraElegida) {
    document.getElementById("mensaje").textContent = "¡Ganaste! La palabra era: " + palabraElegida;
    }
    document.getElementById("inputLetra").value = ""
}



function actualizarDibujoAhorcado(){
    estadoAhorcado += partesAhorcado[errores-1]
    document.getElementById("dibujo-ahorcado").textContent= estadoAhorcado
}

function deshabilitarInput(){
    document.getElementById("palabra").textContent = palabraGuiones.join("")
}


let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

// Cambiar de imagen
function changeSlide(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100; // Desplazar el carrusel
    document.getElementById('carouselImages').style.transform = `translateX(${offset}%)`;
}

// Mover automáticamente
function autoSlide() {
    changeSlide(1); // Cambia a la siguiente imagen
}

// Iniciar el carrusel automático cada 3 segundos
setInterval(autoSlide, 3000); // Cambia de imagen cada 3000 milisegundos (3 segundos)

// Agregar eventos de botón
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));
