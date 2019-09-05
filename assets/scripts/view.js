import fg from './formGetter';

export default (()=>{

    const callModal = modal => {
        $('#'+modal).modal('show');
    };

    const exitModal = modal => {
        $('#'+modal).modal('hide');
    };

    const DOM = {
        loginButton: 'enviar',
        estadoCivil: 'estado_civil',
        saveButtonClientes: 'form_clientes_salvar',
        saveButtonBanco: 'salvar_banco',
        cadastrarButtonBanco: 'cadastrar_banco',
        cancelButtonClientes: 'botao_cancelar_clientes',
        camposPessoa: '.campo',
        camposConjuge: '.campo_conjuge',
        camposBanco: '.banco',
        mensagemHead: 'message-head',
        mensagemBody: 'message-body',
        modalMensagem: 'modal_resultado',
        modalBanco: 'modal_dados_bancarios'
    };

    return {
        DOM,
        callModal,
        exitModal,
        enableButton: (button, status) => {
            document.getElementById(button).disabled = status;
        },
        setEvent: (el, ev, fn)=>{
            if(document.getElementById(el)){
                document.getElementById(el).addEventListener(ev, fn);
                console.log(`Existe o elemento ${el}.`);
            }else{
                console.log(`Não existe o elemento ${el}.`);
            }
        },
        getValue: (el)=>{
            if(document.getElementById(el)){
                return document.getElementById(el).value;
            }
        },
        getFields: elementClass => {
            return fg(elementClass);
        },
        resultMessage: (res) => {
            const msgHead = document.getElementById(DOM.mensagemHead);
            const modal = document.getElementById(DOM.modalMensagem).classList;
            if(res.status){
                if(modal.contains('hmodal-danger')){
                    modal.remove('hmodal-danger');
                    modal.add('hmodal-success');
                }
                msgHead.textContent = 'Sucesso!';
            }else{
                if(modal.contains('hmodal-success')){
                    modal.remove('hmodal-success');
                    modal.add('hmodal-danger');
                }
                msgHead.textContent = 'Erro! :(';
            }
            document.getElementById(DOM.mensagemBody).textContent = res.message;
            callModal(DOM.modalMensagem);
        },
        limparCampos: campoClass => {
            const nodes = Array.from(document.querySelectorAll(campoClass));
            nodes.forEach(nd => nd.value = '');
        },
        textHtml: (el, text) => {
            document.getElementById(el).textContent = text;
        }
    }
})();