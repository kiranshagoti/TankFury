const game = new Game();

function preload() {
    image1 = loadImage("/assets/Flat Nature Art.png");
}

function setup() {
    console.log("P5 Setup");
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('gameBoard')
    game.setup();

}


function draw() {
    //clear();
    background(225)
    image(image1, 0, 0, window.innerWidth += 1, window.innerHeight);
    game.draw();
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