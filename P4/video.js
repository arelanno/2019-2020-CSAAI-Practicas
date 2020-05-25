console.log("Ejecutando JS...");

const videop = document.getElementById("videop")
videop.width=700;  //-- Tamaño de la pantalla de video
videop.height=340;
//-- Imagen estática a mostrar cuando el video no ha arrancado
videop.src="https://github.com/arelanno/videos-p4/raw/master/lebron-intro.mp4"
Preview.onclick = () => {
  videop.play();
};
//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video1")
video1.width=400;  //-- Tamaño de la pantalla de video
video1.height=200;
//-- Imagen estática a mostrar cuando el video no ha arrancado
video1.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video1.src="https://github.com/arelanno/videos-p4/raw/master/lebron1.mp4"

//----- Obtener elemento de video y configurarlo
const video2 = document.getElementById("video2")
video2.width=400;  //-- Tamaño de la pantalla de video
video2.height=200;
video2.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video2.src="https://github.com/arelanno/videos-p4/raw/master/lebron2.mp4"

//----- Obtener elemento de video y configurarlo
const video3 = document.getElementById("video3")
video3.width=400;  //-- Tamaño de la pantalla de video
video3.height=200;
video3.src="https://github.com/arelanno/videos-p4/raw/master/lebron3.mp4"

//----- Obtener elemento de video y configurarlo
const video4 = document.getElementById("video4")
video4.width=400;  //-- Tamaño de la pantalla de video
video4.height=200;
video4.src="https://github.com/arelanno/videos-p4/raw/master/lebron4.mp4"


//-- Obtener los botones
const play1 = document.getElementById("play1")
const stop1 = document.getElementById("stop1")
const play2 = document.getElementById("play2")
const stop2 = document.getElementById("stop2")

//-- Función de retrollamada del botón de ver
play1.onclick = () => {
  console.log("Click!");
  video1.play();
};
play2.onclick = () => {
  console.log("Click!");
  video2.play();
};

//-- Funcion de retrollamada del boton de parar
stop1.onclick = () => {
  video1.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video1.src=null;
}
