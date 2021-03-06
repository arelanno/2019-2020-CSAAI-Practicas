console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
//-- Definir el tamaño del convas
canvas.width = 600;
canvas.height = 400;

const ctx = canvas.getContext("2d");

ctx.beginPath();
//-- Dibujar un circulo: coordenadas x,y del centro
//-- Radio, Angulo inicial y angulo final
ctx.arc(100, 90, 40, 0, 2 * Math.PI);
ctx.strokeStyle = 'blue';
ctx.lineWidth = 3;
ctx.fillStyle = 'yellow';
ctx.stroke()

//-- Dibujar el relleno
ctx.fill()


//-- Texto solido
ctx.font = "25px Arial";
ctx.fillStyle = 'grey'
ctx.fillText("Texo sólido", 10, 30);

//-- Texto trazo
ctx.strokeStyle = 'red';
ctx.font = "35px Arial";
ctx.strokeText("Texto trazo", 5, 180);//-- Dibujar el trazo

var logo = document.getElementById("NBA-Logo");

logo.height=720;
logo.width=1280;
console.log(logo.height);
logo.width = logo.width * 0.2;
logo.height = logo.height * 0.2;
console.log(logo.height);
logo.onload = ()=> {
  //-- Insertar la imagen en el canvas, una vez que
  //-- ya esté cargada!
  ctx.drawImage(logo, 175,25, logo.width, logo.height);
};


//-- Objeto a mover
var objeto = {
  x : 10,   //-- Coordenada x
  y : 250,   //-- Coordenada y
  vx: 4,    //-- Velocidad en x
  ctx : null,  //-- Contexto
  done: false, //-- Si el objeto ha llegado al final

  //-- Inicializar el objeto
  init : function (ctx) {
    this.ctx = ctx;
  },

  //-- Dibujar el objeto
  draw : function () {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, 40, 20)
    this.ctx.strokeRect(this.x, this.y, 50, 20)
  },

  //-- Actualizar la posicion del objeto y redibujar
  update : function () {
    this.x += this.vx;
    if (this.x > (tablero.canvas.width - 30))
      this.done = true;
    this.draw()
  },

  //-- Objeto a su estado inicial
  reset : function () {
    this.x = 10;
    this.done = false;
  }
}

//-- Objeto tablero
var tablero = {
  canvas : document.getElementById("canvas"),
  start : document.getElementById("start"),
  ctx : null,
  timer : null,

  //-- Actualizar el tablero
  update : function () {
    this.clear();
    objeto.update();

    //-- Si objeto ha llegado al fial
    if (objeto.done) {

      //-- Eliminar el timer
      clearInterval(this.timer);
      tablero.timer = null;

      //-- Resetea objeto
      objeto.reset();

      //-- Borrar tablero
      this.clear();

      //-- Dibujar objeto en el origen
      objeto.draw();

    }
  },

  //-- Borrar el tablero
  clear : function () {
    this.ctx.clearRect(0, 200, this.canvas.width, this.canvas.height);
  },

  //-- Inicializar el tablero
  init : function () {
    this.ctx = this.canvas.getContext("2d");

    //-- Cuando se pulsa el botón de start
    //-- se actualiza el tablero cada 20ms
    this.start.onclick = () => {
      if (!this.timer) {
        this.timer = setInterval(()=>{tablero.update()},10);
      }
    }
  },

}

//-- Inicializar tablero
tablero.init()

//-- Inicializar el objeto
objeto.init(tablero.ctx)

//-- Dibujar el objeto
objeto.draw()
