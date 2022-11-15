//MENU DESPLEGABLE
let botonDesplegar = document.getElementById("boton-desplegar");
let botonesMenu = document.querySelectorAll(".nav-link");
function menuDesplegable(){
    let desplegable = document.getElementById("desplegable");
    desplegable.classList.toggle("desplegar");

    let navBar = document.getElementById("nav-bar");
    navBar.classList.toggle("ocultar");

    let imgBoton = document.getElementById("img-boton");
    imgBoton.classList.toggle("rotar180");
}
botonDesplegar.addEventListener("click", menuDesplegable);
botonesMenu.addEventListener("click", menuDesplegable);
