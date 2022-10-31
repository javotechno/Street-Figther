let boton = document.getElementById("boton"),
  img = document.getElementById("img"),
  boton2 = document.getElementById("boton2"),
  img2 = document.getElementById("img2"),
  boton3 = document.getElementById("boton3"),
  img3 = document.getElementById("img3"),
  boton4 = document.getElementById("boton4"),
  img4 = document.getElementById("img4"),
  contador = 0;

function cambio() {
  if (contador >= 0) {
    document.getElementById("img3").style.display = "none";
    document.getElementById("img").style.display = "block";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img4").style.display = "none";
    contador = 1;
  }
}
function cambio2() {
  if (contador <= 1) {
    document.getElementById("img3").style.display = "none";
    document.getElementById("img2").style.display = "block";
    document.getElementById("img").style.display = "none";
    document.getElementById("img4").style.display = "none";
    contador = 0;
  }
}

function cambio3() {
  if (contador >= 0) {
    document.getElementById("img3").style.display = "block";
    document.getElementById("img").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img4").style.display = "none";
    contador = 1;
  }
}

function cambio4() {
  if (contador <= 1) {
    document.getElementById("img3").style.display = "none";
    document.getElementById("img").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img4").style.display = "block";
    contador = 0;
  }
}

boton.addEventListener("click", cambio, true);
boton2.addEventListener("click", cambio2, true);
boton3.addEventListener("click", cambio3, true);
boton4.addEventListener("click", cambio4, true);
