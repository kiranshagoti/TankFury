class Trooper {
    constructor(img) {
        this.width = 100 / 4;
        this.height = 100 / 3; // tankHeight/3
        this.randomObstacle = game.obstacles[Math.floor(Math.random() * game.obstacles.length)]
        this.y = this.randomObstacle.y;
        this.x = this.randomObstacle.x;
        this.ground = false
        this.img = img;


    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);

        if (!this.ground && this.y + this.height < window.innerHeight) {
            this.y += 1;
        }
    }
    move() {
        if (this.y + this.height >= window.innerHeight) {
            //  console.log("left", window.innerWidth / 2 - 75, "right", window.innerWidth / 2 + 50)
            if (this.x + this.width < game.player.x - game.player.width / 2) {
                this.x += 1;
            }
            if (this.x > game.player.x + game.player.width / 2) {
                this.x -= 1;
            }
            if (!this.ground && this.x + this.width === game.player.x - game.player.width / 2) {
                console.log(game.rightTroopers)
                // collision with left side
                game.leftTroopers += 1;
                this.ground = true;
                this.y = window.innerHeight - game.leftTroopers * this.height;
                if (this.y + this.height <= game.player.y) {
                    setTimeout(() => {
                        textSize(90);
                        text("Game Over", 400, 500)

                    }, 1000)
                    noLoop();
                }




            } else if (!this.ground && this.x === game.player.x + game.player.width / 2) {
                // collision with right side
                game.rightTroopers += 1;
                this.ground = true;
                this.y = window.innerHeight - game.rightTroopers * this.height;
                if (this.y + this.height <= game.player.y) {
                    setTimeout(() => {
                        textSize(90);
                        text("Game Over", 400, 500)
                    }, 1000)
                    noLoop();
                }


            }
        }

    }

}