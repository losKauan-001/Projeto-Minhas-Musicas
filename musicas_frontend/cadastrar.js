const urlBackend = "http://localhost:3000";

const inputTitulo = document.getElementById("inputTitulo");
const inputArtista = document.getElementById("inputArtista");
const inputGenero = document.getElementById("inputGenero");
const inputAno = document.getElementById("inputAno");
const inputDuracao = document.getElementById("inputDuracao");

const botaoCadastrar = document.getElementById("botaoCadastrar");

botaoCadastrar.addEventListener("click", cadastrarMusica);

async function cadastrarMusica() {

    if (
        inputTitulo.value === "" ||
        inputArtista.value === "" ||
        inputGenero.value === "" ||
        inputAno.value === "" ||
        inputDuracao.value === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    const musica = {
        titulo: inputTitulo.value,
        artista: inputArtista.value,
        genero: inputGenero.value,
        ano: inputAno.valueAsNumber,
        duracao: inputDuracao.valueAsNumber
    };

    try {
        const resposta = await fetch(`${urlBackend}/cadastrar`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(musica)
        });

        const dados = await resposta.json();

        alert(dados.mensagem);

        if (resposta.ok) {
            window.location.href = "index.html";
        }

    } catch (error) {
        console.log(error);
        alert("Não foi possível conectar ao servidor.");
    }
}