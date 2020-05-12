console.log("Ejecutando JS...");

display = document.getElementById("display")
//boton1 = document.getElementById("boton1")
//boton2 = document.getElementById("boton2")
sqrt = document.getElementById("sqrt")
igual = document.getElementById("igual")
del = document.getElementById("del")
clear = document.getElementById("clear")
percent =document.getElementById("percent")
power= document.getElementById("power")

digito = document.getElementsByClassName("digito")
operador = document.getElementsByClassName("operador")
useless = document.getElementsByClassName("pointless")
var audioerror = document.getElementById("audioerror");
var audiogeneral = document.getElementById("audiogeneral");

PW = false

power.onclick = () => {
  audiogeneral.play();
  if (PW == false) {
    PW = true;
    document.body.style.backgroundImage = "url('calculadoraresizedON.jpg')";
        display.innerHTML = "0";
  }else{
    PW = false;
    document.body.style.backgroundImage = "url('calculadoraresizedOFF.jpg')";
      display.innerHTML = ".";
  }
}
// -- Insertar digitos
for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {
    audiogeneral.play();
    if (PW) {
    if (display.innerHTML.length == 1 && display.innerHTML == 0) {
      display.innerHTML = ev.target.value;
    }else{
    display.innerHTML += ev.target.value;
    }
  } }
}

//-- Insertar operadores
for (i=0; i<operador.length; i++) {
  operador[i].onclick = (ev) => {
    audiogeneral.play();
    if (PW) {
    display.innerHTML += ev.target.value;
  }}
}

percent.onclick = () => {
  audiogeneral.play();
  console.log("click en RAIZ");
  if (PW) {
  display.innerHTML = display.innerHTML/100 + "*";
}}

sqrt.onclick = () => {
  audiogeneral.play();
  console.log("click en RAIZ");
  if (PW) {
  display.innerHTML = Math.sqrt(display.innerHTML);
}}

//-- Borrar ultima cifra
del.onclick = () => {
  audiogeneral.play();
  console.log("click en del");
  if (PW) {
  B = display.innerHTML.length - 1;
/*  console.log(display.innerHTML.length);
 console.log(B);*/
  display.innerHTML = display.innerHTML.slice(0,B);
  if (display.innerHTML.length == 0) {
    display.innerHTML = "0";
  }}
}

//-- Evaluar la expresion
igual.onclick = () => {
  audiogeneral.play();
  if (PW) {
  display.innerHTML = eval(display.innerHTML);
}}

//-- Poner a cero la expresion
clear.onclick = () => {
  audiogeneral.play();
  if (PW) {
  display.innerHTML = "0";
}}

for (i=0; i<useless.length; i++) {
  useless[i].onclick = (ev) => {
   if (PW) {
     audioerror.play();
   }else {
     audiogeneral.play();
   }
} }
