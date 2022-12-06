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
let listaInvitados = JSON.parse(localStorage.getItem("listaInvitados"));

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

//Actualizacion nombre y numero
nombreInvitado = document.getElementById("nombreInvitado");
nombreInvitado.addEventListener("input", () => {
    listaInvitados != null ? numeroActualizado = listaInvitados.length + 1 : numeroActualizado = 1;
    
    atNumero = document.getElementById("atNumero");
    atNumero.innerText=parseInt(numeroActualizado);
    atNombre = document.getElementById("atNombre");
    atNombre.innerText="";
    atNombre.innerText=nombreInvitado.value;
});

//actualizacion AVATAR
avatarInvitado = document.getElementById("avatarInvitado");
avatarInvitado.addEventListener("change", () => {
    let avatar = avatarInvitado.options[avatarInvitado.selectedIndex].text;
    atAvatar = document.getElementById("atAvatar");
    atAvatar.innerHTML=`<img src="./img/Usuarios/${avatar}.png" alt="tipo de usuario">`;
});

// SECCION AÑADIR GASTOS
let gastos = [];
class gasto {
    constructor(id, item, costo){
        this.id = id;
        this.item = item;
        this.costo = costo;
    }
}

const btnNuevoGasto = document.getElementById("btnNuevoGasto");
btnNuevoGasto.addEventListener("click", () => {
    // Genero ID del gasto
    let id = gastos.length + 1;
    // Genero item
    llevaInvitado = document.getElementById("llevaInvitado");
    // Guardo el costo
    gastoInvitado = document.getElementById("gastoInvitado");
    // CREO Y ALMACENO EL OBJETO GASTO EN ARRAY GASTOS
    let nuevoGasto = new gasto (id, llevaInvitado.value, Number(gastoInvitado.value));
    gastos.push(nuevoGasto);

    atLleva = document.getElementById("atLleva");
    let li = document.createElement("li");
    li.className = "llevaItem";
    li.innerHTML = `${llevaInvitado.value}`;
    atLleva.append(li);

    atGasto = document.getElementById("atGasto");
    let gastoActual = 0;
    gastos.forEach(gasto => {
        gastoActual += gasto.costo;
    });
    atGasto.innerHTML = `$ ${gastoActual}`;

    // Reset Item y Costo
    llevaInvitado.value = ``;
    gastoInvitado.value = ``;

})



// //Actualizacion de ITEM
// llevaInvitado = document.getElementById("llevaInvitado");
// atLleva = document.getElementById("atLleva");
// llevaInvitado.addEventListener("input", () =>{
//     atLleva.innerText = llevaInvitado.value;
// });

// //Actualizacion de GASTO
// atGasto = document.getElementById("atGasto");
// gastoInvitado = document.getElementById("gastoInvitado");
// gastoInvitado.addEventListener("input", () => {
//     atGasto.innerText = `$ ${gastoInvitado.value}`;
// });

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
// BOTON y ACCIONES
let btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", () =>{
        // CALCULAR GASTOS DEL INVITADO
    let gastoTotalInvitado = 0;
    gastos.forEach(gasto => {
        gastoTotalInvitado += gasto.costo;
    });
        //Creo nuevo usuario y lo pusheo
    let invitadoNuevo = new Persona(Number(atNumero.innerText), atAvatar.innerHTML, atNombre.innerText, atLleva.innerHTML, Number(gastoTotalInvitado), atCorreo.innerText);
        //Comprobar LS     
    if(localStorage.getItem("listaInvitados") == null){
        localStorage.setItem("listaInvitados", "[]");
    }
        //CODIGO REPETIDO... (linea 21)
    listaInvitados = JSON.parse(localStorage.getItem("listaInvitados"));
        //Pusheo el invitado
    listaInvitados.push(invitadoNuevo);
        //Guardado en LS
    localStorage.setItem("listaInvitados", JSON.stringify(listaInvitados));


        //Creacion de nueva tarjeta
    let contenedorInvitados = document.getElementById("contenedorInvitados");
        //Creamos etiqueta div
    let divContenedor = document.createElement("div");
        //Añadimos Contenido
    divContenedor.innerHTML = `
        <div id="contenedorRender" class="contenedorRender">
            <div id="renderTarjeta" class="renderTarjeta">
                <div id="numero-${invitadoNuevo.numero}" class="num">${invitadoNuevo.numero}</div>
                <div id="avatar-${invitadoNuevo.numero}" class="ava">${invitadoNuevo.avatar}</div>
                <div id="nombre-${invitadoNuevo.numero}" class="nom">${invitadoNuevo.nombre}</div>
                <div id="item-${invitadoNuevo.numero}" class="ite">${invitadoNuevo.item}</div>
                <div id="gasto-${invitadoNuevo.numero}" class="gas">$ ${invitadoNuevo.gasto}</div>
                <div id="correo-${invitadoNuevo.numero}" class="cor">${invitadoNuevo.correo}</div>
            </div>
        </div>
        `;
        // Saque los botones temporalmente..
        // <div id="editarBotones" class="editarBotones">
        //     <p id="btnEditAvatar-${invitadoNuevo.numero}" class="btn avatar">Editar Avatar</p>
        //     <p id="btnEditNombre-${invitadoNuevo.numero}" class="btn nombre">Editar Nombre</p>
        //     <p id="btnEditItems-${invitadoNuevo.numero}" class="btn items">Editar Items</p>
        //     <p id="btnEditGastos-${invitadoNuevo.numero}" class="btn gastos">Editar Gastos</p>
        //     <p id="btnEditCorreo-${invitadoNuevo.numero}" class="btn correo">Editar Correo</p>
        // </div>

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

        //SWEETALERT
        Swal.fire({
            icon: 'success',
            title: 'PERFECTO',
            text: 'Invitado añadido correctamente',
          });
});

