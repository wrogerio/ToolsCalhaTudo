const alturaInicial = document.getElementById("alturaInicial");
const alturaFinal = document.getElementById("alturaFinal");
const comprimentoTotal = document.getElementById("comprimentoTotal");
const tamanhoCorte = document.getElementById("tamanhoCorte");
const resultado = document.getElementById("resultado");

let altura = 9999;

alturaInicial.addEventListener("input", function () {
  getAlturas();
});

alturaFinal.addEventListener("input", function () {
  getAlturas();
});

comprimentoTotal.addEventListener("input", function () {
  getAlturas();
});

tamanhoCorte.addEventListener("input", function () {
  getAlturas();
});

function getAlturas() {
  altura = 9999;
  if (alturaInicial.value == "" || alturaFinal.value == "" || comprimentoTotal.value == "" || tamanhoCorte.value == "") {
    return;
  }

  resultado.innerHTML = "";
  var altura_inicial = parseFloat(alturaInicial.value.replace(",", "."));
  var altura_final = parseFloat(alturaFinal.value.replace(",", "."));
  var comprimento_total = parseFloat(comprimentoTotal.value.replace(",", ".")) * 100;
  var tamanho_corte = parseFloat(tamanhoCorte.value.replace(",", ".")) * 100;
  var pecaAtual = 0;
  var tamanho_total = comprimento_total;
  var tamanhoUtilizado = 0;
  

  var ul = document.createElement("ul");
  ul.classList.add("list-group");

  while (altura > altura_final) {
    pecaAtual++;
    

    var inclinacao = (altura_final - altura_inicial) / (comprimento_total - 1);
    var altura = altura_inicial + inclinacao * (tamanho_corte - 1);
    var tamanho_peca = tamanho_corte;

    if (altura < altura_final) {
      altura = altura_final;
    }

    if (tamanho_total > tamanho_corte) {
      tamanhoUtilizado = tamanho_corte / 100;
    } else {
      tamanhoUtilizado = tamanho_total / 100;
    }

    var li = document.createElement("li");
    li.classList.add("list-group-item");

    var spanTitulo = document.createElement("span");
    spanTitulo.innerHTML = `${pecaAtual} - ${tamanhoUtilizado.toFixed(2)} m - ${altura_inicial.toFixed(2)} x ${altura.toFixed(2)}`;

    li.appendChild(spanTitulo);
    ul.appendChild(li);

    resultado.appendChild(ul);
    
    altura_inicial = altura;
    comprimento_total = comprimento_total - tamanho_corte;
    tamanho_total -= tamanho_corte;
  }
}
