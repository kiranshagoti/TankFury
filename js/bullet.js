class Bullet {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
    }
    draw() {
        console.log();
        push();
        translate(this.x + 50, this.y);
        rotate(this.angle);
        fill("black");
        rect(0, -20, 1, 2);
        // this.y -= 4;
        this.x += sin(this.angle) * 10;
        this.y -= cos(this.angle) * 10;
        pop();
    }
    collisionCheck(obstacleArray) {
        obstacleArray.forEach((obstacle, i) => {
            if (this.y <= obstacle.y + obstacle.height && this.y >= obstacle.y && this.x <= obstacle.x - 50 + obstacle.width && this.x >= obstacle.x - 50) {
                console.log("boom")
                obstacleArray.splice(i, 1);
                return true
            }
        })


    }
}