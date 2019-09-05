import model from './model';
import view from './view';

const controller = (()=>{
    let tmp = {};

    const inserirBanco = async ()=>{
        const data = {
            tabela: 'dados_bancarios',
            acao: 'inserir',
            data: Object.assign({cliente: tmp.pessoaId}, view.getFields(view.DOM.camposBanco))
        }
        const banco = await model.db(data);
        console.log(tmp);
        console.log(banco);
        view.exitModal(view.DOM.modalBanco);
        view.resultMessage(banco.data);
        view.limparCampos(view.DOM.camposBanco);
    };

    const inserirPessoa = async ()=> {
        //Inserir conjuge
        const conjugeStatus = view.getValue(view.DOM.estadoCivil) === 'Casado(a)';
        let conjuge;
        if(conjugeStatus){
            const conjugeDados = {
                tabela: 'pessoa',
                acao: 'inserir',
                data: view.getFields(view.DOM.camposConjuge)
            }
            conjuge = await model.db(conjugeDados);
        }

        //Inserir pessoa
        if(conjugeStatus && conjuge.data.status){
            const prop = {
                tabela: 'pessoa',
                acao: 'inserir',
                data: Object.assign({conjuge: conjuge.data.id}, view.getFields(view.DOM.camposPessoa))
            };
            const pessoa = await model.db(prop);
            view.resultMessage(pessoa.data);
        }else if(conjugeStatus){
            view.resultMessage(conjuge.data);
        }else{
            const prop = {
                tabela: 'pessoa',
                acao: 'inserir',
                data: view.getFields(view.DOM.camposPessoa)
            }
            const pessoa = await model.db(prop);
            tmp.pessoaId = pessoa.data.id;
            view.resultMessage(pessoa.data);
            if(pessoa.data.status){
                view.enableButton(view.DOM.cadastrarButtonBanco, false);
                view.enableButton(view.DOM.saveButtonClientes, true);
                view.textHtml(view.DOM.cancelButtonClientes, 'Novo Registro');
            }
        }
        
        //Limpar campos

    };

    const setEventListener = () => {
    
        //Login
        view.setEvent(view.DOM.loginButton, 'click', ()=>{
            const data = {
                user_name: view.getValue('user_name'),
                pwd: view.getValue('pwd')
            };
            model.auth(data)
                .then(res => {
                    if(res.data){
                        document.querySelector('.message').style.color = 'blue';
                        document.querySelector('.message').textContent = 'Informações autenticadas';
                    }else{
                        document.querySelector('.message').style.color = 'red';
                        document.querySelector('.message').textContent = 'Usuário ou senha inválida';
                    }
                });
        });

        //Clientes
        view.setEvent(view.DOM.estadoCivil,'change', ()=>{
            const res = view.getValue('estado_civil');
            if(res === 'Casado(a)'){
                $('#conjuge').collapse('show');
            }else{
                $('#conjuge').collapse('hide');
            }
        });

        view.setEvent(view.DOM.saveButtonClientes,'click', inserirPessoa);
        view.setEvent(view.DOM.saveButtonBanco,'click', inserirBanco);

    };

    //Public functions
    return {
        init: ()=> { 
            setEventListener(); 
        }
    }
})(model, view);

controller.init();