console.log("Ejecutando JS...");

display = document.getElementById("display")
//boton1 = document.getElementById("boton1")
//boton2 = document.getElementById("boton2")
sqrt = document.getElementById("sqrt")
igual = document.getElementById("igual")
del = document.getElementById("del")
clear = document.getElementById("clear")
power= document.getElementById("power")

digito = document.getElementsByClassName("digito")
operador = document.getElementsByClassName("operador")
Variable_calculo = 0;
PW = false

power.onclick = () => {
  if (PW == false) {
    PW = true;
    document.body.style.backgroundImage = "url('calculadoraresizedON.jpg')";
  }else{
    PW = false;
    document.body.style.backgroundImage = "url('calculadoraresizedOFF.jpg')";
  }
}
// -- Insertar digitos
for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {
    if (display.innerHTML.length == 1 && display.innerHTML == 0 ) {
      display.innerHTML = ev.target.value;
    }else{
    display.innerHTML += ev.target.value;
    Variable_calculo = display.innerHTML;
    }
  }
}

//-- Insertar operadores
for (i=0; i<operador.length; i++) {
  operador[i].onclick = (ev) => {
    display.innerHTML += ev.target.value;
    Variable_calculo = display.innerHTML;
  }
}

sqrt.onclick = () => {
  console.log("click en RAIZ");
  display.innerHTML = Math.sqrt(display.innerHTML);
}

//-- Borrar ultima cifra
del.onclick = () => {
  console.log("click en del");
  B = display.innerHTML.length - 1;
/*  console.log(display.innerHTML.length);
 console.log(B);*/
  display.innerHTML = display.innerHTML.slice(0,B);
  if (display.innerHTML.length == 0) {
    display.innerHTML = "0";
  }
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
