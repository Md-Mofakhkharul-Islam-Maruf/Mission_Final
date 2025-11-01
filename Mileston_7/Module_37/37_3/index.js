const products = [
    { name: 'redmi', price: 6000, color: 'blue' },
    { name: 'samsung', price: 5000, color: 'black' },
    { name: 'vivo', price: 1000, color: 'maroon'},
    { name: 'oppo', price: 3000, color: 'golden'}]

// array map
const mapResult = products.map(product=>product.name)
console.log(mapResult)

// array Filter
const filterResult = products.filter(product=>product.price<=5000)
console.log(filterResult)

// array find
const findResult = products.find(product=>product.name==='vivo')
console.log(findResult)