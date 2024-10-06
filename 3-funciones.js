// 1. Tu primera función
function despedir() {
    console.log("Adiós");
}

function multiplicarPorDos(numero) {
    return numero * 2;
}

function esMayorDeEdad(edad) {
    return edad > 18;
}

// 2. Parámetros
function multiplicar(a, b) {
    return a * b;
}

function saludarPersonalizado(nombre, apellido) {
    return `Hola, ${nombre} ${apellido}`;
}

function calcularPotencia(base, exponente) {
    return Math.pow(base, exponente);
}

function restar(a, b) {
    return a - b;
}

function dividir(a, b) {
    return a / b;
}

// 3. Function Expression
const multiplicarDOS = function(a, b) {
    return a * b;
};

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
};

const esPar = function(numero) {
    return numero % 2 === 0;
};

// 4. Funciones Flecha
const multiplicarFlecha = (a, b) => a * b;

const saludarFlecha = nombre => `Hola ${nombre}`;

const calcularArea = radio => Math.PI * radio * radio;

// 5. Recursividad
function suma(n) {
    if (n === 0) {
        return 0;
    }
    return n + suma(n - 1);
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    return base * potencia(base, exponente - 1);
}

// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    multiplicarDOS,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};