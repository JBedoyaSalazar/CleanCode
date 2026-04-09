// 1. Nombres pronunciables y expresivos


// No recomendado
const yyyymmdstr = moment().format("YYYY/MM/DD");

// Recomendado
const currentDate = moment().format("YYYY/MM/DD");

// 2. Ausencia de información técnica en los nombres


// No recomendado
class AbstractUser {}
let arrayNames = ['alex', 'maria']

// Recomendado
class User {}
let nameList = ['alex', 'maria']

// 3. Establecer un lenguaje ubicuo


// No recomendado
getUserInfo();
getClientData();
getCustomerRecord();

// Recomendado
getUser();