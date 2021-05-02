let pantalla;
let controller;

function setup() {
  createCanvas(500,500);
  controller = new Controller();
  pantalla = controller.logic.pantalla;
}

function draw() {
  background(220);

  switch (pantalla) {
    case 0:
  //Caja Numeros
  rectMode(CENTER);
  noFill();
  stroke(0);
  rect(250,250,200,40);
  textSize(25);
  noStroke();
  fill(255);
  
  text(controller.logic.valor,247,258);

  //Boton -
  fill(0);
  rect(controller.logic.xMenos,controller.logic.yMenos,40,40);
  fill(255);
  text("-",117,257);

  //Boton +
  fill(0);
  rect(controller.logic.xMas,controller.logic.yMenos,40,40);
  fill(255);
  text("+",375,260);

  //Boton continuar
  fill(0);
  rect(250,330,200,40);
  fill(255);
  textSize(25);
  text("Continuar",200,340);

  if(controller.logic.valor >= 11){
    pantalla = 1;
  }

  if(controller.logic.valor <= -1){
   pantalla = 2;
  }
    break;
    case 1:
      // Si valor toma un numero mayor a 10 entonces que salga el ERROR
    noStroke();
    fill(255);
    rect(controller.logic.xError,controller.logic.yError,300,250);

    fill(0);
    textSize(18);
    text("ERROR",220,240);
    text("X",370,165);
    textSize(15);
    text("Solo numeros menores a 10",170,270);
    break;
    case 2:
      // Si valor toma un numero menor a 0 entonces que salga el ERROR
        noStroke();
        fill(255);
        rect(controller.logic.xError,controller.logic.yError,300,250);

        fill(0);
        textSize(18);
        text("ERROR",220,240);
        text("X",370,165);
        textSize(15);
        text("Solo numeros mayores a 0",165,270);
      break;
      case 3:
        //Botones Pantalla 3
        //Boton1
        fill(0);
        rect(100,430,80,40);
        //Boton2
        fill(0);
        rect(200,430,80,40);
        //Boton3
        fill(0);
        rect(300,430,80,40);
        //Boton4
        fill(0);
        rect(400,430,80,40);
        //Instruccion
        text("Presione la tecla n para ordenar",75,400);
 
        controller.logic.cuadrados.forEach(element => {
          element.pintar();
          element.mover();
        });
        
        if(controller.logic.circulos.length>0){
          controller.logic.circulos.forEach(element => {
            
            element.pintar();
            element.mover();
          });
        }
        break;
  }
}

function mouseClicked(){
  controller.validateClic();
}

function keyPressed(){
  if(key === 'n'){
    controller.validateTecl();
  }
}

function agrandar(){
  controller.agrandar();
}

function copiar(){
  controller.copiar();
}

