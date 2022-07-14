// Formulario de Ingreso

//Funciones

registroLogin = [];

const registroUsuarios = () => {
  localStorage.setItem("usuariosIngresados", JSON.stringify(registroLogin));
};

const usuarioIngresado = () => {
  ingreso.style.display = "none";

  if (
    nombreDeUsuario == "" &&
    apellidoDeUsuario == "" &&
    legajoDeUsuario == ""
  ) {
    login.innerHTML = `<h2>¡Bienvenido Invitado!</h2>`;

    // Sweet Invitado
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "question",
      title: "Ingreso como invitado",
    });
  } else {
    login.innerHTML = `<h2>¡Bienvenido al sistema ${nombreDeUsuario} ${apellidoDeUsuario} su legajo es ${legajoDeUsuario}!</h2>`;
    registroLogin.push(legajoDeUsuario);

    // Sweet Success
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "Ingreso Correcto",
    });
  }
  registroUsuarios();
};

// Variables Storage

let nombreDeUsuario = sessionStorage.getItem("nombreDeUsuario");
let apellidoDeUsuario = sessionStorage.getItem("apellidoDeUsuario");
let legajoDeUsuario = sessionStorage.getItem("legajoDeUsuario");

//Referenciacion DOM
const formulario = document.getElementById("form");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const legajo = document.getElementById("legajo");
const ingreso = document.querySelector(".ingreso");
const login = document.getElementById("login");

// Click Submit

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  nombreDeUsuario = nombre.value;
  apellidoDeUsuario = apellido.value;
  legajoDeUsuario = legajo.value;

  sessionStorage.setItem("nombreDeUsuario", nombre.value);
  sessionStorage.setItem("apellidoDeUsuario", apellido.value);
  sessionStorage.setItem("legajoDeUsuario", legajo.value);

  usuarioIngresado();

  // Libreria
});

// Operador AND >>>> ENTREGA OPTIMIZANDO
!!nombreDeUsuario &&
  !!apellidoDeUsuario &&
  !!legajoDeUsuario &&
  usuarioIngresado();


// Seleccion de contenedor
const contenedorModelos = document.getElementById("modelo");
const chasisCargados = document.getElementById("chasisCargados");
const botonContinuar = document.querySelector(".botonSeguir");
const masVendido = document.querySelector(".masVendido");
const seguirAceptar = document.querySelector("#continuarBoton");


// Unidad Cargada

const unidadCargada = [];


// Insertar Productos AJAX DESAFIO

const insertarProductosAJAX = () => {
  fetch("./js/productos.json").then(respuesta => respuesta.json()).then(resultados => {
    // console.log(resultados) // Prueba
    for (const producto of resultados) {
      let contenedor = document.createElement("div");
      contenedor.className = "producto-modelos";
      contenedor.innerHTML = `
    <button><div class="descripcion-producto">
    <p> ${producto.modelo}</p>
    ${producto.chasis}
    </div></button>`;

      contenedor.onclick = () => {
        colocarModelo(producto);
        unidadCargada.push(producto);
      };

      contenedorModelos.append(contenedor);
    }
  })
}

insertarProductosAJAX()

// Insercion en Box

const boxModelos = document.getElementById("eModelo");
const contenedorPlano = document.getElementById("imagen-producto");

const colocarModelo = (producto) => {
  const contenedor = document.createElement("div");
  contenedor.innerHTML = `
  <div id="ejemplo1" class="descripcion-producto">
  <p>${producto.modelo}</p>
  <p>${producto.chasis}</p>
  </div>`;

  boxModelos.append(contenedor);

  // Esconder botonera //>>>> ENTREGA OPTIMIZANDO
  unidadCargada.length <= 1
    ? (contenedorModelos.style.display = "none") &&
      (botonContinuar.style.display = "flex")
    : (botonContinuar.style.display = "none"); // Product Storage

  localStorage.setItem("unidadesCargadas", JSON.stringify(producto));
  const traerJSON = localStorage.getItem("unidadesCargadas");
  // console.log(traerJSON); // Me devuelve un String.

  const traerArrayJson = JSON.parse(traerJSON);
  console.log(traerArrayJson); // Me devuelve un Array de objetos.
};

seguirAceptar.addEventListener("click", () => {
  Swal.fire("Producto cargado", " ", "success");
});
