class figure {
    constructor(img, x, y, w, h, count) {
        this.img = new Image();
        this.img.src = img;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.count = count;

        this.imgBoxing1 = "images/3.hulkRight/h21.png";
        this.imgBoxing1_R = "images/3.hulkRight/h34.png";
        this.imgBoxing2 = "images/3.hulkRight/h21_R.png";
        this.imgBoxing2_R = "images/3.hulkRight/h34_R.png";
    }

    drawImg(canvas) {
        let pen = canvas.getContext("2d");
        pen.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    moveRight() {

        this.x += 20;
    }

    moveLeft() {

        this.x -= 20;
    }

    hulk1Boxing() {
        this.img.src = this.imgBoxing1;
    }

    hulk1Boxing_R() {
        this.img.src = this.imgBoxing1_R;
    }

    hulk2Boxing() {
        this.img.src = this.imgBoxing2;
    }

    hulk2boxing_R() {
        this.img.src = this.imgBoxing2_R;
    }
}


