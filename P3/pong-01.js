console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);


//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Objeto: Bola
const bola = {

  //-- Constante: Tamaño de la bola
  size : 5,
  //-- Contante: Posicion inicial de la bola
  x_ini : 100,
  y_ini : 200,
  //-- Posicion generica de la bola
  x : 0,
  y : 0,
  //-- Velocidad inicial de la bola
  vx_ini : 6,
  vy_ini : 3,
  //-- Velocidad genérica de la bola
  //-- Inicialmente a cero
  vx : 0,
  vy : 0,
}

//-- Objeto raqueta
const raqI = {
  //-- Constante: Tamaño de la raqueta
  width : 10,
  height: 40,
  //-- Constante: Posicion inicial
  x_ini : 50,
  y_ini : 100,
  //-- Constante: Velocidad
  v_ini : 3,
  //-- Velocidad (variable)
  v : 0,
}
//-- Pintar todos los objetos en el canvas
function bola_draw() {

  //----- Dibujar la Bola
  ctx.beginPath();
  ctx.fillStyle='white';

  //-- x,y, anchura, altura
  ctx.rect(bola.x, bola.y, bola.size, bola.size);
  ctx.fill();
}

function raqI_init(){
  raqI.x = raqI.x_ini;
  raqI.y = raqI.y_ini;
}

function raqI_draw()
{
  //------- Dibujar las raquetas
  ctx.beginPath();
  ctx.fillStyle='white';

  //-- Raqueta izquierda
  ctx.rect(raqI.x, raqI.y, raqI.width, raqI.height);

  //-- Pintar!
  ctx.fill();
}

//-- Pintar todos los objetos en el canvas
function draw() {

  //----- Dibujar la Bola
  bola_draw();

  //-- Dibunar la raqueta izquierda
  raqI_draw();

  //------- Dibujar raqueta derecha
  ctx.beginPath();
  ctx.fillStyle='white';

  //-- Raqueta derecha
  ctx.rect(540, 300, 10, 40);

  //-- Pintar!
  ctx.fill();

  //--------- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //------ Dibujar el tanteo
  ctx.font = "100px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("1", 200, 80);
  ctx.fillText("0", 340, 80);
}

//---- Bucle principal de la animación
function animacion()
{
  if (bola.x >= canvas.width || bola.x <= 0 ) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vx = bola.vx * -1;
  }

  if (bola.y >= canvas.height || bola.y <= 0 ) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vy = bola.vy * -1;
  }

  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqI.x && bola.x <=(raqI.x+10) &&
      bola.y >= raqI.y && bola.y <=(raqI.y+40)) {
    bola.vx = bola.vx * -1;
  }
  //-- Actualizar las posiciones de los objetos móviles
    //-- Actualizar coordenada x de la bola
    bola.x += bola.vx;
    bola.y += bola.vy;

    raqI.y += raqI.v;
  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

//-- Inicializa la bola: A su posicion inicial
bola.x = bola.x_ini;
bola.y = bola.y_ini;

//-- Inicializar la raqueta a su posicion inicial
raqI.x = raqI.x_ini;
raqI.y = raqI.y_ini;

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);


//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  //-- Según la tecla se hace una cosa u otra
  switch (e.key) {
    //-- Teclas A Q: mov raqueta izquierda
    case "a":
       raqI.v = raqI.v_ini;
      break;
    case "q":
      raqI.v = raqI.v_ini * -1;
      break;
    //-- Tecla ESPACIO: Saque
    case " ":
      bola.x = bola.x_ini;
      bola.vx = bola.vx_ini;
      bola.y = bola.y_ini;
      bola.vy = bola.vy_ini;
  console.log("saque!");
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "q"){
    //-- Quitar velocidad de la raqueta
    raqI.v = 0;
  }
}
