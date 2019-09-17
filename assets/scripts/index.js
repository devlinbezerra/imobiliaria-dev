import {
	getPessoa,
	inserirPessoa,
	alterarBanco,
	alterarPessoa,
	excluirPessoa
} from './controllers/pessoaController';
import {
	inserirImovel,
	getImovel,
	deleteImovel,
	updateImovel
} from './controllers/imoveisController';
import {
	inserirContrato,
	getContrato,
	deleteContrato,
	updateContrato
} from './controllers/contratosController';
import {
	inserirDebito,
	getDebito,
	deleteDebito,
	updateDebito
} from './controllers/debitosController';
import {
	DOM,
	callClientesSaveButton,
	callClientesUpdateButton,
	setEvent,
	setUpdatedFields,
	getValue,
	callInquelinosSaveButton,
	callInquelinosUpdateButton
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
			callInquelinosUpdateButton();
			setEvent(DOM.buttonConfirmDelete, 'click', excluirPessoa);
			setEvent(DOM.buttonUpdate, 'click', alterarPessoa);
			setUpdatedFields(DOM.camposPessoa);
			setUpdatedFields(DOM.camposConjuge);
		} else {
			callInquelinosSaveButton();
			setEvent(DOM.saveButtonClientes, 'click', inserirPessoa);
		}
	} else if (modulo === 'imoveis') {
		if (parseInt(getValue(DOM.pk))) {
			getImovel();
			callInquelinosUpdateButton();
			setEvent(DOM.buttonConfirmDelete, 'click', deleteImovel);
			setEvent(DOM.buttonUpdate, 'click', updateImovel);
			setUpdatedFields(DOM.camposImovel);
		} else {
			callInquelinosSaveButton();
			setEvent(DOM.saveButtonClientes, 'click', inserirImovel);
		}
	} else if (modulo === 'contratos') {
		if (parseInt(getValue(DOM.pk))) {
			getContrato();
			callInquelinosUpdateButton();
			setEvent(DOM.buttonConfirmDelete, 'click', deleteContrato);
			setEvent(DOM.buttonUpdate, 'click', updateContrato);
			setUpdatedFields(DOM.camposContrato);
		} else {
			callInquelinosSaveButton();
			setEvent(DOM.saveButtonClientes, 'click', inserirContrato);
		}
	} else if (modulo === 'debitos') {
		if (parseInt(getValue(DOM.pk))) {
			getDebito();
			callInquelinosUpdateButton();
			setEvent(DOM.buttonConfirmDelete, 'click', deleteDebito);
			setEvent(DOM.buttonUpdate, 'click', updateDebito);
			setUpdatedFields(DOM.camposDebito);
		} else {
			callInquelinosSaveButton();
			setEvent(DOM.saveButtonClientes, 'click', inserirDebito);
		}
	}
};
load(getValue(DOM.modulo));
