// Uso de var trabaja siempre de forma global

console.log('---------------------------------')
console.log('          USO DE VAR            ')
console.log('---------------------------------')

var age = 28

{
    console.log(`Valor dentro del bloque ${age}`) //28
    age = 29
}

console.log(`Valor fuera del bloque ${age}`) //29

age *= 2
console.log(`Valor cambiado ${age}`) //58

//uso de let

console.log('---------------------------------')
console.log('          USO DE LET             ')
console.log('---------------------------------')

let ageSecondExample = 28

{
    console.log('Valor dentro del bloque', ageSecondExample) //error
    let ageSecondExample = 29 //definir antes del console.log
}

console.log('Valor fuera del bloque', ageSecondExample) //29

ageSecondExample *= 2
console.log('Valor cambiado', ageSecondExample) //58

console.log('---------------------------------')
console.log('          USO DE CONST             ')
console.log('---------------------------------')

const PI = 3.1416
console.log(`PI: ${PI}`)