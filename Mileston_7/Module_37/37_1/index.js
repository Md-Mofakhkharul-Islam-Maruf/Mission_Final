const students = ['Maruf', 'Munna', 'Muhit']

//length
console.log(students.length)

// array push
students.push('Kholil')
console.log(students)

// array pop
students.pop()
console.log(students)

// array unshift
students.unshift('Mehedi')
console.log(students)

// array shift
students.shift()
console.log(students)

// array slice
console.log(students.slice(0,1))

// array splice
console.log(students.splice(1,2))

// for loops
const teacher = ['a', 'b', 'c']
for(let i = 0; i<teacher.length; i++){
    console.log(teacher[i])
}

//function
function sum(a,b){
    return a+b
}
console.log(sum(9,3))


//Object
const success = [5,8,9,3]
const friends = {
    name: 'sojib',
    age: 100,
    status: 'bestFriends',
    time: success
}
console.log(friends.name)
console.log(friends.time[2])
friends.name = 'Rakib'
console.log(friends.name)
console.log(friends)