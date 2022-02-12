function setup() {
    createCanvas(400, 400, WEBGL);	//inclue webgl para renderização 3d
  }
  
  function draw() {
    background(220);
    
    // roda o objeto
    rotateX(frameCount*0.01);
    rotateY(frameCount*0.01);
    
    //coordenadas dos vértices da piramide
    line(0,0,0,50,0,0);
    line(50,0,0,50,50,0);
    line(50,50,0,0,50,0);
    line(0,50,0,0,0,0);
    line(0,0,0,25,25,50);
    line(50,0,0,25,25,50);
    line(50,50,0,25,25,50);
    line(0,50,0,25,25,50);
  }