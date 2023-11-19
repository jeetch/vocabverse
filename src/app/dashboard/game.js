const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './images/Pellet Town.png'

const playerImage = new Image()
playerImage.src = './images/playerDown.png'

// LOAD AND RENDER IMAGES
let loadedImages = 0;

const renderImages = () => {
    if (loadedImages === 2) {
        const playerX = (canvas.width - playerImage.width / 4) / 2;
        const playerY = (canvas.height - playerImage.height) / 2;

        c.drawImage(image, -735, -600);
        c.drawImage(playerImage, 0, 0, playerImage.width / 4, playerImage.height, playerX, playerY, playerImage.width / 4, playerImage.height);
    }
}

image.addEventListener('load', () => {
    loadedImages++;
    renderImages();
})

playerImage.addEventListener('load', () => {
    loadedImages++;
    renderImages();
})

class Sprite {
    constructor({ position, image }) {
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const background = new Sprite({ position: { x: -735, y: -600 }, image: image })

const keys = {
    w: { pressed: false },
    a: { pressed: false },
    s: { pressed: false },
    d: { pressed: false }
}

function moveBackground() {
    if (keys.w.pressed) background.position.y += 3
    if (keys.s.pressed) background.position.y -= 3
    if (keys.a.pressed) background.position.x += 3
    if (keys.d.pressed) background.position.x -= 3
}

function animate() {
    window.requestAnimationFrame(animate)
    background.draw()

    c.drawImage(playerImage, 0, 0, playerImage.width / 4, playerImage.height, (canvas.width - playerImage.width / 4) / 2, (canvas.height - playerImage.height) / 2, playerImage.width / 4, playerImage.height);

    moveBackground();
}

animate()

// MOVE PLAYER WITH KEY LISTENER
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w': keys.w.pressed = true; break
        case 'a': keys.a.pressed = true; break
        case 's': keys.s.pressed = true; break
        case 'd': keys.d.pressed = true; break
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w': keys.w.pressed = false; break
        case 'a': keys.a.pressed = false; break
        case 's': keys.s.pressed = false; break
        case 'd': keys.d.pressed = false; break
    }
})

// BUTTON CONTROL HANDLER
function handleControl(key) {
    keys[key.toLowerCase()].pressed = true;
    setTimeout(() => { keys[key.toLowerCase()].pressed = false; }, 100); // Simulate a key press
}

// Bind this function to your on-screen buttons