//Boton de limpiar LS
let btnLimpiarLS = document.getElementById("btnLimpiarLS");
btnLimpiarLS.addEventListener("click", () => {
    localStorage.clear();
    listaInvitados = JSON.parse(localStorage.getItem("listaInvitados"));
    let contenedorInvitados = document.getElementById("contenedorInvitados");
    let hijos = document.querySelectorAll(".contenedorInvitados div");
    hijos.forEach(hijo => {
        contenedorInvitados.remove(hijo);
    });
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Los invitados se fueron',
        showConfirmButton: false,
        timer: 2000
      })
});

// ----- SECCION GESTION DE INVITADOS ----- //


// ----- AL CARGAR LA PAGINA ----- //

window.addEventListener("DOMContentLoaded", () => {
    if(listaInvitados != null){
        //MOSTRAR SECCION


        //RENDERIZAR TARJETAS DEL LStorage
        listaInvitados.forEach(invitado => {
            //Creacion de nueva tarjeta
        let contenedorInvitados = document.getElementById("contenedorInvitados");
            //Creamos etiqueta div
        let divContenedor = document.createElement("div");
            //Añadimos Contenido
        divContenedor.innerHTML = `
            <div id="contenedorRender" class="contenedorRender">
                <div id="renderTarjeta" class="renderTarjeta">
                    <div id="numero-${invitado.numero}" class="num">${invitado.numero}</div>
                    <div id="avatar-${invitado.numero}" class="ava">${invitado.avatar}</div>
                    <div id="nombre-${invitado.numero}" class="nom">${invitado.nombre}</div>
                    <div id="item-${invitado.numero}" class="ite">${invitado.item}</div>
                    <div id="gasto-${invitado.numero}" class="gas">$ ${invitado.gasto}</div>
                    <div id="correo-${invitado.numero}" class="cor">${invitado.correo}</div>
                </div>
            </div>
            `;
            // Saque los botones temporalmente..
            // <div id="editarBotones" class="editarBotones">
            //     <p id="btnEditAvatar-${invitado.numero}" class="btn avatar">Editar Avatar</p>
            //     <p id="btnEditNombre-${invitado.numero}" class="btn nombre">Editar Nombre</p>
            //     <p id="btnEditItems-${invitado.numero}" class="btn items">Editar Items</p>
            //     <p id="btnEditGastos-${invitado.numero}" class="btn gastos">Editar Gastos</p>
            //     <p id="btnEditCorreo-${invitado.numero}" class="btn correo">Editar Correo</p>
            // </div>

                //Asigno el padre al hijo
            contenedorInvitados.append(divContenedor);

                });
    }
  });