// Array destracturing
const name = ['maruf', 'munna', 'muhit']
console.log(name)
const [big, medium, small] = name
console.log(small, medium, big)


// object destracturing
const person = {
    name: 'Maruf Hasan',
    age: 25,
    country: 'bangladesh'
}
const {age, country} = person
console.log(country)