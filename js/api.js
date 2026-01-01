const URL_BASE = 'http://localhost:3000'

const api = {

    async buscarTrilhas(){
        try{
            const trilhas = await fetch(`${URL_BASE}/trilhas`)
            return trilhas.json()
        } catch(error){
            alert('Erro ao buscar as trilhas!')
        }
    },

    async cadastrarNaTrilha(conteudo){
        try{
            const response = await fetch(`${URL_BASE}/trilhas`, {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(conteudo)
            })
        } catch(error){
            alert('Erro ao cadastrar conteúdo na trilha!')
        }
    },

    async alterarConteudoTrilha(conteudo){
        try{
            const response = await fetch(`${URL_BASE}/trilhas/${conteudo.id}`, {
                method : "PUT",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(conteudo)
            })
        }catch(error){
            alert("Erro ao alterar conteúdo da trilha!")
        }
    },

    async buscarTrilhasPorId(id){
        try{
            const response = await fetch(`${URL_BASE}/trilhas/${id}`)
            return response.json()
        }catch(error){
            alert('Erro ao buscar conteúdo na trilha por id!')
        } 
    },

    async deletarConteudoTrilha(id){
        try{
            const response = await fetch(`${URL_BASE}/trilhas/${id}`, {
                method : "DELETE"
            })
        }catch(error){
            alert('Erro ao deletar conteúdo da trilha!')
        }
    },

    async filtrarPorTermo(termos){
        try{
            const trilha = await this.buscarTrilhas()
            const termosMaiusculo = termos.toUpperCase()
            const trilhaFiltrada = trilha.filter( c => {
                return ((c.titulo.toUpperCase().includes(termosMaiusculo)) || (c.descricao.toUpperCase().includes(termosMaiusculo)))
            })
            return trilhaFiltrada
        }catch(error){

        }
    }

}

export default api