// Truthy value
// true
// 'false'  // non-empty string
// 1, -1, 100
// []       // empty array
// {}       // empty object
// function(){}  // function

const test = {}
test?console.log('truthy'): console.log('falsy')


// Falsy value 
// false
//0
// ''       // empty string
// null
// undefined
// NaN

const test2 = 0
''?console.log('truthy'): console.log('falsy')


const status = false
const showUser = () => console.log("Show the user")
const hideUser = () => console.log('Hide the user')
status? showUser() : hideUser()

// shorthand of true false
status && showUser()
status || hideUser()

// String to number 
const str = '10'
console.log(typeof(str))
console.log(parseInt(str))


// number to string 
const num = 20
console.log(typeof(num))
console.log(String(num))

// Typequartion