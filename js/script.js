// Formulario de Ingreso

//Funciones

registroLogin = [];

const usuarioIngresado = () => {
  ingreso.style.display = "none";
  login.innerHTML = `<h2>¡Bienvenido al sistema ${nombreDeUsuario} ${apellidoDeUsuario} su legajo es ${legajoDeUsuario}!</h2>`;

  registroLogin.push(legajoDeUsuario);
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
});

if (!!nombreDeUsuario && !!apellidoDeUsuario && !!legajoDeUsuario) {
  usuarioIngresado();
}

// Lista de Productos.

const modelos = [
  {
    id: 1,
    modelo: "ISIDRO",
    chasis: "Mercedes Benz O500",
    image: "Imagen1",
  },
  {
    id: 2,
    modelo: "ISIDRO",
    chasis: "Scania K400",
    image: "Imagen2",
  },
  {
    id: 3,
    modelo: "AVANTI",
    chasis: "Mercedes Benz M",
    image: "Imagen3",
  },
  {
    id: 4,
    modelo: "AVANTI 15M",
    chasis: "Mercedes Benz O500",
    image: "Imagen4",
  },
  {
    id: 5,
    modelo: "CENTO",
    chasis: "Mercedes Benz OF1721",
    image: "Imagen4",
  },
];

// Unidad Cargada

const unidadCargada = [];

// Seleccion de contenedor
const contenedorModelos = document.getElementById("modelo");
const chasisCargados = document.getElementById("chasisCargados");

// Insercion de Lista

for (const producto of modelos) {
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
  // Product Storage
  localStorage.setItem("unidadesCargadas", JSON.stringify(producto));
  const traerJSON = localStorage.getItem("unidadesCargadas");
  // console.log(traerJSON); // Me devuelve un String.

  const traerArrayJson = JSON.parse(traerJSON);
  console.log(traerArrayJson); // Me devuelve un Array de objetos.
};
