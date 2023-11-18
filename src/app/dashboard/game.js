// Vocabverse v1.0 


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576


c.fillStyle = 'white'
c.fillRect(0,0,canvas.width,canvas.height)


const image = new Image()
image.src = './images/Pellet Town.png'

const playerImage = new Image()
playerImage.src = './images/playerDown.png'



//  LOAD AND RENDER IMAGES

// Create a variable to keep track of the loaded images
let loadedImages = 0;

// Function to render the images
const renderImages = () => {
    // Check if both images are loaded
    if (loadedImages === 2) {
        const playerX = (canvas.width - playerImage.width/4) / 2;
        const playerY = (canvas.height - playerImage.height) / 2;
        
        c.drawImage(image, -735, -600);
        c.drawImage(playerImage,  
            0,0, 
            playerImage.width/4,playerImage.height,
            // 0,0, playerImage.width, playerImage.height,
            playerX, playerY,
            playerImage.width/4,playerImage.height);
    }
}

// Event listener for image load
image.addEventListener('load', () => {
    console.log('Image loaded:', image.src)
    loadedImages++;
    renderImages();
})

playerImage.addEventListener('load', () => {
    console.log('Player image loaded:', playerImage.src)
    loadedImages++;
    renderImages();
})



// SPRITE CLASS

class Sprite {
    constructor({
        position,
        velocity,
        image
    }) {
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const  background = new Sprite({position: {x: -735, y: -600}, image: image})

const keys = {
    w:{
        pressed: false
    },
    a:{
        pressed: false
    },
    s:{
        pressed: false
    },
    d:{
        pressed: false
    }
}

function animate() {
    window.requestAnimationFrame(animate)
    background.draw()

    c.drawImage(playerImage,  
        0,0, 
        playerImage.width/4,playerImage.height,
        // 0,0, playerImage.width, playerImage.height,
        (canvas.width - playerImage.width/4) / 2, (canvas.height - playerImage.height) / 2,
        playerImage.width/4,playerImage.height);

        if (keys.w.pressed && lastkey=='w') background.position.y += 3
        else if (keys.s.pressed && lastkey=='s') background.position.y -= 3
        else if (keys.a.pressed && lastkey=='a') background.position.x += 3
        else if (keys.d.pressed && lastkey=='d') background.position.x -= 3
}

animate()




// MOVE PLAYER WITH KEY LISTENER


let lastkey = ''
window.addEventListener('keydown', (e) => {

    switch(e.key) {
        case 'w':
            keys.w.pressed = true
            lastkey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastkey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastkey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastkey = 'd'
            break
    }
})
window.addEventListener('keyup', (e) => {

    switch(e.key) {
        case 'w':
            keys.w.pressed = false
            console.log(keys.w.pressed)
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})


