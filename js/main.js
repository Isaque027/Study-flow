import ui from "./ui.js";
import api from "./api.js";

const formulario = document.querySelector('.form-trilha')
const inputBusca =  document.querySelector('.search-input')

inputBusca.addEventListener('input', async () => {
    const termos = inputBusca.value
    const trilhaFiltrada = await api.filtrarPorTermo(termos)
    await ui.renderizarTrilha(trilhaFiltrada)
})

ui.renderizarTrilha()

formulario.addEventListener('submit', async (event) => {
    event.preventDefault()

    const titulo = document.getElementById('conteudo-nome').value 
    const descricao = document.getElementById('conteudo-descricao').value
    const nivel = document.getElementById('conteudo-nivel').value
    const status = document.getElementById('conteudo-status').value

    const id = document.querySelector('#trilha-id').value

    if(id){
        await api.alterarConteudoTrilha( { id, titulo, descricao, nivel, status } )
    } else{
        await api.cadastrarNaTrilha({ titulo, descricao, nivel, status })
    }
    ui.renderizarTrilha()
})
