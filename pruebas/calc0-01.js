console.log("Ejecutando JS...");

display = document.getElementById("display")
//boton1 = document.getElementById("boton1")
//boton2 = document.getElementById("boton2")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

digito = document.getElementsByClassName("digito")
// -- Insertar digitos
for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {
    display.innerHTML += ev.target.value;
  }
}


//-- Insertar simbolo de sumar
suma.onclick = (ev) => {
  display.innerHTML += ev.target.value;
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
