const game = new Game();

function preload() {

}

function setup() {
    console.log("P5 Setup");
    createCanvas(900, 540);

    game.setup();
}
let bullets = [];

function draw() {
    //clear();
    background(225)
    game.draw();
    if (bullets.length) {

        bullets.forEach(function (element) {
            return element.draw()
        });
    }
}

function keyPressed() {
    if (keyCode === 32) {
        bullets.push(new Bullet(game.player.x, game.player.y, game.player.angle));
    }
}