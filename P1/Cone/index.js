// desenha um cone rodando
// com raio 40 e altura 70
function setup() {
    createCanvas(200, 200, WEBGL);
  }
  
  function draw() {
    background(200);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cone(40, 70);
  }