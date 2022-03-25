//Ejercicio 1 Numeros impares
console.log('Numeros impares entre 2 y 10')
let numeros = [2,3,4,5,6,7,8,9,10];
let numerosImpar = numeros.filter( function (item) {
    return item % 2 === 1;
});
console.log(numerosImpar);
console.log('')

//Ejercicio 2 Multiplicar nuemero
// Tabla del 5
console.log('Tabla del 5')
let por = [1,2,3,4,5,6,7,8,9,10];
let tabla = []
por.forEach ( function (item) {
    tabla.push( item * 5 )
})
console.log(tabla)
console.log('')
// Tabla del 9
console.log('Tabla del 9')
tabla = []
por.forEach ( function (item) {
    tabla.push( item * 9)
})
console.log(tabla)
console.log('')


//Ejercicio Ordenar y mostrar un array
console.log('ordenar los arrays')
let paraOrdenar = [1,2,45,5,6,3,1,8]
paraOrdenar.sort( function (a,b) {
    return (a - b)
})
console.log(paraOrdenar)
paraOrdenar = [100,5,5,8,3,7,8]
paraOrdenar.sort( function (a,b) {
    return (a - b)
})
console.log(paraOrdenar)

