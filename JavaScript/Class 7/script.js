let heading = document.getElementById("heading")
let attri = heading.getAttribute("class")
// console.log(heading);
heading.innerText = "Hello everyone"

let image1 = document.getElementById("image")
image1.setAttribute("src", "https://cdn.pixabay.com/photo/2022/07/17/13/41/sunflower-7327456_1280.jpg")
image1.setAttribute("height", "200")
image1.setAttribute("class", "first second third")
// console.log(image1);

const box = document.getElementById("box")
// box.innerHTML = "Hello"

let newHeading = document.createElement("h1")
newHeading.innerText = "This is a new Heading"
// console.log(newHeading);
newHeading.setAttribute("id", "newh1")

// box.prepend(newHeading)
// box.append(newHeading)
// box.before(newHeading)
box.after(newHeading)
newHeading.style.backgroundColor = "green"

// box.remove()

const obj = {
    name: "Soumya",
    age: 21,
    address: "Kolathia",
    course: "B.Tech"
}
const student1 = {
    __proto__: obj,
    name: "ABCD"

}

// console.log(obj.address);
// console.log(student1.address);
// console.log(student1.name);

// const student2 = Object.create(obj)
// console.log(student2.age);


// let name = prompt("Enter your name")
// console.log(name);

// alert("Warning")