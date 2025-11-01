//Template string
const firstName = "Maruf"
const lastName = "Hasan"
console.log(`My name is ${firstName} ${lastName}`)

//Arrow function 
const sum = (a,b) => a+b
console.log(sum(8,6))

// Spread operator
const number = [1,5,9,6,4,7,3]
const newNumbers = [100,65,98,36]
const finalNumber = [...newNumbers,...number]
console.log(finalNumber)

