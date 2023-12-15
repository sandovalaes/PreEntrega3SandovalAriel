//DECLARACION DE CONSTANTES
const SI = "si";
const NO = "no";
const SALIR = "salir";
const ERROR = true;

//DECLARACION DE VARIABLES
let opcionVersion;
let opcionInstalacion;
let nombreVersion; //Almacena el nombre de la versión seleccionada
let nombreInstalacion; //Almacena el nombre del tipo de instalación seleccionada


let version;
let instalacion;
let cantUsu;

let cantidadUsuarios = 0; //Cantidad de usuarios ingresados
let totalPresupuesto = 0; //Importe final del presupuesto

let nombrecompleto; //Nombre ingresado correspondiente a la persona o empresa
let existeError = false; //Flag que indica si hubo error durante el ingreso de datos
let salir; //Flag booleano 
let promocionSeleccionada; //Almacena el objeto de la clase "Plan" obtenido según los datos ingresados

const promociones = []; //Array de objetos de la clase "Plan"
let promosfiltradas; //Array de objetos de la clase "Plan" obtenidos luego de aplicar Filter, según la versión y el tipo de instalación



//Inicialización de array de promociones o planes (objetos de tipo plan)
promociones.push(new Plan("Nube", "Basic", 1, 10, 1500));
promociones.push(new Plan("Nube", "Basic", 11, 20, 1250));
promociones.push(new Plan("Nube", "Basic", 21, 1000, 1000));
promociones.push(new Plan("Local", "Basic", 1, 10, 1300));
promociones.push(new Plan("Local", "Basic", 11, 20, 1100));
promociones.push(new Plan("Local", "Basic", 21, 1000, 900));

promociones.push(new Plan("Nube", "Standard", 1, 10, 1600));
promociones.push(new Plan("Nube", "Standard", 11, 20, 1350));
promociones.push(new Plan("Nube", "Standard", 21, 1000, 1100));
promociones.push(new Plan("Local", "Standard", 1, 10, 1400));
promociones.push(new Plan("Local", "Standard", 11, 20, 1200));
promociones.push(new Plan("Local", "Standard", 21, 1000, 1000));

promociones.push(new Plan("Nube", "Advanced", 1, 10, 1700));
promociones.push(new Plan("Nube", "Advanced", 11, 20, 1450));
promociones.push(new Plan("Nube", "Advanced", 21, 1000, 1200));
promociones.push(new Plan("Local", "Advanced", 1, 10, 1500));
promociones.push(new Plan("Local", "Advanced", 11, 20, 1300));
promociones.push(new Plan("Local", "Advanced", 21, 1000, 1100));


//validaciones de los inputs
nombrecompleto = document.getElementById("IngreseSuNombre");
nombrecompleto.addEventListener('input', () => {
    if (nombrecompleto.value === null || nombrecompleto.value === "") {
        nombrecompleto.classList.remove("is-valid");
        nombrecompleto.classList.add("is-invalid");
    }
    else {
        nombrecompleto.classList.remove("is-invalid");
        nombrecompleto.classList.add("is-valid");
    }
});

version = document.getElementById("VersionDelSistema");
version.addEventListener('click', () => {
    if (version.value === "-") {
        version.classList.remove("is-valid");
        version.classList.add("is-invalid");
    }
    else {
        version.classList.remove("is-invalid");
        version.classList.add("is-valid");
    }
});

instalacion = document.getElementById("Instalacion");
instalacion.addEventListener('click', () => {
    if (instalacion.value === "-") {
        instalacion.classList.remove("is-valid");
        instalacion.classList.add("is-invalid");
    }
    else {
        instalacion.classList.remove("is-invalid");
        instalacion.classList.add("is-valid");
    }
});

cantUsu = document.getElementById("CantDeUsuarios");
cantUsu.addEventListener('input', () => {
    if (cantUsu.value === "") {
        cantUsu.classList.remove("is-valid");
        cantUsu.classList.add("is-invalid");
    }
    else {
        cantUsu.classList.remove("is-invalid");
        cantUsu.classList.add("is-valid");
    }
});


//Codificación donde se captura el evento onclick para comenzar a procesar el presupuesto.
const confirmacion = document.getElementById("confirmar");
confirmacion.addEventListener("click", (e) => {
    e.preventDefault();

    cantidadUsuarios = 0;
    existeError = false;

    //realizo validaciones antes de armar el presupuesto. En caso de error habilito/deshabilito las clases is-valid/is-invalid
    
    debugger;
    nombrecompleto = document.getElementById("IngreseSuNombre");
    if (nombrecompleto.value === null || nombrecompleto.value === "") {
        nombrecompleto.classList.remove("is-valid");
        nombrecompleto.classList.add("is-invalid");
        existeError = true;
    }
    else {
        nombrecompleto.classList.remove("is-invalid");
        nombrecompleto.classList.add("is-valid");
    }

    version = document.getElementById("VersionDelSistema");
    if (version.value === "-") {
        version.classList.remove("is-valid");
        version.classList.add("is-invalid");
        existeError = true;
    }
    else {
        version.classList.remove("is-invalid");
        version.classList.add("is-valid");
    }

    instalacion = document.getElementById("Instalacion");
    if (instalacion.value === "-") {
        instalacion.classList.remove("is-valid");
        instalacion.classList.add("is-invalid");
        existeError = true;
    }
    else {
        instalacion.classList.remove("is-invalid");
        instalacion.classList.add("is-valid");
    }

    cantUsu = document.getElementById("CantDeUsuarios");
    
    if (cantUsu.value === null || cantUsu.value === "") {
        cantUsu.classList.remove("is-valid");
        cantUsu.classList.add("is-invalid");
        existeError = true;
    }
    else {
        cantUsu.classList.remove("is-invalid");
        cantUsu.classList.add("is-valid");
    }

    if (existeError) {
        alert('Los datos ingresados son erroneos. Por favor, complete correctamente los datos.');
    } else {
        nombreVersion = version.value;
        nombreInstalacion = instalacion.value;
        cantidadUsuarios = cantUsu.value;

        promosfiltradas = promociones.filter((item) => item.instalacion === nombreInstalacion && item.nombreversion === nombreVersion);
        promocionSeleccionada = promosfiltradas.find((item) => cantidadUsuarios >= item.cant_usu_minimo && cantidadUsuarios <= item.cant_usu_maximo);
        let importePlan = promocionSeleccionada.importe;
        totalPresupuesto = importePlan * cantidadUsuarios;

        console.log(totalPresupuesto);
        alert(`La cotización obtenida es la siguiente: \n Versión: ${nombreVersion}\n Tipo de Instalación: ${nombreInstalacion}\n Cantidad de Usuarios: ${cantidadUsuarios}\n Costo Licencia: $${promocionSeleccionada.importe} \n Importe Presupuesto: $${totalPresupuesto}\n`);
    
        let presupuesto = new Presupuesto(nombrecompleto.value,nombreInstalacion,nombreVersion,cantidadUsuarios,promocionSeleccionada.importe,totalPresupuesto);
        let presupuestoJSON = JSON.stringify(presupuesto);
        localStorage.setItem("presupuesto:" + nombrecompleto,  presupuestoJSON);
    }

});








