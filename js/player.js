class Player {
    constructor() {
        this.x = 500;
        this.y = 400;
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
        rect(this.x, this.y, 100, 100);
        push();
        translate(this.x + 50, this.y);
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

        if (keyIsDown(39)) {
            this.angle += .1;

        }
        if (keyIsDown(37)) {
            this.angle -= .1;
        }
    }
    // shoot() {
    //     if (keyIsDown(32)) {
    //         let bullet = new Bullet(this.x, this.y, this.angle);
    //         bullet.draw();
    //         //game.bullets.push(bullet);

    //     }

    // }
}