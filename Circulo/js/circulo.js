const circunferenciaDoCano = document.getElementById("circunferenciaDoCano");
const resultado = document.getElementById("resultado");

circunferenciaDoCano.addEventListener("input", function () {
  var circuferencia = circunferenciaDoCano.value;

  var cumprimentoTotal = (circuferencia * 2.54) * Math.PI;
  
  if(cumprimentoTotal > 0)
    cumprimentoTotal -= 0.5;

  resultado.innerHTML = cumprimentoTotal.toFixed(2);
});