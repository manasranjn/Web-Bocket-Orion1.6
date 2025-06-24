//! var
var a = 10
a = 20
var a = "Hi"
// console.log(a);


//! let
let b = 50
b = 0
// let b
// console.log(b);


//! const
// let d
// d = 10
const c = 1
// c = 10 //not valid
// const c
// console.log(c);


//! Datatypes
//* Primitive
//? number
let num = 10
let num2 = 10.5
// console.log(typeof num);
// console.log(typeof num2);

//? String
let str = "Hello"
let str2 = '12345'
// console.log(typeof str);
// console.log(typeof str2);

//? undefined
let un
// console.log(un);
// console.log(typeof un);

//? boolean
let booleanVa = true
// console.log(booleanVa);
// console.log(typeof booleanVa);

//? null
let n = null
// console.log(typeof n);
// console.log(n);

//? Symbol
let sym = Symbol(10)
// console.log(sym);
// console.log(typeof sym);

//? BigInt
let big = BigInt(909987765544321900)
// console.log(typeof big);
// console.log(big);


//* Non-Primitive or Reference type
//? Array
let marks = [10, "Hi", true, undefined, null, 90.5]
// console.log(marks);
// console.log(typeof marks);
// console.log(marks[1]);


//? Object
let obj = {
    name: "ABCD",
    age: 20,
    mrak: 80
}
// console.log(obj.name);
// console.log(obj["mrak"]);

//? function
function firstFunction() {
    console.log("Hello");
}
// firstFunction()

//! Operator
//? Arithmetic Operator
let val1 = 4
let val2 = 3

// let addition = val1 + val2
// console.log("Addition=", addition);

// let sub = val1 - val2
// console.log("Subtraction=", sub);

// let multi = val1 * val2
// console.log("Multiplication", multi);

// let div = val1 / val2
// console.log("Division= ", div);

// let mod = val1 % val2
// console.log("Modulus=", mod);

// let expo = val1 ** val2
// console.log("Exponent= ", expo);

//? Assignment Operator (=,+=,-+,*=,/=,%=,**=)
let ab = 20
let xy = 90

// ab += xy // ab = ab+xy
// console.log(ab);

// ab -= 10 // ab = ab-10
// console.log(ab);

// ab *= 5
// console.log(ab);

// ab /= 4
// console.log(ab);

// ab %= 3
// console.log(ab);

// ab **= 6 // ab = ab ** 6
// console.log(ab);

//?Logical operator Logical AND (&&), Logical OR (||), Logical NOT (!)
// console.log("Logical operator");

let first = true
let second = false
let third = true

// console.log(first && second); //f
// console.log(first && third); //t
// console.log(first || second); //t
// console.log(first || third); //t
// console.log(!first);  //f
// console.log(!second); //t

//?Unary operator
let val = 10

console.log("Pre increment=", ++val);
console.log("Post increment=", val++);
console.log(val);
console.log(--val);
val++
val--
++val
console.log(val++);
console.log(val);
console.log("Pre Decrement= ", --val);
console.log("Post Decrement= ", val++);
console.log(val);