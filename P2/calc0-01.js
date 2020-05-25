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
    power.style.backgroundImage = "url('botonon.jpg')";
        display.innerHTML = "0";
  }else{
    PW = false;
    power.style.backgroundImage = "url('botonoff.jpg')";
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
  console.log("click en percent");
  if (PW) {
  display.innerHTML = display.innerHTML/100 + "*";
}}

sqrt.onclick = () => {
  audiogeneral.play();
  console.log("click en RAIZ");
  if (PW) {
    try { display.innerHTML = Math.sqrt(display.innerHTML);
    }catch (e) {
      display.innerHTML = "SYNTAX ERROR";
    }
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
    try { display.innerHTML = eval(display.innerHTML);
    }catch (e) {
      display.innerHTML = "SYNTAX ERROR";
    }
}}

//-- Poner a cero la expresion
clear.onclick = () => {
  audiogeneral.play();
  if (PW) {
  display.innerHTML = "0";
}}

//botones useless
for (i=0; i<useless.length; i++) {
  useless[i].onclick = (ev) => {
   if (PW) {
     audioerror.play();
   }else {
     audiogeneral.play();
   }
} }
