import api from "./api.js";

const ui = {

    async renderizarTrilha(){
        const trilhas = await api.buscarTrilhas()
        if (!trilhas) return

        trilhas.forEach( this.criarItemTrilha )
    },

    criarItemTrilha(trilha){
        const timeLine = document.querySelector('.timeline')
        timeLine.innerHTML += `
            <div class="timeline-item concluido">
                <div class="marker"></div>

                <div class="content">
                    <h2>${trilha.titulo}</h2>
                    <p>${trilha.descricao}</p>

                    <div class="meta">
                        <span>Nível: ${trilha.nivel}</span>
                        <span>Status: ${trilha.status}</span>
                    </div>

                    <div class="actions">
                        <button class="btn-edit">Editar</button>
                        <button class="btn-delete">Excluir</button>
                    </div>
                </div>
            </div>
        `
    }
}

export default ui