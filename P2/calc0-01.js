console.log("Ejecutando JS...");

display = document.getElementById("display")
//boton1 = document.getElementById("boton1")
//boton2 = document.getElementById("boton2")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
del = document.getElementById("del")
clear = document.getElementById("clear")

digito = document.getElementsByClassName("digito")
operador = document.getElementsByClassName("operador")

// -- Insertar digitos
for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {
    display.innerHTML += ev.target.value;
  }
}

//-- Insertar operadores
for (i=0; i<operador.length; i++) {
  operador[i].onclick = (ev) => {
    display.innerHTML += ev.target.value;
  }
}
//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
  display.innerHTML = display.innerHTML;
}
//-- Borrar ultima cifra
del.onclick = () => {
  console.log("click en del");
  B = display.innerHTML.length - 1;
//  console.log(display.innerHTML.length);
//  console.log(B);
  display.innerHTML = display.innerHTML.slice(0,B);

}
//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
