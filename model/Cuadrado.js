class Cuadrado{
  
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.valorAdentro = Math.floor(Math.random() * 10);
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 200);
        this.b = Math.floor(Math.random() * 200);
        this.dir = 2;
    }
 
 pintar(){
     rectMode(CENTER);
     fill(this.r,this.g,this.b);
     rect(this.x,this.y,this.size,this.size);
     fill(255);
     text(this.valorAdentro, this.x-7,this.y+7);
    }
    
mover(){
    if(this.x < 0 || this.x > 500){
          this.dir = this.dir * -1;
      }
      this.x = this.x + this.dir;
      }

getNumber (){
    return this.valorAdentro;
     }

 }