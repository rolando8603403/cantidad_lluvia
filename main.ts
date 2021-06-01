let cant_lluvia = 0
let promedio = 0
let numero = 0
let contador = 0
// Entrada booleana cuando se presiona el botón A, muestra la cantidad de agua en 5 años (1825 días)
input.onButtonPressed(Button.A, function () {
    // Se establece la variable "cant_lluvia" (Cantidad de lluvia)
    cant_lluvia = 0
    // Se establece la variable promedio(para almacenar el valor del promedio encontrado)
    promedio = 0
    // Repite 1825 veces las instrucciones dentro del bloque
    for (let index = 0; index < 1825; index++) {
        // Toma un valor aleatorio entre 0 y 6
        cant_lluvia += randint(1, 6)
    }
    // Realiza la división entre dos números
    promedio = cant_lluvia / 1825
    // Se establece la variable número para almacenar el resultado del número aleatorio
    // Toma un valor aleatorio entre 0 y 6
    numero = randint(1, 6)
    // Bloque de decisión para saber cuantas veces cae 2 o menos mm de agua en 5 años
    // Condicional para saber si la condición se cumple
    // Variable número
    if (numero <= 2) {
        // Se inicia una variable llamada "contador" que almacena el registro si se cumple la condición
        contador += 1
    }
    // Muestra el número en pantalla que guarda la variable "promedio"
    // Variable que almacena la cantidad de lluvia
    basic.showNumber(cant_lluvia)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    // Muestra el contenido del contador y nos dice las veces que se ha cumplido la condición del numero de mm de agua menor o igual 2 en 5 años
    basic.showNumber(contador)
})
