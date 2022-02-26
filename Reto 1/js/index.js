import { getCodeInfo } from "./barcode.js";
import { getDataFromCard } from "./creditCard.js";

function mostrarPantalla() {
    let opcion = prompt("Bienvenido al programa del algoritmo de Luhn \n ¿Que desea hacer?: \n 1.Ingresar numero de tarjeta de credito \n 2.Ingresar codigo de barras \n 3. Salir \n --------------------------------------------------");
    return opcion
}

function programaTarjeta() {
    let numeroTarjeta = prompt("Escriba por favor su numero de tarjeta: ")
    alert(getDataFromCard(numeroTarjeta))
    if (numeroTarjeta.length <= 16 && parseInt(numeroTarjeta)) {
        while (numeroTarjeta.length < 16) {
            numeroTarjeta = "0" + numeroTarjeta
        }
        alert(getDataFromCard(numeroTarjeta))
    }
    if (numeroTarjeta.length > 16 || !parseInt(numeroTarjeta)) {
        alert("El numero de tarjeta ingresado es incorrecto!!")
    }
}

function programaCodigo() {
    let codigoBarras = prompt("Escriba por favor su codigo de barras: ")
    if (codigoBarras.length <= 13 && parseInt(codigoBarras)) {
        while (codigoBarras.length < 13) {
            codigoBarras = "0" + codigoBarras
        }
        alert(getCodeInfo(codigoBarras))
    }
    if (codigoBarras.length > 13 || !parseInt(codigoBarras)) {
        alert("El codigo de barras ingresado es incorrecto!!")
    }
}

let activeProgram = true
while (activeProgram) {
    switch (mostrarPantalla()) {
        case "1":
            programaTarjeta()
            break;
        case "2":
            programaCodigo()
            break;

        case "3":
            activeProgram = false
            break;

        default:
            alert("Entrada invalida")
            mostrarPantalla()
            break;
    }
}