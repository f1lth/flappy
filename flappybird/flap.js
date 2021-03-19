var bird;
var pipes = [];
var speed = 3;
var tick = 0;
var initJump = false;
var counter = 0;
var score;

function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    bird = new Bird();
    score = new Score();
}

function draw() {
    background(52, 235, 235);

for (var i = pipes.length-1; i >= 0; i--) {
    
    pipes[i].show();
    pipes[i].update();


    if (pipes[i].x == bird.x || pipes[i].x == bird.x + 1 || pipes[i].x == bird.x - 1) {
        counter++;
        console.log(counter);
    }   

    if (pipes[i].kill()) {
        pipes.splice(i,1);
    }

    if (pipes[i].deadBird() || bird.y > height || bird.y < 0) { 
        noLoop();
        reset();   
        
    }


    

}

score.scoreboard(counter);

    if (tick == 200) {
        tick = 0;
        pipes.push(new Pipe());
    }
    tick++;


bird.show();

    if (initJump) {
        bird.update(); 
    }

}

function keyPressed() {
    if (key == ' ') {
        bird.jump();
        initJump = true;
    }
}

function reset() {
    pipes.splice(0,pipes.length);
    bird.setColor(255, 255, 255);
    counter = 0;
    bird.y = height/2;
    initJump = false;
    loop();

}