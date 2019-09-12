import model from './model';
import view from './view';
import {inserirPessoa, getPessoa, excluirPessoa, alterarPessoa} from './controllers/pessoaController';
import {autenticarUsuario} from './controllers/usuarioController';

const controller = (()=>{

    const setEventListener = () => {
    
        //Login
        view.setEvent(view.DOM.loginButton, 'click', autenticarUsuario);

        //Clientes
        if(parseInt(view.getValue(view.DOM.pk))){
            getPessoa();
            view.callUpdateDeleteButtons();
            view.setEvent(view.DOM.buttonDelete,'click',excluirPessoa);
            view.setEvent(view.DOM.buttonUpdate,'click',alterarPessoa);
            view.setUpdatedFields(view.DOM.camposPessoa);
            view.setUpdatedFields(view.DOM.camposConjuge);
            view.setUpdatedFields(view.DOM.camposBanco);
        }else{
            view.callSaveButtons();
            view.setEvent(view.DOM.saveButtonClientes,'click', inserirPessoa);
        }
    };

    //Public functions
    return {
        init: ()=> { 
            setEventListener(); 
        }
    }
})(model, view);

controller.init();