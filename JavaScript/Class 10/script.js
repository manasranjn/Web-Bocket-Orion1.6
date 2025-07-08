// console.log("One");
// console.log("Two");
// console.log("Three");
// setTimeout(() => {
//     console.log("Four");

// }, 3000)
// console.log("Five");

// () => {
//     () => {
//         () => {
//             () => {
//                 () => {

//                 }
//             }
//         }
//     }
// }

function getUser(userId, callback) {
    setTimeout(() => {
        console.log("User data fetched");
        callback({ id: userId, name: "John Doe" });
    }, 1000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        console.log("User posts fetched");
        callback([{ postId: 1, title: "Post 1" }, { postId: 2, title: "Post 2" }]);
    }, 1000);
}

function getPostComments(postId, callback) {
    setTimeout(() => {
        console.log("Comments for post fetched");
        callback([{ commentId: 101, text: "Nice post!" }]);
    }, 1000);
}

// Nested Callbacks (Callback Hell)
// getUser(1, (user) => {
//     getUserPosts(user.id, (posts) => {
//         getPostComments(posts[0].postId, (comments) => {
//             console.log("Comments: ", comments);
//         });
//     });
// });

let obj = {
    name: "ABCD",
    age: 20,
    city: "BBSR"
}
// console.log(obj);
//! add new key
obj.state = "Odisha"
// console.log(obj);
//! Edit key value
obj.age = 22
// console.log(obj);
//! delete a key
delete obj.age
// console.log(obj);


const box = document.getElementById("box")
const button = document.getElementById("btn")

button.onclick = () => {
    if (box.style.backgroundColor === "black") {
        box.style.backgroundColor = "white"
    } else {
        box.style.backgroundColor = "black"

    }
}
// console.log(a); // not allowed
console.log(b);
example()

let a = 10
console.log(a);

var b = 20
console.log(b);

function example() {
    console.log("Function Hoisting");

}

// example()
// check() // not allowed
const check = () => {
    console.log("Hoisting not allowed");
}
// check()