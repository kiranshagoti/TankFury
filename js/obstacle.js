class Obstacle {
    constructor(x, y, speed) {
        this.width = 100;
        this.height = 10;
        this.y = y;
        this.x = x;
        this.speed = speed;
    }


    draw() {
        rect(this.x, this.y, this.width, this.height);
        this.x -= this.speed;
    }
}