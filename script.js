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
//FUNCION RENDERIZADO
function renderizarInvitados () {
    listaInvitados.forEach(invitado => {

    })
}

//Variables formulario:
let numeroActualizado;
let avatarInvitado;
let nombreInvitado;
let llevaInvitado;
let gastoInvitado;
let correoInvitado;

//Variables TARJETA
let atNumero;
let atAvatar;
let atNombre;
let atLleva;
let atGasto;
let atCorreo;

//actualizacion AVATAR
avatarInvitado = document.getElementById("avatarInvitado");
avatarInvitado.addEventListener("change", () => {
    let avatar = avatarInvitado.options[avatarInvitado.selectedIndex].text;
    atAvatar = document.getElementById("atAvatar");
    atAvatar.innerHTML=`<img src="./img/Usuarios/${avatar}.png" alt="tipo de usuario">`;
});

//Actualizacion nombre y numero
nombreInvitado = document.getElementById("nombreInvitado");
nombreInvitado.addEventListener("input", () => {
    numeroActualizado = listaInvitados.length + 1;
    atNumero = document.getElementById("atNumero");
    atNumero.innerText=parseInt(numeroActualizado);
    atNombre = document.getElementById("atNombre");
    atNombre.innerText="";
    atNombre.innerText=nombreInvitado.value;
});

//Actualizacion de ITEM
llevaInvitado = document.getElementById("llevaInvitado");
atLleva = document.getElementById("atLleva");
llevaInvitado.addEventListener("input", () =>{
    atLleva.innerText = llevaInvitado.value;
});

//Actualizacion de GASTO
atGasto = document.getElementById("atGasto");
gastoInvitado = document.getElementById("gastoInvitado");
gastoInvitado.addEventListener("input", () => {
    atGasto.innerText = `$ ${gastoInvitado.value}`;
});

//Actualizacion de eMail
atCorreo = document.getElementById("atCorreo");
correoInvitado = document.getElementById("correoInvitado");
correoInvitado.addEventListener("input", () => {
    atCorreo.innerHTML = correoInvitado.value;
});

// ----- GUARDADO EN LISTAINVITADOS ----- //
//OBJETO PERSONA

//Constructor:
class Persona {
    constructor(numero, avatar, nombre, item, gasto, correo){
        this.numero = numero;
        this.avatar = avatar;
        this.nombre = nombre;
        this.item = item;
        this.gasto = gasto;
        this.correo = correo;
    }
}
let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", () =>{
    let nuevoInvitado = new Persona(Number(atNumero.innerText), atAvatar.innerHTML, atNombre.innerText, atLleva.innerText, Number(gastoInvitado.value), atCorreo.innerText);
    listaInvitados.push(nuevoInvitado);
    
    //Reseteo de tarjeta
    atNumero.innerText = "N°";
    atAvatar.innerHTML = `<img src="./img/Usuarios/Ninguno.png" alt="tipo de usuario">`;
    atNombre.innerText = "Nombre";
    atLleva.innerText = "Item";
    atGasto.innerHTML = "$ Gasto";
    atCorreo.innerText = "correo@correo.com";
    
    //Reseteo de Formularios
    let formulario = document.getElementById("añadirForm");
    formulario.reset();
});

// ----- SECCION GESTION DE INVITADOS ----- //
//Animacion botones edicion
let contenedorRender = document.getElementById("contenedorRender");
let renderTarjeta = document.getElementById("renderTarjeta");
let editarBotones = document.getElementById("editarBotones");

contenedorRender.addEventListener("click", () => {
    contenedorRender.classList.toggle("scale");
    editarBotones.classList.toggle("display");
});