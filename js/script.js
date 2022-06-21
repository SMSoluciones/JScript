// Ingreso
const ingresoCliente = prompt("Porfavor ingrese su nombre")
const cliente = document.getElementById("nombreCliente")
cliente.innerHTML = `¡Bienvenido ${ingresoCliente} al sistema!`;

// Seleccion
const productos = [
    {id: 1, nombre: 'ISIDRO', chasis: 'Merecedes Benz O500 RSD', horas: 138 },
    {id: 2, nombre: 'ISIDRO', chasis: 'Scania K400', horas: 140 },
    {id: 3, nombre: 'AVANTI', chasis: 'Merecedes Benz M', horas: 112 },
    {id: 4, nombre: 'AVANTI', chasis: 'Merecedes Benz O500 RSD', horas: 120 },
    {id: 5, nombre: 'AVANTI', chasis: 'Scania K360', horas: 112 },
    {id: 6, nombre: 'CENTO', chasis: 'Mercedes Benz OF1721', horas: 100 },
    {id: 7, nombre: 'CENTO', chasis: 'Scania K310', horas: 100 },
];

const sugeridos = document.getElementById('desafio');

for (sugerido of productos) {
    const div = document.createElement('div');
    div.innerHTML = `
    <button id="boton-1">${sugerido.nombre} ${sugerido.chasis}</button>`;
    sugeridos.append(div);
}