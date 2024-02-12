const boton = document.getElementById("boton");


const boton2 = document.getElementById("boton2");
let anchoActual = 100;
let fuenteAcual = 10;
boton.addEventListener("click", () => {
  anchoActual += 50;
  fuenteAcual += 20;
  boton2.style.fontSize = fuenteAcual + "px";
  boton2.style.width = anchoActual + "px";
  boton2.style.height = anchoActual + "px";
});


const textos = ["¿De verdad?", "¿En serio?", "¿Me lo prometes?", "Vas a hacer llorar al niño jesús"];
let indiceTextoActual = 0;

boton.addEventListener("click", () => {
  boton.textContent = textos[indiceTextoActual];
  indiceTextoActual = (indiceTextoActual + 1) % textos.length;
});