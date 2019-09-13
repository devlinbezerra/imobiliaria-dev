import {
	getPessoa,
	inserirPessoa,
	alterarBanco,
	alterarPessoa,
	excluirPessoa
} from './controllers/pessoaController';
import {
	DOM,
	callClientesSaveButton,
	callClientesUpdateButton,
	setEvent,
	setUpdatedFields,
	getValue
} from './view';
import { autenticarUsuario } from './controllers/usuarioController';

const load = modulo => {
	if (modulo === 'login') {
		setEvent(DOM.loginButton, 'click', autenticarUsuario);
	} else if (modulo === 'clientes') {
		if (parseInt(getValue(DOM.pk))) {
			getPessoa();
			callClientesUpdateButton();
			setEvent(DOM.buttonConfirmDelete, 'click', excluirPessoa);
			setEvent(DOM.buttonUpdate, 'click', alterarPessoa);
			setEvent(DOM.saveButtonBanco, 'click', alterarBanco);
			setUpdatedFields(DOM.camposPessoa);
			setUpdatedFields(DOM.camposConjuge);
			setUpdatedFields(DOM.camposBanco);
		} else {
			callClientesSaveButton();
			setEvent(DOM.saveButtonClientes, 'click', inserirPessoa);
		}
	} else if (modulo === 'inquelinos') {
		if (parseInt(getValue(DOM.pk))) {
			getPessoa();
			callClientesUpdateButton();
			setEvent(DOM.buttonConfirmDelete, 'click', excluirPessoa);
			setEvent(DOM.buttonUpdate, 'click', alterarPessoa);
			setEvent(DOM.saveButtonBanco, 'click', alterarBanco);
			setUpdatedFields(DOM.camposPessoa);
			setUpdatedFields(DOM.camposConjuge);
			setUpdatedFields(DOM.camposBanco);
		} else {
			callClientesSaveButton();
			setEvent(DOM.saveButtonClientes, 'click', inserirPessoa);
		}
	}
};

load(getValue(DOM.modulo));
