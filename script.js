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


const textos = ["¿De verdad?", "¿En serio?", "¿Me lo prometes?", "Vas a hacer llorar al niño jesús", "Bosquito está triste", "Dale a sí o un gatito morirá", "Los martes hay macarrones con tomatico", "Si puedes leer ésto me debes un beso", "Le gusta el bate a la mujer del pelotero", "Me pide pistola la mujer del patrullero", "Y la del bombero me está pidiendo fuego 💃", "Ahora en serio, dale a sí", "¿AUN LE SIGUES DANDO A NO?", "No tiene gracia...", "Me rindo, haz lo que quieras... PESÁ"];
let indiceTextoActual = 0;

boton.addEventListener("click", () => {
  boton.textContent = textos[indiceTextoActual];
  indiceTextoActual = (indiceTextoActual + 1) % textos.length;
});
const contenedor = document.getElementById("contenedor");
const imagen = document.getElementById("imagen");

imagen.addEventListener("click", () => {
  imagen.style.display = "block";
});