function exibirDados(event){
    event.preventDefault();

    let pegaAutor = document.getElementById('author').value; 
    let pegaTitulo= document.getElementById('titulo').value; 
    let pegaISBN = document.getElementById('isbn').value; 
    let pegaDataPublicacao = document.getElementById('dataPublicacao').value; 
    let dataInsercao = new Date ().toLocaleDateString('pt-br');
    let horarioInsercao = new Date().toLocaleTimeString('pt-br');

    if (pegaAutor ===""){
        alert("Digite o nome do Autor.")
    }else if (pegaTitulo ===""){
        alert ("Digite o título do livro.")
    }else if (pegaISBN === ""){
        alert ("Digite o ISBN.")
    }else if (pegaDataPublicacao ===""){
        alert("Digite a data de Publicação")
    } else{
    document.getElementById('resposta').innerHTML +=`
    <ul>
        <li>
            <strong>Autor:</strong> ${pegaAutor}, <strong>Título:</strong> ${pegaTitulo},
            <strong>ISBN:</strong> ${pegaISBN},
            <strong> Data de Publicação:</strong> ${pegaDataPublicacao},
            <strong>Data de Ingresso no Sistema:</strong> ${dataInsercao}, ${horarioInsercao}
            <a href="#" class="delete">Remover</a>
        </li>
    </ul>
    `

    }limparDados ();

}

function limparDados (){
    document.getElementById('author').value = "";
    document.getElementById('titulo').value = "";
    document.getElementById('isbn').value = "";
    document.getElementById('dataPublicacao').value = "";
 
}

document.getElementById('resposta').addEventListener('click',function(event){
    if (event.target.className === "delete"){
        event.target.parentElement.remove();
    }
})