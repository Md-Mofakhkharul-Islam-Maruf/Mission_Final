// Convert to json 
const person = {
    name: 'Maruf Hasan',
    age: 25,
    country: {
        a: 'bangladesh',
        b: 'usa'
    }
}
const jsonData = JSON.stringify(person)
console.log(jsonData)

// Convert to plaindata
const plainData = JSON.parse(jsonData)
console.log(plainData)

//Fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(''))


//object keys find
const keys = Object.keys(person)
console.log(keys)

//Object value find
const values = Object.values(person)
console.log(values)

// insert a new object in existing array
const product = [
    { name: 'maruf', age: 25, status: 'married' },
    { name: 'munna', age: 19, status: 'unmarried' },
    { name: 'muhit', age: 13, status: 'unmarried' }
]
const newProduct = {
    name: 'xyz', age: 50, status: 'single'
}

const finalProduct = [...product, newProduct]
console.log(finalProduct)

const remainingProduct = product.filter(pro=>pro.status ==='married')
console.log(remainingProduct)

const lastProduct =  [...remainingProduct, newProduct]
console.log(lastProduct)