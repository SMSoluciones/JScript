//SISTEMA DE CARGA NICCOLÓ

//Variable

let nombreEmpresa = "";
let cantUnidades = 0;
let numeroDeChasis = "";
let distribucionAsientos = "";
let modelo = "";
let asignacionInterna = 1254; //>>>> Este dato deberia proveerlo un Backend pero asigno el actual para jugar un poco.

//FUNCTIONS

const empresa = () => {
    do{
        nombreEmpresa = prompt("Porfavor ingrese el nombre del cliente");
        cantUnidades = prompt ("Porfavor ingrese la cantidad de unidades a fabricar");
    }while(!isNaN(nombreEmpresa) && typeof cantUnidades !== "Numero" )

    let preguntaCU = prompt(`¿Desea cargar ${cantUnidades} unidades para la empresa ${nombreEmpresa}?`)
    
    if (preguntaCU == "Si" || preguntaCU == "si"){
        alert("## Cliente cargado ##")
    }else{
        nombreEmpresa = "STOCK"
        cantUnidades = 1;
    alert(`## Cliente cargado como ${nombreEmpresa}, se realizaran ${cantUnidades} unidad/es. ##`)
    }
    console.log(nombreEmpresa + cantUnidades);
}

// empresa(); //TEST

const chasis = () => {

    numeroDeChasis = prompt("Ingrese el numero de chasis asignado.");
    let preguntaNchasis = prompt(`¿El numero de chasis asignado es: ${numeroDeChasis.toUpperCase()}?`);
    if (preguntaNchasis == "si" || preguntaNchasis == "Si"){
        preguntaNchasis == numeroDeChasis;
        alert(`El numero de chasis asignado es: ${numeroDeChasis.toUpperCase()} `);
    }else{
        alert(`Vuelva a cargar el numero. Su numero se asignara como: INDEFINIDO`)
        numeroDeChasis = "INDEFINIDO";
    }
    console.log(numeroDeChasis);
}

// chasis(); //TEST

const seleccionModelo = () =>{
    let opcionesModelos = Number(prompt(`Ingrese el numero del modelo que desea seleccionar: 
        1) NEW ISIDRO
        2) AVANTI
        3) CENTO
    `))
    if (opcionesModelos === 1){
        modelo = "NEW ISIDRO";
        alert(`¡Se asigno ${modelo} como el modelo elegido!`)
    }
    else if (opcionesModelos === 2){
        modelo = "AVANTI" ;
        alert(`¡Se asigno ${modelo} como el modelo elegido!`)
    }
    else if (opcionesModelos === 3){
        modelo = "CENTO" ;
        alert(`¡Se asigno ${modelo} como el modelo elegido!`)}
    else{
        alert("No ha ingresado ningun modelo")
    }
    console.log(modelo)
}

// seleccionModelo(); //TEST

const seleccionDistribucion = () => {
    let opcionesDistribucion = Number(prompt(`
    ## Ingrese distribucion de asientos ##

    1) 48 Semicama + 12 Ejecutivo MIX
    2) 63 Semicama
    3) 48 Comunes
    4) 50 Comunes
    5) 53 Comunes (Sin Baño)
    `))
    switch(opcionesDistribucion){
        case 1:{
            distribucionAsientos = "48 Semicama + 12 Ejecutivo MIX"
            break;
        }
        case 2:{
            distribucionAsientos = "63 Semicama"
            break;
        }
        case 3:{
            distribucionAsientos = "48 Comunes"
            break;
        }
        case 4:{
            distribucionAsientos = "50 Comunes"
            break;
        }
        case 5:{
            distribucionAsientos = "53 Comunes (Sin Baño)"
            break;
        }
    }
    console.log(distribucionAsientos);
}

// seleccionDistribucion(); //Probar

//END FUNCTIONS

do{
    aplicacion = Number(prompt(`
    ## Bienvenidos al sistema de carga NICCOLÓ ##
    1- Asignacion de empresa y unidades.
    2- Asignacion de chasis.
    3- Asignacion de modelo.
    4- Asignacion de asientos.
    5- Terminar
    `))

    switch (aplicacion) {
        case 1: {
            empresa();
            break;
        }
        case 2: {
            chasis();
            break;
        }
        case 3: {
            seleccionModelo();
            break;
        }
        case 4: {
            seleccionDistribucion();
            break;
        }

    }
}while (aplicacion !== 5);

alert(`
## Su seleccion fue la siguiente ##
Empresa: ${nombreEmpresa}
Cantidad de Unidades: ${cantUnidades}
Numero de chasis: ${numeroDeChasis}
Modelo: ${modelo}
Distribución: ${distribucionAsientos}
Numero de asignación: ${asignacionInterna+1}
`)

//HAKUNAMATATA