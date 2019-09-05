import axios from 'axios';

export default (()=> {

    return {
        //prop é uma objeto com data (json com dados), tabela e acao (inserir, alterar, etc)
        db: (prop) => axios.post(`http://localhost/facil/api/${prop.acao}/${prop.tabela}`, prop.data),
        auth: (data) => axios.post(`http://localhost/facil/api/autenticar`, data)
    }
})();