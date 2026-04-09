// Uso de var

var age = 28

{
    console.log(`Valor dentro del bloque ${age}`)
    age = 29
}

console.log(`Valor fuera del bloque ${age}`)

age *= 2
console.log(`Valor cambiado ${age}`)