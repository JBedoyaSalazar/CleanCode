//Declaracion de funciones

function getResult() {
    return 'results'
}

console.log(`Ejemplo primario, resultado: ${getResult()}`)

//Expresion de funciones 
const getResults = () => {
    return 'results arrow function'
}


function getDouble (number){
    return number * 2
}

console.log(`El doble de 10 es: ${getDouble(10)}`)

//Parametro por defecto
function greet(person = 'unknown'){
    console.log(`Hi ${person}`)
}

greet()

//spreed Op

function add(x,y,...args){
    console.log(args)
}

add(1,2,3,4,5)

const course = {
    title:'none',
    console: 'none'
}

const courseCloned = {
    ...course,
    date: '2026/04/9'
}

console.log(courseCloned)