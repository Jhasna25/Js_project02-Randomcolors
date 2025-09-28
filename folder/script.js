const body = document.getElementsByTagName("body")[0]
// body.style.backgroundColor = "teal"

// red, blue, green button part
function setColor(name) {
    body.style.backgroundColor = name;
}

setColor("teal")

// ...............................

function multiColors() {
    const red = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)

    const colors = `rgb(${red}, ${blue}, ${green})`
    body.style.backgroundColor = colors;
}

multiColors()
// math.random = generates a random value (0 - 1)
// math.round = rounding up the number (eg. 1.66 can be rounded up to 2)

