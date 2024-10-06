function compareTenAndNine() {
    console.log(10 >= 9);
}

function compareZeroAndZero() {
    console.log(0 === 0);
}

function compareSeven() {
    console.log(7 > 8 && 7 < 10);
}

function canBuyProduct() {
    const precioConDescuento = 1500 * 0.75;
    console.log(1150 >= precioConDescuento);
}

function createMessageVariable() {
    let mensaje = "Hola JavaScript";
    console.log(mensaje);
}

function createSumVariable() {
    let resultado = 2 + 3;
    console.log(resultado);
}

function createDisabledConstant() {
    const IS_DISABLED = true;
    console.log(IS_DISABLED);
}

function createNullVariable() {
    let capacidad = null;
    console.log(capacidad);
}

function createUndefinedVariable() {
    let dinero;
    console.log(dinero);
}

function checkUserNameType() {
    let userName = "John";
    console.log(typeof userName);
}

function checkDogIdIsString() {
    let dogId = String(12345);
    console.log(typeof dogId);
}

function logMessage() {
    console.log("Este es un mensaje de ejemplo.");
}

function logAge() {
    let edad = 30;
    console.log(edad);
}

function logVersion() {
    let version = 2024;
    console.log("La versión de JavaScript es " + version);
}

module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};