const game = new Game();
let explosionSprite;
let explosionAnimation;
let explosionSound;

function preload() {
    image1 = loadImage("assets/Flat Nature Art.png");
    obstacleImg = loadImage("assets/kisspng-airplane-aircraft-cartoon-illustration-the-falling-plane-5a9f31bd1fd8f4.5049708015203823971305.png");

    obstacleImg2 = loadImage("assets/kisspng-airplane-aircraft-drawing-clip-art-toy-airplane-5b28e90a0654a5.8232014615294077540259.png");
    playerImg = loadImage("assets/kisspng-tank-soldier-military-armoured-fighting-vehicle-military-tanks-5a7bd8854654b7.1394788215180657972881.png")
    trooperImg = loadImage("assets/kisspng-soldier-clip-art-soldier-transparent-png-5a7851ad690200.1139676715178346694301.png")
    trooperImg2 = loadImage("assets/kisspng-soldier-clip-art-soldier-transparent-png-5a7851ad690200.1139676715178346694301.png")
    explosionSprite = loadSpriteSheet("assets/explosion.png", 16, 16, 5);

    explosionAnimation = loadAnimation(explosionSprite);
    explosionSound = loadSound("assets/zapsplat_sound_design_explosion_designed_distortion_18616.mp3");
}

function setup() {
    console.log("P5 Setup");
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('gameBoard')
    game.setup();

}


function draw() {
    //clear();
    // background(225)
    image(image1, 0, 0, window.innerWidth += 1, window.innerHeight);
    game.draw();
    drawSprites();
    console.log("score", score)
    textSize(32);
    text(score, 50, 50)


    if (bullets.length) {

        bullets.forEach(function (element, i) {
            element.draw()



            if (game.obstacles.length) {
                element.collisionCheck(game.obstacles, 2)
            }
            if (game.troopers.length) {
                element.collisionCheck(game.troopers, 1)
            }



            if (element.y <= 0) {
                bullets.splice(i, 1)
            }

        });






    }

}
let bullets = [];

function keyPressed() {
    if (keyIsDown(32)) {
        bullets.push(new Bullet(game.player.x, game.player.y, game.player.angle));
    }

}

window.addEventListener("keydown", function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);