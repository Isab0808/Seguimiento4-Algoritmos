class Logic{
    
    constructor(){
    this.xMas = 380;
    this.yMas = 250;
  
    this.xMenos = 120;
    this.yMenos = 250;
  
    this.valor = 0;
  
    this.xError = 250;
    this.yError = 250;

    this.pantalla = 0;
  
    this.xContinuar = 250;
    this.yContinuar = 330;

    this.circulos = [];
    this.cuadrados = [];
    }
 
 validateClic(){
     //Si le doy clic al + aumentar cantidad
  if(mouseX > this.xMas - 40/ 2 && mouseX < this.xMas + 40/ 2 && 
    mouseY > this.yMas - 40/ 2 && mouseY < this.yMas + 40/ 2){
    this.valor ++;
    }

    //Si le doy clic al - disminuir cantidad
  if(mouseX > this.xMenos - 40/ 2 && mouseX < this.xMenos + 40/ 2 && 
    mouseY > this.yMenos - 40/ 2 && mouseY < this.yMenos + 40/ 2){
    this.valor --;
  }

  //Si le doy clic al rectangulo del error, desaparecer el ERROR (10)
  if(mouseX > 270 - 300/ 2 && mouseX < 270 + 300/ 2 && 
    mouseY > 165 - 250/ 2 && mouseY < 165 + 250/ 2 && pantalla ==1){
      pantalla = 0;
      this.valor = 0;
  }

  //Si le doy clic al rectangulo del error, desaparecer el ERROR (0)
  if(mouseX > 270 - 300/ 2 && mouseX < 270 + 300/ 2 && 
    mouseY > 165 - 250/ 2 && mouseY < 165 + 250/ 2 && pantalla ==2){
      pantalla = 0;
      this.valor = 0;
  }

   //Si le doy clic a continuar pasar crear el arreglo con la misma cant. de this.valor
   if(mouseX > this.xContinuar - 200/ 2 && mouseX < this.xContinuar + 200/ 2 && 
      mouseY > this.yContinuar - 40/ 2 && mouseY < this.yContinuar + 40/ 2 && pantalla ==0){
        for (let index = 0; index < this.valor; index++) {
          const cuadrado = new Cuadrado(25+(50 * index),100,40);
          this.cuadrados.push(cuadrado);
        }
      pantalla = 3;
  }

  //Si le doy clic en Boton 1, agrego mas this.circulos
  if(mouseX > 100 - 80/ 2 && mouseX < 100 + 80/ 2 && 
    mouseY > 430 - 40/ 2 && mouseY < 430 + 40/ 2 && pantalla ==3){
        const randomX= Math.random() * (450 - 50) + 50;
        const cuadrado = new Cuadrado(randomX,100,40);
        this.cuadrados.push(cuadrado);
      
  }

  //Si le doy clic en Boton 2, elimino elementos del arreglo
  if(mouseX > 200 - 80/ 2 && mouseX < 200 + 80/ 2 && 
    mouseY > 430 - 40/ 2 && mouseY < 430 + 40/ 2 && pantalla ==3){
      const randomX= Math.random() * (450 - 50) + 50;
      const cuadrado = new Cuadrado(randomX,100,40);
      this.cuadrados.pop(cuadrado);
  }

  //Si le doy clic en Boton 3, doblo el tamaño de los elementos
  if(mouseX > 300 - 80/ 2 && mouseX < 300 + 80/ 2 && 
    mouseY > 430 - 40/ 2 && mouseY < 430 + 40/ 2 && pantalla ==3){
      agrandar();
  }

   //Si le doy clic en Boton 4, agrego otro arreglo pero de cuadrados
   if(mouseX > 400 - 80/ 2 && mouseX < 400 + 80/ 2 && 
    mouseY > 430 - 40/ 2 && mouseY < 430 + 40/ 2 && pantalla ==3){
      copiar();
  }
    }

    copiar(){
     this.circulos = this.cuadrados.map(cuadrado =>
    new Circulo(cuadrado.x,cuadrado.y+200,cuadrado.size,cuadrado.valorAdentro)
    )
}

validateTecl(){
         this.circulos.sort((a,b) => a.valorAdentro - b.valorAdentro)
         this.circulos.forEach((element,index) =>{
           element.x = 25+(50 * index);
         })

         this.cuadrados.sort((a,b) => a.valorAdentro - b.valorAdentro)
         this.cuadrados.forEach((element,index) =>{
           element.x = 25+(50 * index);
         })
}

agrandar(){
    this.circulos.forEach(circulo =>{
        circulo.size = circulo.size*2;
      })

      this.cuadrados.forEach(cuadrado =>{
        cuadrado.size = cuadrado.size*2;
      })
}}