//Ejercicio n°1
function registroPagos() {
    const input = document.getElementById("input1");
    const result = document.getElementById("resultado1")
    const container = document.getElementById("container1");
    let monto = parseInt(input.value);
    let descuento1 = 70000 * 15 / 100;
    let descuento2 = 70000 * 5 / 100;
    let total = pagoPermiso(monto)
    result.textContent = total;
    input.value = "";
    container.classList.remove("d-none");
};

function pagoPermiso(monto) {
    if (monto > 70000) {
        return descuento1;
    } else if (monto < 70000) {
        return descuento2;
    } else {
        return `El total a pagar es de ${total}`
    }
};