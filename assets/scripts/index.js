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
	updateDebito,
	baixaDebito
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
	loadList,
	loadSelectField,
	callDebitosUpdateButton
} from './view'; // se usar "* as view" evita muita coisa
import { autenticarUsuario } from './controllers/usuarioController';
import * as report from './controllers/relatoriosController';

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
		listClientes().then(res => {
			if (res.status) {
				loadSelectField('proprietario', res.result);
			}
		});
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
		listClientes().then(res => {
			if (res.status) {
				loadSelectField('contratado', res.result);
			}
		});
		listInquelinos().then(res => {
			if (res.status) {
				loadSelectField('contratante', res.result);
			}
		});
		listImoveis().then(res => {
			if (res.status) {
				loadSelectField('imovel', res.result);
			}
		});
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
		listContratos().then(res => {
			if (res.status) {
				loadSelectField('contrato', res.result);
			}
		});
		if (parseInt(getValue(DOM.pk))) {
			getDebito();
			callDebitosUpdateButton();
			setEvent(DOM.buttonConfirmDelete, 'click', deleteDebito);
			setEvent(DOM.buttonUpdate, 'click', updateDebito);
			setEvent(DOM.baixaButton, 'click', baixaDebito);
			setUpdatedFields(DOM.camposDebito);
			setUpdatedFields(DOM.camposBaixaDebito);
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
	} else if (modulo === 'debitos_rep' && getValue(list) === 'debitos_rep') {
		listImoveis().then(res => {
			if (res.status) {
				loadSelectField('i.id', res.result);
			} else {
				console.log('Deu pau!');
			}
		});
		listClientes().then(res => {
			if (res.status) {
				loadSelectField('po.id', res.result);
			} else {
				console.log('Deu pau');
			}
		});
		listInquelinos().then(res => {
			if (res.status) {
				loadSelectField('pe.id', res.result);
			} else {
				console.log('Deu pau');
			}
		});
		report.loadDebitosReport().then(res => {
			if (res.status) {
				loadList(res.result, modulo);
			} else {
				console.log('Deu pau!');
			}
		});
	}
};
load(getValue(DOM.modulo));
