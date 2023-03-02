const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }

}


let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft <= 37 && cactusLeft >= 0 && dinoTop >= 110) {
        alert("Game Over !");
    }
}, 10);

document.addEventListener("keydown", (start) => {
    if (start.code == "Space") {
        cactus.classList.add("block");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
        jump();
    }
});