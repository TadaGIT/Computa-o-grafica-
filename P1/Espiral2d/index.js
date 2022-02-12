// declarando as variáveis que vão ser utilizadas para criar a espiral
var angle  = 0.0;
var offset = 60;
var scalar = 2;
var speed = 0.09;


// criando a área de amostragem
function setup() {
  createCanvas(400, 400);
fill(0);
 background(10,90,450);
}

// desenhando a espiral
function draw() {
 var x = offset + cos(angle) * scalar;
 var y = offset + sin(angle) * scalar;
ellipse(x + 100,y+ 100,2,2);
ellipseMode(CENTER);
angle += speed;
scalar += speed;
}