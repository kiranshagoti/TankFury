class Bullet {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
    }



    draw() {
        console.log();
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        fill("black");
        rect(0, 0, 1, 2);
        this.y -= 4;
        pop();
    }

}