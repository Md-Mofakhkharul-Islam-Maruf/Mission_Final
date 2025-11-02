const handleAddtoStorage = () =>{
    const id = document.getElementById('id').value 
    const name = document.getElementById('name').value 
    // console.log(id, name)
    // localStorage.setItem(id, name)

    const data ={id, name}
    console.log(data)
    localStorage.setItem(id, JSON.stringify(data))
}
const storedItem = localStorage.getItem('101')
console.log(JSON.parse(storedItem))

const handleClear = () =>{
    localStorage.clear()
}