import view from './../view';
import model from './../model';

export const inserirBanco = async (pessoa)=>{
    const data = {
        tabela: 'dados_bancarios',
        acao: 'inserir',
        data: Object.assign({cliente: pessoa}, view.getFields(view.DOM.camposBanco))
    }
    const banco = await model.db(data);
    view.exitModal(view.DOM.modalBanco);
    view.resultMessage(banco.data);
    view.enableButton(view.DOM.saveButtonBanco, true);
};