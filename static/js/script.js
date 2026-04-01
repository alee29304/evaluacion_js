//Ejercicio n°1
function registroPagos() {
    const input = document.getElementById("input1");
    const result = document.getElementById("resultado1")
    const container = document.getElementById("container1");
    let monto = parseFloat(input.value);
    let descuento = pagoPermiso(monto)
    result.textContent = descuento;
    input.value = "";
    container.classList.remove("d-none");
};

function pagoPermiso(monto) {
    if (monto >= 70000) {
        return `El total con descuento es de $ ${monto * 15 / 100}`
    } else {
        return `El total con descuento es de $ ${monto * 5 / 100}`
    }
};

//Ejercicio n°2
let fila = [];
function agregarLista(nombre) {
    fila.push(nombre);
    return fila.join(", ");
};

function listaVacunacion1() {
    const container = document.getElementById("container2");
    const result = document.getElementById("resultado2");
    const input = document.getElementById("input2");
    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarLista(nombre);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("No puede estar vacío");
    };
}

let fila2 = fila
function agregarUrgencia(nombre) {
    fila2.unshift(nombre);
    return fila2.join(", ");
};

function listaVacunacion2() {
    const container = document.getElementById("container2");
    const result = document.getElementById("resultado2");
    const input = document.getElementById("input2");
    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarUrgencia(nombre);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("No puede estar vacío");
    };
};

//Ejercicio n°3
let buscaNombres = ["Manuel", "16.807.233-1", "Jorge", "Victor", "Enrique", "Roberto"];

function buscarBeneficio(codigo) {
    let mensaje = "Ingrese su rut o nombre";
    for (let i = 0; i < buscaNombres.length; i++) {
        if (codigo == buscaNombres[i]) {

            mensaje = "Beneficiario verificado"
            return "Beneficiario verificado";
        } else {
            mensaje = ("No registrado")

        }
    }
    return mensaje
}

function verificarBeneficio() {
    let input = document.getElementById("input3");
    let codigo = input.value;
    const result = document.getElementById("resultado3")
    const container = document.getElementById("container3");
    let resultado = buscarBeneficio(codigo);
    result.textContent = resultado;
    result.value = "";
    container.classList.remove("d-none")
}