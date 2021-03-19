function Bird() {

this.x = 450;
this.y = height/2;
this.d = 65;

this.gravity = 1.254537;
this.velocity = 0;
this.lift = -38.45;

this.red = 255;     //sets color of bird
this.blue = 255;
this.green = 255;


this.show = function() {
    fill(this.red, this.green, this.blue);
    circle(this.x, this.y, this.d);
}

this.jump = function() {   
    this.velocity += this.lift;
}

this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;
}

this.setColor = function(r,g,b) {
    this.red = r;
    this.green = g;
    this.blue = b;
}

}
