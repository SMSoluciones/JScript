let nombreIngreso = prompt("Ingrese su nombre su nombre completo:");
let listaDeUnidades = 0;
let unidades = 0;
const YEAR = 2022;
const MONTHS = 12;

do {
    let listaDeUnidades = Number(prompt("Ingrese cantidad de vehiculos fabricados este año."));
    if (listaDeUnidades == ""){
        alert(`${nombreIngreso} no ingresaste ninguna cantidad`);
    }else if (listaDeUnidades !== "") {
        unidades = unidades + listaDeUnidades;
        alert(`Las unidades cargadas son las siguientes: ${unidades}`);
    }
}while (confirm("¿Desea seguir cargando datos? Presione CANCELAR si desea finalizar."));

alert (`${nombreIngreso} cargo un total de: ${unidades} unidades correspondientes al año ${YEAR}`);

let promedioAnual = unidades / MONTHS;
alert (`Usted produce por el momento un promedio de: ${promedioAnual.toFixed(2)} unidades por mes.`);