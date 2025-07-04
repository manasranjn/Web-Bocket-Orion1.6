const box = document.getElementById("box")
const button = document.getElementById("btn")

const newDiv = document.createElement("div")
const heading = document.createElement("h1")
heading.innerText = "This is a Heading"
// console.log(heading);
newDiv.append(heading)
newDiv.style.backgroundColor = "red"

button.onclick = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.type);


    box.append(newDiv)
}

const input = document.getElementById("input")
input.onchange = (e) => {
    // console.log(e);

    // console.log(e.target);
    console.log(e.target.value);

}
function sayHello() {
    console.log("Hello everyone");
    console.log("Good evening");

}

const button2 = document.getElementById("button")
button2.addEventListener("click", sayHello)
setTimeout(() => {
    button2.removeEventListener("click", sayHello)
}, 5000)


class Student {
    constructor(name, age, course) {
        this.name = name
        this.age = age
        this.course = course
    }

    sayHello() {
        console.log(`Hello, My name is ${this.name}, and my age is ${this.age}`);
    }
}

let student1 = new Student("Sibasish", 19, "B.Tech")
// console.log(student1);

class Parent {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(this.name, this.age);
    }
}

class Child extends Parent {
    greet() {
        console.log(`Hello ${this.name}, ${this.age}`);

    }
}
const obj1 = new Parent("Sibasish", 19)
obj1.greet()
const obj2 = new Child("Kaushik", 21)
obj2.greet()