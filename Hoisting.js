greet()

function greet(){
    let greeting = 'Hello World'
    console.log(greeting)
}

var greet = 'Hello'

    //Funcion autoinvocada, no debe llamarse para ejecutarse
    (
        function () {
            console.log(greet)
            var greet = 'Hi'
            console.log(greet)
        }
    )()

// El hoisting autoDeclara pero no asigna