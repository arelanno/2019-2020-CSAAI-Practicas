console.log("Ejecutando JS...");

// -- Acceder al párrafo de prueba
const Boton1 = document.getElementById('Boton1');
const Boton2 = document.getElementById('Boton2');
const Salida = document.getElementById('Salida');

//-- Funcion de retrollamada
Boton1.onclick = () => {
  console.log("Click!");
  Salida.innerHTML =Salida.innerHTML + Boton1.innerHTML;
  //-- Cambiar el color de fondo
  //-- Si no tenia color asignado, poner amarillo
  if (test.style.backgroundColor=="") {
    test.style.backgroundColor = "red";

  //-- Ya tiene color: quitarselo
  } else {
    test.style.backgroundColor = "";
  }
}
Boton2.onclick = () => {
  console.log("Click!");
  Salida.innerHTML = Salida.innerHTML + Boton2.innerHTML;
  //-- Cambiar el color de fondo
  //-- Si no tenia color asignado, poner amarillo
  if (test.style.backgroundColor=="") {
    test.style.backgroundColor = "red";

  //-- Ya tiene color: quitarselo
  } else {
    test.style.backgroundColor = "";
  }
}
