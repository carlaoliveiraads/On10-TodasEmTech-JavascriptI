document.querySelector('#botaoDeEnviar').addEventListener('click' , function armazenarDados (event){
    event.preventDefault();

    let nome = document.getElementById('nomeDaPessoa')
    let exibeResposta = document.getElementById('resposta')

    if(nome.value ==- ''){
        exibeResposta.innerText = 'Por favor, digite seu nome!'
    } else {
        exibeResposta.innerText = (`${nome.value}, dados salvos com sucesso.`)
    }
})