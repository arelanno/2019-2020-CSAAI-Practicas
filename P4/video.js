console.log("Ejecutando JS...");

const videop = document.getElementById("videop")
videop.width=700;  //-- Tamaño de la pantalla de video
videop.poster="https://github.com/arelanno/videos-p4/raw/master/lebron-intro.mp4"

Preview.onclick = () => {
  videop.src="https://github.com/arelanno/videos-p4/raw/master/lebron-intro.mp4"
  videop.play();
};
//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video1")
video1.width=400;  //-- Tamaño de la pantalla de video

//video1.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video1.src="https://github.com/arelanno/videos-p4/raw/master/lebron1.mp4"

//----- Obtener elemento de video y configurarlo
const video2 = document.getElementById("video2")
video2.width=400;  //-- Tamaño de la pantalla de video

//video2.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video2.src="https://github.com/arelanno/videos-p4/raw/master/lebron2.mp4"

//----- Obtener elemento de video y configurarlo
const video3 = document.getElementById("video3")
video3.width=400;  //-- Tamaño de la pantalla de video

video3.src="https://github.com/arelanno/videos-p4/raw/master/lebron3.mp4"

//----- Obtener elemento de video y configurarlo
const video4 = document.getElementById("video4")
video4.width=400;  //-- Tamaño de la pantalla de video

video4.src="https://github.com/arelanno/videos-p4/raw/master/lebron4.mp4"


//-- Obtener los botones
const play1 = document.getElementById("play1")
const play2 = document.getElementById("play2")
const play3 = document.getElementById("play3")
const stop4 = document.getElementById("play4")
const prueba = document.getElementById("prueba")
var logo = new Image();
logo.src = 'logopruebas.jpg';

//-- Función de retrollamada del botón de ver
play1.onclick = () => {
  console.log("Click!");
  videop.src=video1.src;
  video1.style.border = "yellow 4px solid"
  video2.style.border = "none";
  video3.style.border = "none";
  video4.style.border = "none";
};

play2.onclick = () => {
  console.log("Click!");
videop.src=video2.src;
video1.style.border = "none";
video2.style.border = "yellow 4px solid";
video3.style.border = "none";
video4.style.border = "none";
};

play3.onclick = () => {
  console.log("Click!");
videop.src=video3.src;
video1.style.border = "none";
video2.style.border = "none";
video3.style.border = "yellow 4px solid";
video4.style.border = "none";
};

play4.onclick = () => {
  console.log("Click!");
videop.src=video4.src;
video1.style.border = "none";
video2.style.border = "none";
video3.style.border = "none";
video4.style.border = "yellow 4px solid";
};

prueba.onclick = () => {
  console.log("Click!");
videop.poster=logo.src;
video1.style.border = "none";
video2.style.border = "none";
video3.style.border = "none";
video4.style.border = "none";
};
