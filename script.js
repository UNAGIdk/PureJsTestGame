const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")

document.addEventListener("keydown", function (event) {
    jump()
})

function jump() {
    if (dino.classList != "junp") {
        dino.classList.add("jump")
    }
    setTimeout(function () {
        dino.classList.remove("jump")
    }, 500)
}

let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 45 && cactusLeft > 0 && dinoTop >= 140) {
        alert("GAME OVER")
    }
}, 10)