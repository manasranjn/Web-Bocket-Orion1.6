//! Comparision Operator
let a = 10
let b = 20
let c = 10
let d = "10"

// console.log(a == b);
// console.log(a == d);
// console.log(a === b);
// console.log(a === d);
// console.log(a != b);
// console.log(a != c);
// console.log(a !== b);
// console.log(a !== d);
// console.log(a !== c);
// console.log(a > b);
// console.log(a < b);
// console.log(a <= b);
// console.log(a >= b);

//! Conditional Statement
//? simple if
let age = 18
// if (age > 18) {
//     console.log("You can vote");
// }

//? if-else
// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You can't vote");
// }

//? else-if
let time = 14
// if (time < 12) {
//     console.log("Good Morning");
// } else if (time > 12 && time < 17) {
//     console.log("Good afternoon");
// } else if (time > 17 && time < 20) {
//     console.log("Good evening");
// } else if (time > 20 && time <= 24) {
//     console.log("Good Night");
// } else {
//     console.log("Invalid time");
// }

// if (time < 12) {
//     console.log("Good Morning");
// } if (time > 12) {
//     if (time < 17) {
//         console.log("Good afternoon");
//     }
// } if (time > 17) {
//     if (time < 20) {
//         console.log("Good evening");
//     }
// } if (time > 20) {
//     if (time < 24) {
//         console.log("Good Night");
//     }
// }


let value = 3
// switch (value) {
//     case 1:
//         console.log("Case 1");
//         break
//     case 2:
//         console.log("Case 2");
//         break
//     case 3:
//         console.log("Case 3");
//         break
//     case 4:
//         console.log("Case 4");
//         break
//     default:
//         console.log("Default Case");
// }

//! Loops
//? for loop
for (let i = 0; i < 10; i++) {
    // console.log(i);
}
for (i = 100; i >= 50; i--) {
    // console.log(i);
}

//? while loop
// let j = 1
// while (j < 100) {
//     console.log(j);
//     j++
// }

//? do-while loop
// let n = 0
// do {
//     console.log(n);
//     n++
// } while (n >= 10)

//? for-of loop
let str = "Hello everyone"
let arr = [10, 2, 3, 40, 4, 90, 5, 6, 7, 8, 7]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }
// for (let e of arr) {
//     console.log(e);
// }
// for (let s of str) {
//     console.log(s);
// }

//? for-in loop
let obj = {
    name: "ABCD",
    age: 20,
    mark: 90,
    state: "Odisha"
}
// for (let item in obj) {
//     console.log(item);
//     console.log(obj[item]);
// }