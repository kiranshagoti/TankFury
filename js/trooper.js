class Trooper {
    constructor() {
        this.width = 100 / 4;
        this.height = 100 / 3; // tankHeight/3
        this.randomObstacle = game.obstacles[Math.floor(Math.random() * game.obstacles.length)]
        this.y = this.randomObstacle.y;
        this.x = this.randomObstacle.x;

    }

    draw() {
        rect(this.x, this.y, this.width, this.height);

        if (this.y < window.innerHeight - 35) {
            this.y += 4;
        }
    }
    // gameOver() {
    //     let troopersOnFloor = 0;
    //     troopersOnFloor++;
    //     if(trooper)
    // }

}