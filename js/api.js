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
                    "Content-Type" : "application.json"
                },
                body : JSON.stringify(conteudo)
            })
        } catch(error){
            alert('Erro ao cadastrar conteúdo na trilha!')
        }
    }

}

export default api