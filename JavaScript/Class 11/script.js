// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => {
//         console.log(response);
//         console.log("Successfull");
//         response.json().then((res) => {
//             console.log(res);

//         })
//     }).catch((error) => {
//         console.log(error);
//     })

const box = document.getElementById("box")

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((result) => {
//         console.log(result);
//         result.map((user) => {
//             const userElement = document.createElement("p");
//             const para = document.createElement("p")
//             userElement.textContent = user.title;
//             para.textContent = user.id
//             box.appendChild(userElement);
//             box.prepend(para)
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(response);
    const data = await response.json()
    console.log(data);
}
// getData()

const arr = [10, 20, 10, 50, 30, 2, 5, 90]
// arr.sort((a, b) => a - b)
// arr.sort((a, b) => b - a)
// console.log(arr);
