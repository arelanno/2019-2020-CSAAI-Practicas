console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);


//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Obtener Sonidos
const sonido_raqueta = new Audio("pong-raqueta.mp3");
const sonido_rebote = new Audio("pong-rebote.mp3");

//
const puntuacion = {

  pI: 0,
  pD: 0,
  victoria:2,
}


//-- Pintar todos los objetos en el canvas
function draw() {

  //----- Dibujar la Bola
  bola.draw();

  //-- Dibunar la raqueta izquierda
  raqI.draw();

  //------- Dibujar raqueta derecha
  raqD.draw();

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
  ctx.fillText(puntuacion.pI, 200, 80);
  ctx.fillText(puntuacion.pD, 340, 80);

  if (puntuacion.pD == puntuacion.victoria) {
    ctx.font = "80px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("VICTORIA P1", 50, canvas.height/2);
  }else if (puntuacion.pI == puntuacion.victoria) {
    ctx.font = "80px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("VICTORIA P2", 50, canvas.height/2);
   }
}

//Funcion que registra la puntuacion y la posicion para sacar tras un punto
function puntuar(jugador){
  bola.vx = 0;
  bola.vy = 0;

  switch (jugador) {
    case "D":
      bola.x_ini = 500;
      bola.vx_ini = -6;
      bola.init();
      puntuacion.pI += 1;
      break;
    case "I":
      bola.vx_ini = 6;
      bola.x_ini = 100;
      bola.init();
      puntuacion.pD += 1;
        break;
    default:

  }
}
//---- Bucle principal de la animación
function animacion()
{
  //-- Actualizar la raqueta con la velocidad actual
  raqI.update();
  raqD.update();

  if (bola.x >= canvas.width ) {
    //-- Hay colisión. Cambiar el signo de la bola en X
    puntuar("D");
  }
  if ( bola.x <= 0 ) {
    //-- Hay colisión. Cambiar el signo de la bola en X
    puntuar("I");
  }

  if (bola.y >= canvas.height || bola.y <= 0 ) {
    //-- Hay colisión. Cambiar el signo de la bola en Y
    bola.vy = bola.vy * -1;
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }

  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqI.x && bola.x <=(raqI.x+raqI.width) &&
      bola.y >= raqI.y && bola.y <=(raqI.y+raqI.height)) {
    bola.vx = bola.vx * -1;
    bola.vy += 0.5 * raqI.v ;
    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }

  //-- Comprobar si hay colisión con la raqueta derecha
  if (bola.x >= raqD.x && bola.x <=(raqD.x+raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y+raqD.height)) {
    bola.vx = bola.vx * -1;
    bola.vy += 0.5 * raqD.v ;
    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }
  //-- Actualizar las posiciones de los objetos móviles
    //-- Actualizar coordenada x de la bola
  bola.update();

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

//-- Inicializa la bola: Llevarla a su posicion inicial
const bola = new Bola(ctx);
bola.init();

//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta derecha
raqD.x_ini = 540;
raqD.y_ini = 300;
raqD.init();

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
      case "j":
         raqD.v = raqI.v_ini;
        break;
      case "u":
        raqD.v = raqI.v_ini * -1;
        break;
    //-- Tecla ESPACIO: Saque
    case " ":
      bola.init();
      //-- Se le da velocidad
      bola.vx = bola.vx_ini;
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
  if (e.key == "j" || e.key == "u"){
      //-- Quitar velocidad de la raqueta
      raqD.v = 0;
    }
}
