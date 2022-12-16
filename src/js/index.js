const abas = document.querySelectorAll(".aba");

abas.forEach((aba) => {
  aba.addEventListener("click", function () {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    aba.classList.add("selecionado");

    const informacaoSelecionada = document.querySelector(".informacao.selecionado")
    const idDaInformacao = `informacao-${aba.id}`
    const informacaoDaAba = document.getElementById(idDaInformacao)
    informacaoSelecionada.classList.remove("selecionado")
    informacaoDaAba.classList.add("selecionado")
    
  });
});
