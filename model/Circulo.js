class Circulo {

    constructor (x,y, size, valorAdentro){
        this.x = x;
        this.y = y;
        this.size = size;
        this.valorAdentro = valorAdentro; 
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 200);
        this.b = Math.floor(Math.random() * 200);
        this.dir = 2;
    }
    
    pintar(){
      fill(this.r,this.g,this.b);
      ellipse(this.x,this.y,this.size,this.size);
      fill(255);
      text(this.valorAdentro, this.x-7,this.y+7);
      this.mover();
    }

    mover(){
      if(this.x < 0 || this.x > 500){
        this.dir = this.dir * -1;
    }
    this.x = this.x + this.dir;
    }


  }