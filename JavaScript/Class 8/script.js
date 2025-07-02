const button = document.getElementById("btn")
function clickButton() {
    console.log("Button Clicked");
    button.style.backgroundColor = "pink"
    button.style.color = "white"
}

const button2 = document.getElementById("btn2")
button2.onclick = () => {
    console.log("Button is clicked");
}