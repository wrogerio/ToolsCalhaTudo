const cortes = document.getElementById("cortes");
const resultado = document.getElementById("resultado");



cortes.addEventListener("keyup", () => {
  let evolucao = 0;
  resultado.innerHTML = "";
  var cortesLista = cortes.value.split(" ");

  var elementoUL = document.createElement("ul");
  elementoUL.setAttribute("class", "list-group");
  
  cortesLista.forEach((corte, index) => {
    if(corte == "") return;
    evolucao += parseFloat(corte.replace(",", "."));
    var elementoLI = document.createElement("li");
    elementoLI.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    elementoLI.innerHTML = `<span>Pick ${corte}:</span> <span>${evolucao.toFixed(2)} cm</span>`;

    elementoUL.appendChild(elementoLI);
  });

  resultado.appendChild(elementoUL);

  resultado.innerHTML += `<h2 class='pt-2'><b>Corte: ${evolucao.toFixed(2)}</b></h2>`;
});
