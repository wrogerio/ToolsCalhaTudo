const circunferenciaDoCano = document.getElementById("circunferenciaDoCano");
const resultado = document.getElementById("resultado");

circunferenciaDoCano.addEventListener("input", function () {
  var circuferencia = circunferenciaDoCano.value;
  var cumprimentoTotal = circuferencia * Math.PI;

  resultado.innerHTML = cumprimentoTotal.toFixed(2);
});