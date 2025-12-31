import api from "./api.js";

const ui = {

    async renderizarTrilha() {
        const trilhas = await api.buscarTrilhas()
        if (!trilhas) return

        trilhas.forEach(this.criarItemTrilha)
    },

    criarItemTrilha(trilha) {
        const timeLine = document.querySelector('.timeline')

        const divPrincipal = document.createElement('div')
        divPrincipal.classList.add('timeline-item', 'concluido')

        const divMarker = document.createElement('div')
        divMarker.classList.add('marker')

        const divConteudo = document.createElement('div')
        divConteudo.classList.add('content')


        const titulo = document.createElement('h2')
        titulo.textContent = trilha.titulo

        const paragrafo = document.createElement('p')
        paragrafo.textContent = trilha.descricao

        const divNivelStatus = document.createElement('div')
        divNivelStatus.classList.add('meta')

        const spanNivel = document.createElement('span')
        spanNivel.textContent = `Nível: ${trilha.nivel}`

        const spanStatus = document.createElement('span')
        spanStatus.textContent = `Status: ${trilha.status}`

        const divActions = document.createElement('div')
        divActions.classList.add('actions')

        const botaoEditar = document.createElement('button')
        botaoEditar.textContent = 'Editar'
        botaoEditar.classList.add('btn-edit')

        const botaoExcluir = document.createElement('button')
        botaoExcluir.textContent = 'Excluir'
        botaoExcluir.classList.add('btn-delete')

        divNivelStatus.append(spanNivel, spanStatus)

        divActions.append(botaoEditar, botaoExcluir)

        divConteudo.append(
            titulo,
            paragrafo,
            divNivelStatus,
            divActions
        )

        divPrincipal.append(divMarker, divConteudo)

        timeLine.appendChild(divPrincipal)

        botaoEditar.addEventListener('click', () => {
            ui.preencherFormulario(trilha.id)
        })

        botaoExcluir.addEventListener('click', async () => {
            await api.deletarConteudoTrilha(trilha.id)
            ui.renderizarTrilha()
        })
    },

    async preencherFormulario(id) {
        const idTrilha = document.querySelector('#trilha-id')
        const titulo = document.getElementById('conteudo-nome')
        const descricao = document.getElementById('conteudo-descricao')
        const nivel = document.getElementById('conteudo-nivel')
        const status = document.getElementById('conteudo-status')

        const trilha = await api.buscarTrilhasPorId(id)

        idTrilha.value = trilha.id
        titulo.value = trilha.titulo
        descricao.value = trilha.descricao
        nivel.value = trilha.nivel
        status.value = trilha.status
    }
}

export default ui