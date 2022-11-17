//MENU DESPLEGABLE
let botonDesplegar = document.getElementById("boton-desplegar");
let botonesMenu = document.querySelectorAll(".nav-link");
let logoBtn = document.getElementById("logo");
function menuDesplegable(){
    let desplegable = document.getElementById("desplegable");
    desplegable.classList.toggle("desplegar");

    let navBar = document.getElementById("nav-bar");
    navBar.classList.toggle("ocultar");

    let imgBoton = document.getElementById("img-boton");
    imgBoton.classList.toggle("rotar180");
}
botonDesplegar.addEventListener("click", menuDesplegable);
logoBtn.addEventListener("click", menuDesplegable);
botonesMenu.forEach(elemento => 
    elemento.addEventListener("click", menuDesplegable));

// ----- SECCION AÑADIR INVITADO ----- //
let listaInvitados = [];

//Variables formulario:
let nombreInvitado = document.getElementById("nombreInvitado");
let atNombre = document.getElementById("atNombre");


//Actualizacion nombre y numero
nombreInvitado.addEventListener("input", () => {
    let numeroActualizado = listaInvitados.length + 1;
    let atNumero = document.getElementById("atNumero");
    atNumero.innerText=numeroActualizado;
    atNombre.innerText="";
    //actualizacion AVATAR
    let avatarInvitado = document.getElementById("avatarInvitado");
    let avatar = avatarInvitado.options[avatarInvitado.selectedIndex].text;
    let atAvatar = document.getElementById("atAvatar");
    atNombre.innerText=nombreInvitado.value;
    atAvatar.innerHTML=`<img src="./img/Usuarios/${avatar}.png" alt="tipo de usuario">`
});

