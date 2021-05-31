let cant_lluvia = 0
let promedio = 0
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
    // Muestra el número en pantalla que guarda la variable "promedio"
    basic.showNumber(cant_lluvia)
})
