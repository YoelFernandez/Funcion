let canvas = document.getElementById("canvaYoel");
let contexto = canvas.getContext("2d");

contexto.beginPath();
contexto.strokeStyle = "red";
contexto.moveTo(300, 0);
contexto.lineTo(300, 600);
contexto.moveTo(0, 300);
contexto.lineTo(600, 300);
contexto.stroke();
function iniciar() {
  contexto.strokeStyle = "#2fd";

  let valorA = parseInt(document.getElementById("va").value);
  let valorB = parseInt(document.getElementById("vb").value);

  let x1 = 300;
  let x2 = -300;
  let y1 = valorA * x1 + valorB;
  let y2 = valorA * x2 + valorB;
  contexto.beginPath();
  contexto.moveTo(300 + x1, 300 - y1);
  contexto.lineTo(300 + x2, 300 - y2);
  contexto.stroke();
}