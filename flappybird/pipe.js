function Pipe() {

this.h = random(250,400); //safe zone heights
this.y = random(100, height-this.h-150); //where on pipe the safezone spawns
this.w = 45;
this.x = width;


this.show = function() {
    noStroke();
    fill(28, 163, 46); //pipe
    rect(this.x, 0, this.w, height);   
    fill(52, 235, 235); //hitbox
    rect(this.x, this.y, this.w, this.h);
}

this.update = function() {
    this.x -= speed;
}

this.kill = function() {
    if (this.x < -this.w) {
        return true; 
    }
    else                  {
        return false;
     }

}


this.deadBird = function() {
    if ((bird.x + bird.d/2 >= this.x) && (bird.x - bird.d/2 <= this.x + this.w)) { 
        if ((bird.y - bird.d/2 >= this.y) && (bird.y + bird.d/2 <= this.y + this.h)) {
            return false;
        }
        else { 
            return true; 
        }
    } else {
        return false;
    }
   
       
}

}

