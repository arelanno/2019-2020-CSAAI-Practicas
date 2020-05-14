console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
//-- Definir el tamaño del convas
canvas.width = 300;
canvas.height = 200;

const ctx = canvas.getContext("2d");

ctx.rect(10,10, 100, 50);

ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';
ctx.lineWidth = 20;
ctx.stroke()
  //ctx.fill()

  const linea = canvas.getContext("2d");

  //-- Línea horizontal
  linea.moveTo(100, 100);
  linea.lineTo(200, 200);

  //-- Línea horizontal y vertical, unidas
  linea.moveTo(10, 80);
  linea.lineTo(150,80);
  linea.lineTo(150,20);

  linea.strokeStyle = 'green';
  //-- Cambiar el tamaño de la linea del trazo
  linea.lineWidth = 4;

  //-- Dibujar el trazo
  linea.stroke()
