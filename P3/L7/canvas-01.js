console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
//-- Definir el tamaño del convas
canvas.width = 300;
canvas.height = 200;

const ctx = canvas.getContext("2d");

ctx.beginPath();
//-- Dibujar un circulo: coordenadas x,y del centro
//-- Radio, Angulo inicial y angulo final
ctx.arc(100, 50, 40, 0, 2 * Math.PI);
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
