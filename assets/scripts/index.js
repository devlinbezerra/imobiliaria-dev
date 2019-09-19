import {
	listClientes,
	listInquelinos,
	getPessoa,
	inserirPessoa,
	alterarBanco,
	alterarPessoa,
	excluirPessoa
} from './controllers/pessoaController';
import {
	listImoveis,
	inserirImovel,
	getImovel,
	deleteImovel,
	updateImovel
} from './controllers/imoveisController';
import {
	listContratos,
	inserirContrato,
	getContrato,
	deleteContrato,
	updateContrato
} from './controllers/contratosController';
import {
	listDebitos,
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
	callInquelinosUpdateButton,
	loadMenu,
	loadList
} from './view';
import { autenticarUsuario } from './controllers/usuarioController';

const load = modulo => {
	loadMenu(modulo);
	const list = 'modulo_' + DOM.list;
	if (modulo === 'login') {
		setEvent(DOM.loginButton, 'click', autenticarUsuario);
	} else if (modulo === 'clientes' && !getValue(list)) {
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
	} else if (modulo === 'inquelinos' && !getValue(list)) {
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
	} else if (modulo === 'imoveis' && !getValue(list)) {
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
	} else if (modulo === 'contratos' && !getValue(list)) {
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
	} else if (modulo === 'debitos' && !getValue(list)) {
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
	} else if (modulo === 'clientes' && getValue(list) === 'clientes') {
		listClientes().then(res => {
			if (res.status) {
				loadList(res.result, modulo);
			} else {
				console.log('Deu pau!');
			}
		});
	} else if (modulo === 'inquelinos' && getValue(list) === 'inquelinos') {
		listInquelinos().then(res => {
			if (res.status) {
				loadList(res.result, modulo);
			} else {
				console.log('Deu pau!');
			}
		});
	} else if (modulo === 'contratos' && getValue(list) === 'contratos') {
		listContratos().then(res => {
			if (res.status) {
				loadList(res.result, modulo);
			} else {
				console.log('Deu pau!');
			}
		});
	} else if (modulo === 'debitos' && getValue(list) === 'debitos') {
		listDebitos().then(res => {
			if (res.status) {
				loadList(res.result, modulo);
			} else {
				console.log('Deu pau!');
			}
		});
	} else if (modulo === 'imoveis' && getValue(list) === 'imoveis') {
		listImoveis().then(res => {
			if (res.status) {
				loadList(res.result, modulo);
			} else {
				console.log('Deu pau!');
			}
		});
	}
};
load(getValue(DOM.modulo));
