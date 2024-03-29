class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        // this.bullets = [];
        // this.bullet = new Bullet();
        this.obstacles = [];
        this.troopers = [];
        this.leftTroopers = 0;
        this.rightTroopers = 0;
        this.score = 0;
        this.explosions=[];
    }

    preload() {

    }
    setup() {
        this.background.setup();
        this.player.setup();
        //this.bullet.setup();
    }
    draw() {
        this.background.draw();
        this.player.draw();
        // this.bullet.draw();

        if (frameCount > 120 && frameCount % 120 === 0) {
            this.obstacles.push(new Obstacle(obstacleImg2, 0, window.innerHeight - 600, 4));
            this.obstacles.push(new Obstacle(obstacleImg, window.innerWidth, window.innerHeight - 520, -4));
        }
        // if (this.obstacles.length > 4) this.obstacles.shift();
        // if (this.obstacles.length > 4) this.obstacles.shift();

        this.obstacles.forEach((obstacle, index) => {
            if (obstacle.x + obstacle.width <= 0 || obstacle.x > window.innerWidth) {
                this.obstacles.splice(index, 1);
            }
            // for every bullet in this.bullets call the draw function
            obstacle.draw();
        });
        if (frameCount > 150 && frameCount % 150 === 0) {
            this.troopers.push(new Trooper(trooperImg, this.obstacles, height - 500, -1));
            this.troopers.push(new Trooper(trooperImg2, 0, height - 520, 1));
        }
        this.troopers.forEach((trooper, index) => {
            // if (trooper.y + trooper.height <= 0) {
            //     this.troopers.splice(index, 1);
            // }
            trooper.draw();
            trooper.move();

        });

    }

}