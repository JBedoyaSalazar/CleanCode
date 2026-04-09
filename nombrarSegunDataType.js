// Arrays

let user = ['Alex', 'Mariana'] //No Recomendado
let userList = ['Alex', 'Mariana'] //Regular
let users = ['Alex', 'Mariana'] //Bueno
let userNames = ['Alex', 'Mariana'] //Excelente -> Dice que es coleccion de nombres de usuarios.

//Boolean siempre usar (is, has, can)
let isValid = true
let hasColorBlue = false
let canEdit = false

//Numbers Prefijos Recomendados -> ( min, max, total )
const maxUsers = 20
const minUsers = 0
let totalUsers = 5

//Functions Recomendado -> Iniciar con verbo seguido de sustantivo
createUser()// -> Recomended
updateUser()// -> Recomended
sendEmail()// -> Recomended

createUserIfNotExist()// ->Not Recomended
updateUserIfNotEmpty()// ->Not Recomended
sendEmailIfIsValid()// ->  Not Recomended

//Funciones con Prefijo
getUser()
setUser()
isValidUser()

//Clases se busca responsabilidades unicas
class Data{}// ->  Not Recomended
class Manager{}// ->  Not Recomended
class Info{}// ->  Not Recomended

class User{}// -> Recomended
class UserProfile{}// -> Recomended
class Account{}// -> Recomended