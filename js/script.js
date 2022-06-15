// Array

const productos = [ // Models
    {id: 1, nombre: 'Niccoló ISIDRO', chasis: 'Merecedes Benz O500 RSD', horas: 138 }, // 
    {id: 2, nombre: 'Niccoló ISIDRO', chasis: 'Scania K400', horas: 140 },
    {id: 3, nombre: 'Niccoló AVANTI', chasis: 'Merecedes Benz M', horas: 112 },
    {id: 4, nombre: 'Niccoló AVANTI', chasis: 'Merecedes Benz O500 RSD', horas: 120 },
    {id: 5, nombre: 'Niccoló AVANTI', chasis: 'Scania K360', horas: 112 },
    {id: 6, nombre: 'Niccoló CENTO', chasis: 'Mercedes Benz OF1721', horas: 100 },
    {id: 7, nombre: 'Niccoló CENTO', chasis: 'Scania K310', horas: 100 },
];

// console.log(productos); // Test

// Object

class Asignaciones {
    constructor(producto) {
        this.id = producto.id; 
        this.nombre = producto.nombre;
        this.chasis = producto.chasis;
        this.horas = producto.horas;
        this.cantidadUnidades = 1;
    }
    sumaUnidades() {
        this.cantidadUnidades += 0;
    }
}

// console.log(Asignaciones); // Test

// Containers
const lineaProduccion = []; // Production Array
let total = 0;

const seleccionModelo = () => { // Product Selection
    let referenciaId = Number(prompt(`## Bienvenido a la carga de Unidades NICCOLÓ ##
    Max 5 unidades:
    1) Niccoló ISIDRO  MB O500RSD
    2) Niccoló ISIDRO  SC K400
    3) Niccoló AVANTI  MB M
    4) Niccoló AVANTI  MB O500RSD
    5) Niccoló AVANTI  SC K360
    6) Niccoló CENTO   MB OF1721
    7) Niccoló CENTO   SC K310 
    `));    

    const buscarId = productos.findIndex(e => e.id === referenciaId);
    console.log(productos[buscarId]);

    lineaProduccion.push(new Asignaciones(productos[buscarId]));
}

// Total
const horasTotales = () => {
    total = lineaProduccion.reduce((acumulador, producto) => acumulador + (producto.horas * producto.cantidadUnidades), 0);

    const fecha = new Date()

    //Devolucion
    let aceptarCarga = prompt(`Se requierieren ${total} horas para completar la producción. ¿Desea confirmar la operacion? `);
    if (aceptarCarga.toUpperCase() === "SI"){
        alert(`### SU CARGA HA SIDO ACEPTADA ###
        La fecha de carga es: ${fecha.toLocaleString()}`)
    }else{
        alert("Su carga ha sido descartada")
    }
}

// Calls
for( i = 0; i < 5; i++){
    seleccionModelo(); 
}
for (let i = 1; i <= lineaProduccion.length; i++) {
    alert(`El producto ${i} fue ${lineaProduccion[i-1].nombre} ${lineaProduccion[i-1].chasis}`);
}

lineaProduccion[0].sumaUnidades();
horasTotales();

//HAKUNAMATATA