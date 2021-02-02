// Falsy:
// false
// 0
// ""
// undefined
// null
// NaN

// truthy:
// '0'
// ' '(white space in a string)
// [] (any kind of array)
let name = 0;

if(name || name == 0){
    console.log('Condition is true');
}
else{
    console.log('condition is not true');
}