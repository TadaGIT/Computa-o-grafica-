
let pts = [];

function setup() {
  createCanvas(400, 400);
  pts = [
    createVector(50, 50),
    createVector(100, 300),
    createVector(300, 300),
    createVector(350, 50)
  ];
}
/*Desenha o fundo e cria os pontos x e y que vão ser utilizados      */
function draw() {
  background(220);
  noFill();
  stroke(0);
  bezier(pts[0].x, pts[0].y,
         pts[1].x, pts[1].y,
         pts[2].x, pts[2].y,
         pts[3].x, pts[3].y);
  

  noStroke();
  fill(255);
  for (let pt of pts) {
  	ellipse(pt.x, pt.y, 20, 20);
  }
  
 /*Muda a curva de bezier de acordo com as bolinhas brancas ao mover com o mouse    */ 
  if (mouseIsPressed) {
    for (let pt of pts) {
      if (dist(mouseX, mouseY, pt.x, pt.y) < 20) {
        pt.x = mouseX;
        pt.y = mouseY;
        break;
      }
    }
  }
  
  noStroke();
  fill(0);
  textSize(12);
  text("curva de bezier / mova os pontos em branco para mudar a curva", 4, height-4);
  
}