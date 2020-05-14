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
