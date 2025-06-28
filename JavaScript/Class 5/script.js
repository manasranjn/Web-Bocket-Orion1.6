//! String Methods
let str = "  Lorem, ipsum dolor sit amet consectetur sit adipisicing elit. Sed sit itaque nisi quae distinctio iusto possimus consequatur, quibusdam voluptates sit perferendis, ea, assumenda architecto doloremque consectetur! Optio sit id itaque temporibus officia cumque.  "
//? slice()
let subStr = str.slice(10, 20)
// console.log(subStr);
// console.log(subStr.length);

//? indexOf()
// console.log(str.indexOf("l"));

//? lastIndexOf()
// console.log(str.lastIndexOf("nisi"));

//? charAt()
// console.log(str.charAt(6));

//? trim()
// console.log(str);
// console.log(str.trim());

//? toUpperCase()
// console.log(str.toUpperCase());

//? toLowerCase()
// console.log(str.toLowerCase());

//? replace()
let replacedStr = str.replace('sit', "stand")
// console.log(replacedStr);

//? replaceAll()
let newStr = str.replaceAll("sit", "hello")
// console.log(newStr);

//? split()
// console.log(str.split("sit"));

//! Function in JS
//? Normal Function
function sayHello() {
    console.log("Hello Everyone");
}
// sayHello()

//* Type-A(Without Parameter)
function addition() {
    return 10 + 40
}
// console.log(addition());

//* Type-B(With Parameter)
function add(a, b) {
    return a + b
}
// console.log(add(30, 40));

//* Default Value of Function Parameter
// console.log(add(10));
function sum(a = 0, b = 0) {
    return a + b
}
// console.log(sum(20, 30, 40));

//? Arrow Function
const sub = (a, b) => {
    return a - b
}
// console.log(sub(60, 10));

const name = "Kaushik"
const age = 21
const course = "B.Tech"

const printSomething = (a, b, c) => {
    console.log(`My name is ${a}, my age is ${b}, and pursuing ${c}`);
}
// printSomething(name, age, course)

//? Anonymous function
const anonymous = function (a) {
    console.log("Anonymous Function", a);
}
// anonymous("Hello")

//? Callback Function
// ()=>{

// }
//? forEach Loop
let arr = [10, 20, 30, 40, 50, 60, 70, 80]

arr.forEach((item) => {
    console.log(item);
})
