class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        //this.bullets = [];
        this.bullet = new Bullet();
        this.obstacles = [];
    }
    setup() {
        this.background.setup();
        this.player.setup();
        //this.bullet.setup();
    }
    draw() {
        this.background.draw();
        this.player.draw();
        this.bullet.draw();

        if (frameCount > 120 && frameCount % 120 === 0) {
            this.obstacles.push(new Obstacle(0, height - 500, -4));
            this.obstacles.push(new Obstacle(width, height - 520, 4));

        }
        this.obstacles.forEach((obstacle, index) => {
            if (obstacle.x + obstacle.width <= 0) {
                this.obstacles.splice(index, 1);
            }

            // for every bullet in this.bullets call the draw function
            obstacle.draw();
        });

    }
}