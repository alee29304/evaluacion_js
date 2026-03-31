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
    fila.unshift(urgencia);
    return fila.join(", ");
};

function listaVacunacion() {
    const container = document.getElementById("container1");
    const result = document.getElementById("resultado1");
    const input = document.getElementById("input1");
    let nombre = input.value;
    let urgencia = a;
    let resultado = agregarLista(nombre);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
};