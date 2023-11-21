//"use strict"; // treats all js code as newer version of js

//alert(3) //we are using node js not browser

//null // standalone value

//undefined // 

//symbol //unique

// these are data types

// console.log(typeof null) // object

// let score = null
// let value = Number(score)
// console.log(typeof value)
// console.log(value)


// console.log(+true)
// console.log(+'')

// let x2 = 3n;
// const y2 = x2++;

// console.log(x2,y2);

//symbol provid uniqueness and it is also premitive data type
// let id1 = Symbol("12");
// let id2 = Symbol("12")
// console.log(typeof id1)


// let list = ["adarsh",12,"ab"];

// let obj = {
//     name:"adarsh",
//     age:25
// }


// let fun = function fun(){
    
// }

// console.log(typeof fun)

// let num = 23
// console.log(typeof num.toString())

// let num1 = 23.999
// console.log(num1.toPrecision(5));

// console.log(Math.floor((Math.random()*10)+1))

// let min = 12
// let max = 24

// let z = Math.random()
// console.log(Math.floor(z*(max-min+1))+min)
// console.log(z)



let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())

let currDate =  Date.now()
console.log(currDate/86400000)
console.log(myDate.getTime()/86400000)




