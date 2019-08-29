class Player {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight - this.height;
        this.angle = 0;

    }


    preload() {

    }

    setup() {
        this.targetX = width / 2;
        this.targetY = 0;
    }

    draw() {
        fill("red");
        rect(this.x - this.width / 2, this.y, 100, 100);
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        fill("black");
        strokeWeight(2);
        stroke(126);

        line(0, 0, 0, -20);

        pop();
        this.aim();
        //  this.shoot();

    }
    aim() {

        if (keyIsDown(39) && this.angle < 1.6) {

            this.angle += .1;

        }
        if (keyIsDown(37) && this.angle > -1.6) {
            this.angle -= .1;
        }


    }

}