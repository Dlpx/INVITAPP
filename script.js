//MENU DESPLEGABLE
let btnLogo = document.getElementById("logo");
let btnFlechas = document.getElementById("img-boton");
let botonesMenu = document.querySelectorAll(".nav-link");

function menuDesplegable(){
    let desplegable = document.getElementById("desplegable");
    desplegable.classList.toggle("desplegar");

    let navBar = document.getElementById("nav-bar");
    navBar.classList.toggle("ocultar");

    btnFlechas.classList.toggle("rotar180");
}
btnLogo.addEventListener("click", menuDesplegable);
botonesMenu.forEach(elemento => 
    elemento.addEventListener("click", menuDesplegable));

// ----- SECCION AÑADIR INVITADO ----- //
//ARREGLO LISTA INVITADOS
let listaInvitados = [];

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
    //Creo nuevo usuario y lo pusheo
    let nuevoInvitado = new Persona(Number(atNumero.innerText), atAvatar.innerHTML, atNombre.innerText, atLleva.innerText, Number(gastoInvitado.value), atCorreo.innerText);
    listaInvitados.push(nuevoInvitado);
    
        //Creacion de nueva tarjeta
    let contenedorInvitados = document.getElementById("contenedorInvitados");
        //Creamos etiqueta div
    let divContenedor = document.createElement("div");
        //Añadimos Contenido
    divContenedor.innerHTML = `
        <div id="contenedorRender" class="contenedorRender">
            <div id="renderTarjeta" class="renderTarjeta">
                <div id="numero-${nuevoInvitado.numero}" class="num">${nuevoInvitado.numero}</div>
                <div id="avatar-${nuevoInvitado.numero}" class="ava">${nuevoInvitado.avatar}</div>
                <div id="nombre-${nuevoInvitado.numero}" class="nom">${nuevoInvitado.nombre}</div>
                <div id="item-${nuevoInvitado.numero}" class="ite">${nuevoInvitado.item}</div>
                <div id="gasto-${nuevoInvitado.numero}" class="gas">$ ${nuevoInvitado.gasto}</div>
                <div id="correo-${nuevoInvitado.numero}" class="cor">${nuevoInvitado.correo}</div>
            </div>
        </div>
        <div id="editarBotones" class="editarBotones">
            <p id="btnEditAvatar-${nuevoInvitado.numero}" class="btn avatar">Editar Avatar</p>
            <p id="btnEditNombre-${nuevoInvitado.numero}" class="btn nombre">Editar Nombre</p>
            <p id="btnEditItems-${nuevoInvitado.numero}" class="btn items">Editar Items</p>
            <p id="btnEditGastos-${nuevoInvitado.numero}" class="btn gastos">Editar Gastos</p>
            <p id="btnEditCorreo-${nuevoInvitado.numero}" class="btn correo">Editar Correo</p>
        </div>
        `;
   
        //Asigno el padre al hijo
    contenedorInvitados.append(divContenedor);
    
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
while(listaInvitados.length > 0){
    let contenedorRender = document.getElementById("contenedorRender");
    let editarBotones = document.getElementById("editarBotones");
    
    contenedorRender.addEventListener("click", () => {
        contenedorRender.classList.toggle("scale");
        editarBotones.classList.toggle("display");
    });
}