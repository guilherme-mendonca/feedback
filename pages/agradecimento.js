function pegarNota() {
    let nota = localStorage.getItem("nota") /*Pega o valor da nota do local storage */

    let paragrafoNota = document.querySelector(".paragrafo_nota")

    paragrafoNota.innerHTML = `Você selecionou ${nota} de 5`
}

pegarNota()