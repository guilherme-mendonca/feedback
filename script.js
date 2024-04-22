let botoes = document.querySelectorAll(".botoes button")
botoes.forEach(botao => { /*para cada botão vai armazenar o botao que foi clickado */
    botao.addEventListener("click", guardarNota)
})

function guardarNota(evento) {
    let nota = evento.target.innerText /*Vai pegar o número que está dentro do botão */

    localStorage.setItem("nota", nota)
}