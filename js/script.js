//Object Array
const unidades = [ 
    {nombre: "NEW ISIDRO", modelo: "Mercedes Benz O500", asignacion: 1256 }, 
    {nombre: "NEW ISIDRO", modelo: "Scania K400", asignacion: 1256 }, 
    {nombre: "AVANTI", modelo: "Mercedes Benz MR", asignacion: 1256 }, 
    {nombre: "AVANTI", modelo: "Scania K400", asignacion: 1256 }, 
    {nombre: "AVANTI", modelo: "Mercedes Benz O500", asignacion: 1256 }, 
    {nombre: "CENTO", modelo: "Mercedes Benz OF1620", asignacion: 1256 }, 
]
//Object
class Producto{
    constructor(unidad){
        this.nombre = unidad.nombre;
        this.modelo = unidad.modelo;
        this.asignacion = unidad.asignacion;
    }

    asignar() {
        alert(`Se ha asignado ${this.nombre} ${this.modelo} Asignacion: ${this.asignacion} a la linea de Produccion`)
    }
}
//Container
let unidadesAsignadas = [];

let nuevaAsignacion = Number(prompt(`## Bienvenido a la carga de Unidades NICCOLO ##
Ingrese:
0) Cargar New ISIDRO MB.
1) Cargar New ISIDRO SC.
2) Cargar Avanti MB.
3) Cargar Avanti SC.
4) Cargar Avanti 15M.
5) Cargar CENTO MB.
`))

unidadesAsignadas.push(new Producto(unidades[nuevaAsignacion]));
unidadesAsignadas[0].asignar()
