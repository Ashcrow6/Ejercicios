function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

function clasificarEdad(edad) {
    if (edad < 18) {
        console.log("Menor de edad");
    } else if (edad <= 65) {
        console.log("Adulto");
    } else {
        console.log("Adulto mayor");
    }
}

function cuentaRegresiva(numero) {
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}

function repetirMensaje() {
    let contador = 0;
    do {
        console.log("Estoy aprendiendo JavaScript");
        contador++;
    } while (contador < 5);
}

function imprimirPares(numero) {
    for (let i = 0; i <= numero; i += 2) {
        console.log(i);
    }
}

function detenerEnSeis() {
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            break;
        }
        console.log(i);
    }
}

function saltarCinco() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
    }
}

function obtenerDiaSemana(dia) {
    switch (dia) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Día inválido";
    }
}

function esVocal(letra) {
    switch (letra.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return "Es una vocal";
        default:
            return "No es una vocal";
    }
}

function evaluarNumeros(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        console.log("Todos son positivos");
    } else if (a < 0 || b < 0 || c < 0) {
        console.log("Al menos uno es negativo");
    } else {
        console.log("Todos son negativos");
    }
}

export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};