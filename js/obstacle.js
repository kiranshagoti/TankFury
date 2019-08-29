class Obstacle {
    constructor(img,x, y, speed) {
        this.width = 100;
        this.height = 50;
        this.y = y;
        this.x = x;
        this.speed = speed;
        this.img = img
    }
    
    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.x += this.speed;
    }
}